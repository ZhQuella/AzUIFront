import { createApp } from 'vue';

import AzUI from 'azui';
import 'azui/dist/lib/index.css';

import App from './App.vue';

const app = createApp(App);

app.use(AzUI);
app.mount('#app');
