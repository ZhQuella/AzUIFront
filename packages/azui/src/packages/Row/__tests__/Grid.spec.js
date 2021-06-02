import Row from "../Row.vue";
import Col from "../../Col/Col.vue";
import { mount } from "@vue/test-utils";

describe("Row Content", () => {

  it("content", () => {
    const Comp = {
      template: `<Row><Col></Col></Row>`,
    };
    const wrapper = mount(Comp, {
      global: {
        components: {
          Row,
          Col
        }
      },
    });
    expect(wrapper.findComponent({name: "az-row"}).findComponent({name: "az-col"}).exists()).toBe(true);
  }); 

});

describe("Row.vue", () => {

  it("gutter", () => {
    const wrapper = mount(Row, {
      props: {
        gutter: 20
      }
    })
    expect(wrapper.attributes("style")).toBe(
      "margin-left: -10px; margin-right: -10px;" 
    );
  });

  it("gutter is null array", () => {
    const wrapper = mount(Row, {
      props: {
        gutter: []
      }
    })
    expect(wrapper.attributes("style")).toBe(
      "margin: 0px;" 
    );
  });

  it("gutter is array of one", () => {
    const wrapper = mount(Row, {
      props: {
        gutter: [20]
      }
    })
    expect(wrapper.attributes("style")).toBe(
      "margin: -10px -10px -10px -10px;"
    );
  });

  it("gutter is array of two", () => {
    const wrapper = mount(Row, {
      props: {
        gutter: [20, 40]
      }
    })
    expect(wrapper.attributes("style")).toBe(
      "margin: -10px -20px -10px -20px;"
    );
  });

  it("gutter is array of three", () => {
    const wrapper = mount(Row, {
      props: {
        gutter: [20, 40, 10]
      }
    })
    expect(wrapper.attributes("style")).toBe(
      "margin: -20px -20px -10px -20px;"
    );
  });

  it("gutter is array of fore", () => {
    const wrapper = mount(Row, {
      props: {
        gutter: [20, 40, 10, 5]
      }
    })
    expect(wrapper.attributes("style")).toBe(
      "margin: -20px -40px -10px -5px;"
    );
  });

  it("justify of not", () => {
    const wrapper = mount(Row, {});
    expect(wrapper.classes()).toContain(`az-row--start`);
  });

  it("justify of center", () => {
    const justify = "center";
    const wrapper = mount(Row, {
      props: {
        justify
      }
    });
    expect(wrapper.classes()).toContain(`az-row--${justify}`);
  });

  it("align of not", () => {
    const wrapper = mount(Row, {});
    expect(wrapper.classes()).toContain(`az-row--top`);
  });

  it("align of center", () => {
    const align = "middle";
    const wrapper = mount(Row, {
      props: {
        align
      }
    });
    expect(wrapper.classes()).toContain(`az-row--${align}`);
  });

  it("warp of true", () => {
    const warp = true;
    const wrapper = mount(Row, {
      props: {
        warp
      }
    });
    expect(wrapper.classes()).toContain(`az-row--no-wrap`);
  });

  it("warp of true", () => {
    const tag = "ul";
    const wrapper = mount(Row, {
      props: {
        tag
      }
    });
    expect(wrapper.wrapperElement.localName).toBe(tag);
  });

});
