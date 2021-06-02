import { App, Component } from "vue"; 
import { version } from '../package.json';
import "./styles/index.scss";
import { AzButton } from './packages/Button';
import { ButtonGroup } from "./packages/ButtonGroup";
import { AzRow } from "./packages/Row";
import { AzCol } from "./packages/Col";

const components: Component[] = [
  AzButton,
  ButtonGroup,
  AzRow,
  AzCol
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
  AzButton,
  ButtonGroup,
  AzRow,
  AzCol
};

export default AzUI;
