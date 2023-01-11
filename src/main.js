/*import { createApp } from 'vue';
import router from './router';
import 'vuetify/styles';
/!*import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';*!/
import store from './store';
/!*
const vuetify = createVuetify({
    components,
    directives,
  })*!/

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');*/

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

import store from './store/index.js';
import App from './App.vue';
import router from './router/index';
import * as Vue from 'vue';

Vue.createApp(App)
    .use(router)
    .use(store)
    .use(vuetify)
    .mount('#app');

