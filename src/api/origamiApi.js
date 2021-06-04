import axiosClient from './axiosClient'


const origamiApi = {
    getPost: (params) => {
        const url = '/origami/all'
        return axiosClient.get(url, {
            params
        })
    },

    postThoughts: (formValues) => {
        const url = '/origami'
        return axiosClient.post(url, formValues, {
            withCredentials: true
        })
    },

    minePosts: (params) => {
        const url = '/origami/mine'
        return axiosClient.get(url, {
            params,
            withCredentials: true
        })
    }
}

export default origamiApi