import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify)

const vuetify = new Vuetify({
    icons: {
        iconfont: 'md',
    },
    theme: {
        themes: {
            light: {
                primary: '#009688',
                secondary: '#8bc34a',
                accent: '#cddc39',
                error: '#f44336',
                warning: '#ff9800',
                info: '#03a9f4',
                success: '#4caf50'
            }
        },
    },
});

export default vuetify;