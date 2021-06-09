import ScrollView from "../ScrollView.vue";
import { mount } from "@vue/test-utils";
import { nextTick } from "vue";

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
