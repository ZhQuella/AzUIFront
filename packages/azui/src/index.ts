import { App, Component } from "vue"; 
import { version } from '../package.json';
import "./styles/index.scss";
import AzButton from './packages/Button';


const components: Component[] = [
  AzButton
];

const install = (app: App) => {
  const useComponent = (component: Component) => {
    if (component.name) {
      app.component(component.name, component)
    } else {
      throw 'component need name'
    }
  }
  components.forEach((component: Component) => {
    useComponent(component);
  });
};

const AzUI = {
  version,
  install
}

export {
  version,
  AzButton
};

export default AzUI;
