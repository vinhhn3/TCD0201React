export const loginStatusSuccessfully = (status) => {
    return {
        type: 'LOGIN_STATUS',
        payload: status
    }
}