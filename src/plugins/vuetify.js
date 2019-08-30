import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'font-awesome/css/font-awesome.min.css'
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa4',
  },
    theme: {
        themes: {
            light: {
                primary: colors.red.darken1, // #E53935
                secondary: colors.red.lighten4, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
            },
        },
    },
});
