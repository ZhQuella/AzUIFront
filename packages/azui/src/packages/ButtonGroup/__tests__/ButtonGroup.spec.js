import Button from "../../Button/Button.vue";
import ButtonGroup from "../ButtonGroup.vue";
import { mount } from "@vue/test-utils";

describe("ButtonGroup content", () => {

  it("content", () => {
    const Comp = {
      template: `<ButtonGroup><Button></Button></ButtonGroup>`,
    };
    const wrapper = mount(Comp, {
      global: {
        components: {
          Button,
          ButtonGroup
        }
      },
    });
    expect(wrapper.findComponent({name: "az-button-group"}).findComponent({name: "az-button"}).exists()).toBe(true);
  });

});

describe("ButtonGroup Child attribute", () => {

  it("child size", () => {
    const Comp = {
      template: `<ButtonGroup size="mini"><Button></Button></ButtonGroup>`,
    };
    const wrapper = mount(Comp, {
      global: {
        components: {
          Button,
          ButtonGroup
        }
      },
    });
    expect(wrapper.findComponent({name: "az-button-group"}).findComponent({name: "az-button"}).classes()).toContain(`az-button--mini`);
  })

  it("child type", () => {
    const Comp = {
      template: `<ButtonGroup type="success"><Button></Button></ButtonGroup>`,
    };
    const wrapper = mount(Comp, {
      global: {
        components: {
          Button,
          ButtonGroup
        }
      },
    });
    expect(wrapper.findComponent({name: "az-button-group"}).findComponent({name: "az-button"}).classes()).toContain(`az-button--success`);
  })

});



