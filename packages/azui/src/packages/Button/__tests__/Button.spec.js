import Button from "../Button.vue";
import { mount } from "@vue/test-utils";

it("content", () => {
  const Comp = {
    template: `<div><Button>默认按钮</Button></div>`,
  };

  const wrapper = mount(Comp, {
    global: {
      components: {
        Button,
      },
    },
  });

  expect(wrapper.findComponent({ name: "AzButton" }).text()).toContain(
    "默认按钮"
  );
});
