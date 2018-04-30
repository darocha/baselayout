import { can } from '../../components/authorization/authorization.service';

const INITIAL_STATE = {
    isAuthenticated: false,
    scopes:[],
    roles:[],
    username: '',
    access_token: '',
    can: can
  };
    
  function userReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case 'AUTHENTICATED': {
        return {
              ...state,
              isAuthenticated: true,
              scopes: action.user.scopes,
              roles: action.user.roles,
              username: action.user.username,
              access_token: action.user.access_token
            }
        }
        case 'LOGOUT': return state;
        default: return state;
    }
  }
  
  export default userReducer;

