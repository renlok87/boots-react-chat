const initialState = {
    message: null,
    name: null,
    author: null,
    id: null,
    time: null,
    login: ''
}
export const  messages = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
        case 'MESSAGE_RECEIVED':
            return {
                ...state,
                    message: action.message,
                    author: action.author,
                    id: action.id,
                    time: action.time,

            };
        default:
            return state;
    }
};

export const users = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                name: action.name,
                id: action.id
            };
        case 'USERS_LIST':
            return action.users;
        default:
            return state;
    }
};

export const login = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.name;
        default:
            return state;
    }
};

