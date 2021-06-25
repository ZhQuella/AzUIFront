import { createApp } from 'vue';

// import "reset-css/sass/_reset.scss";
import 'vite-plugin-vuedoc/style.css';

import AzUI from 'azui';
import 'azui/dist/lib/index.css';

import { router } from './router';
import App from './App.vue';
import './index.scss';

const app = createApp(App);

app.use(AzUI);
app.use(router);
app.mount('#app');
