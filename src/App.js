import React, {useEffect, useState} from 'react';
import './App.css';
import Login from "./Login"
import {get_token_fromUrl} from './spotify'
import SpotifyWebApi from "spotify-web-api-js"
import Player from "./Player"
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = get_token_fromUrl();
    window.location.hash = "";
    const _token  = hash.access_token;

    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      
      spotify.setAccessToken(_token); 

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAY_LIST",
          playlists: playlists
        })
      })

      spotify.getPlaylist('2475UAWU5Q1u1wdRb5IaVs').then((response) => {
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      })
    }

    console.log("i have a token", _token);
  }, [])

  console.log(user)

  return (
    <div className="App">
      {
        token ? (
          <Player spotify={spotify}/>
        ): 
        (
        <Login />
        )
      }
    </div>
  );
}

export default App;
