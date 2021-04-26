import { App } from "vue";
import AzButton from './Button.vue';

AzButton.install = (app: App): void => {
  app.component(AzButton.name, AzButton)
}

export default AzButton;
