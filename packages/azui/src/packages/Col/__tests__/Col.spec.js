import Col from "../Col.vue";
import Row from "../../Row/Row.vue";
import { mount } from "@vue/test-utils";

describe("Col content", () => {

  it("content", () => {
    const Comp = {
      template: `<Row><Col>文字内容</Col></Row>`,
    };
    const wrapper = mount(Comp, {
      global: {
        components: {
          Row,
          Col
        }
      },
    });
    expect(wrapper.findComponent({name: "az-row"}).findComponent({name: "az-col"}).text()).toContain("文字内容");
  });

});

describe("Col.vue", () => {

  it('AzCol span', () => {
    const wrapper = mount(Col, {
      props: {
        span: 12
      }
    });
    expect(wrapper.classes()).toContain('az-col-12');
  });

  it('AzCol pull', () => {
    const wrapper = mount(Col, {
      props: {
        span: 12,
        pull: 3
      }
    });
    expect(wrapper.classes()).toContain('az-col-pull-3');
  });

  it('AzCol push', () => {
    const wrapper = mount(Col, {
      props: {
        span: 12,
        push: 3
      }
    });
    expect(wrapper.classes()).toContain('az-col-push-3');
  });

  it('AzCol gutter', () => {
    const wrapper = mount({
      components: { Row, Col },
      template: `<Row :gutter="20"><Col :span="12" ></Col></Row>`
    });
    const col = wrapper.getComponent(Col);
    expect(col.vm.$el.style.paddingLeft === '10px').toBe(true);
    expect(col.vm.$el.style.paddingRight === '10px').toBe(true);
  });

  it('AzCol responsive', () => {
    const wrapper = mount({
      components: { Row, Col },
      template: `<Row :gutter="20"><Col :sm="{ span: 4, offset: 2 }" :md="8" :lg="{ span: 6, offset: 3 }"></Col></Row>`
    });
    const col = wrapper.getComponent({ name: Col.name });
    expect(col.classes()).toContain('az-col-sm-4');
    expect(col.classes()).toContain('az-col-sm-offset-2');
    expect(col.classes()).toContain('az-col-lg-6');
    expect(col.classes()).toContain('az-col-lg-offset-3');
    expect(col.classes()).toContain('az-col-md-8');
  });

});
