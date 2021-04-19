import AzButton from "./Button.vue";

/* istanbul ignore next */
AzButton.install = function (app) {
  app.component(AzButton.name, AzButton);
};

export default AzButton;
