import ScrollView from "../ScrollView.vue";
import { mount } from "@vue/test-utils";
import { nextTick, h } from "vue";

describe("ScrollView Content", () => {
  
  it("content", async (done) => {
    const content = "默认内容";
    const Comp = {
      template: `<ScrollView>${content}</ScrollView>`,
    };
    const wrapper = mount(Comp, {
      global: {
        components: {
          ScrollView
        }
      },
    });
    await nextTick();
    expect(wrapper.findComponent({ name: "AzScrollView" }).find('.az-scroll-view-content').text()).toContain(content);
    done();
  });

});

describe("ScrollView Prop", () => {

  it("scroll Size", async (done) => {
    const size = "30px";
    const wrapper = mount(ScrollView, {
      props: {
        size
      }
    });
    await nextTick();
    expect(wrapper.find(".az-scroll-vertical-bar").element.style.width).toEqual(size);
    expect(wrapper.find(".az-scroll-vertical-bar").element.style.borderRadius).toEqual(size);

    expect(wrapper.find(".az-scroll-cross-bar").element.style.height).toEqual(size);
    expect(wrapper.find(".az-scroll-cross-bar").element.style.right).toEqual(size);
    expect(wrapper.find(".az-scroll-cross-bar").element.style.borderRadius).toEqual(size);
    done();
  });

  it("scroll tag", () => {
    const wrapper = mount(ScrollView, {
      props: {
        tag: 'ul'
      },
      slots: {
        default: [1, 2, 3].map((item) => h('li', item))
      }
    })
    expect(
      wrapper.find('.az-scroll__view').element instanceof HTMLUListElement
    ).toBeTruthy()
  });

});
