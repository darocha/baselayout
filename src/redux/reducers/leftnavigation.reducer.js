const INITIAL_STATE = {
    resources: [
        { name: 'Home', url: '/', id: 'Home' }
    ],
    active:'Home'
  };
    
  function leftNavReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'BUILD_LEFT_NAVIGATION': {
            return {
              resources: action.navItems
            }
        }
        case 'SET_ACTIVE':
            return {
            ...state,
            active: action.id
        }
        case 'RESET_LEFT_NAVIGATION': return state;
      default: return state;
    }
  }
  
export default leftNavReducer;
