import { createStore } from 'vuex'
import imagesModule from './modules/images.js';

export default createStore({
  modules: {
    images: imagesModule,
  },
});