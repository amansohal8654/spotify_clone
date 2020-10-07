export const initialState = {
    usre: null,
    playlists: [],
    playing: false,
    item: null,
    //token:null
    //token:"BQCZ3F28z4m3g-iM66dSqgIooRALgWvvsIzFmiw_3HcxZcQN-THhEj0vpnP_ipALp_J4mzoPU0f-JptfBuZhivFIBpHmBxLPIGXRgo6gxjysZb2OZofQRnXn7Ian43bdf6PxhyKqBJZowo0eJmA3lLg97z_ShhAEyT9tG1T-EFz8rOvt"
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
            
        case 'SET_PLAY_LIST':
            return{
                ...state,
                playlists: action.playlists
            };

        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer