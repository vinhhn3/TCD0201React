const initialState = {
    loginStatus: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_STATUS': {
            const newLoginStatus = action.payload

            return {
                ...state,
                loginStatus: newLoginStatus
            }
        }

        default:
            return state;
    }
}

export default loginReducer;