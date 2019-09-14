import {getTime} from "../../utils/utils";

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, author) => ({
    type: 'ADD_MESSAGE',
    id: nextMessageId++,
    message,
    author,
    time: getTime()
})

export const addUser = name => ({
    type: 'ADD_USER',
    id: nextUserId++,
    name
});

export const messageReceived = (message, author) => ({
    type: 'MESSAGE_RECEIVED',
    id: nextMessageId++,
    message,
    author,
    time: getTime()
});

export const usersList = users => ({
    type: 'USERS_LIST',
    users
});

export const login = name => ({
    type: 'LOGIN',
    name
});