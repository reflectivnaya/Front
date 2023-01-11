import axios from 'axios'

export default{
    actions: {
        fetchImages({ commit }){
            axios.get('/api/main.json')
                .then(res => {
                    commit('updateImage', res)
                });
        },
    },
    mutations: {
        updateImage(state, images){
            state.images = images
        }
    },
    state:{
        images:[]
    },
    getters:{
        allImages(state){
            return state.images;
        }
    }
}