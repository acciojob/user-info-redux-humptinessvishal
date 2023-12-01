import { NAME, EMAIL } from "./actionType";

export const setName = (name) => {
    return {
        type: NAME,
        payload: name
    }
}


export const setEmail = (email) => {
    return {
        type: EMAIL,
        payload: email
    }
}