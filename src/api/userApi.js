import axiosClient from './axiosClient'

const userApi = {
    register: (registerValues) => {
        const url = '/user/register'
        return axiosClient.post(url, registerValues)
    },

    login: (loginValues) => {
        const url = '/user/login'
        return axiosClient.post(url, loginValues, {
            withCredentials: true
        })
    },

    mineProfile: () => {
        const url = '/auth'
        return axiosClient.get(url, {
            baseURL: 'http://localhost:9999/',
            withCredentials: true
        })
    }
}

export default userApi