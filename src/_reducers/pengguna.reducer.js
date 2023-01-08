const initialState = { anchor: 'left',
    pengguna: [],
    open: false,
    id: '',  
    name: '',
    email: '',
    gender: '',
    status: ''
 };


export function pengguna(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_PENGGUNA':
            return {
            ...state,
            pengguna: action.pengguna
            };
        case 'PENGGUNA_DETAIL':
            return {
                ...state,
                id: action.id,  
                name: action.name,
                email: action.email,
                gender: action.gender,
                status: action.status
            };
        case "USER_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };    
        default:
            return state
    }
  }