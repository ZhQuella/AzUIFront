import Button from "../Button.vue";
import { mount } from "@vue/test-utils";

describe("Button Content", () => {
  it("content", () => {
    const Comp = {
      template: `<div><Button>默认按钮</Button></div>`,
    };
    const wrapper = mount(Comp, {
      global: {
        components: {
          Button,
        }
      },
    });
    expect(wrapper.findComponent({ name: "AzButton" }).text()).toContain("默认按钮");
  });
})

describe("Button Attribute", () => {

  it("by props.nativeType", () => {
    const nativeType = "submit";
    const wrapper = mount(Button, {
      props: {
        nativeType
      }
    });
    expect(wrapper.attributes('type')).toBe(nativeType)
  })

  it("by props.nativeType default", () => {
    const wrapper = mount(Button, {});
    expect(wrapper.attributes('type')).toBe("button");
  })

})

describe("Button classes names", () => {

  it("by props.size", () => {
    const size = 'small';
    const wrapper = mount(Button, {
      props: {
        size
      }
    })
    expect(wrapper.classes()).toContain(`az-button--${size}`)
  })

  it("by props.type", () => {
    const type = 'success';
    const wrapper = mount(Button, {
      props: {
        type
      }
    })
    expect(wrapper.classes()).toContain(`az-button--${type}`)
  })

  it("by button loading", () => {
    const loading = true;
    const wrapper = mount(Button, {
      props: {
        loading
      }
    })
    expect(wrapper.classes()).toContain(`is-loading`)
  })

  it("by button disabled", () => {
    const disabled = true;
    const wrapper = mount(Button, {
      props: {
        disabled
      }
    })
    expect(wrapper.classes()).toContain(`is-disabled`)
  })

  it("by button round", () => {
    const round = true;
    const wrapper = mount(Button, {
      props: {
        round
      }
    })
    expect(wrapper.classes()).toContain(`is--round`)
  })

  it("by button block", () => {
    const block = true;
    const wrapper = mount(Button, {
      props: {
        block
      }
    })
    expect(wrapper.classes()).toContain(`is--block`)
  })

  it("by button circle", () => {
    const circle = true;
    const wrapper = mount(Button, {
      props: {
        circle
      }
    })
    expect(wrapper.classes()).toContain(`is--circle`)
  })

})
