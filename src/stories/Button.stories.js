import MyButton from '../../packages/button/Button.vue';
import '../../packages/theme-chalk/src/index.scss';

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { MyButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<my-button v-bind="args">123</my-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Primary2 = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Primary3 = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

