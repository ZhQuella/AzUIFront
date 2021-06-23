import { nextTick } from "vue";
import { mount } from '@vue/test-utils'
import { AzContainer, AzHeader, AzFooter, AzMain, AzAside } from '..'

describe('AzContainer', () => {

  test('create', () => {
    const wrapper = mount(AzContainer)
    expect(wrapper.element).not.toBeNull()
  });

  test('props direction', async (done) => {
    const wrapper = mount({
      components: { AzContainer, AzHeader, AzFooter, AzAside, AzMain },
      template: `<AzContainer direction="horizontal">
        <AzHeader></AzHeader>
        <AzMain></AzMain>
      </AzContainer>`
    });
    await nextTick();
    expect(wrapper.classes()).toContain('is-horizontal');
    done();
  });

  test('auto horizontal', async (done) => {
    const wrapper = mount({
      components: { AzContainer, AzHeader, AzFooter, AzAside, AzMain },
      template: `<AzContainer>
        <AzAside></AzAside>
        <AzMain></AzMain>
      </AzContainer>`
    });
    await nextTick();
    expect(wrapper.classes()).toContain('is-horizontal');
    done();
  });
});

describe('AzHeader', () => {
  test('create', () => {
    const wrapper = mount(AzHeader);
    expect(wrapper.element).not.toBeNull();
  });

  test('height', async (done) => {
    const wrapper = mount(AzHeader, {
      props: {
        height: '100px'
      }
    });
    await nextTick();
    expect(wrapper.vm.$el.style.height).toEqual('100px');
    done();
  });
});

describe('AzFooter', () => {
  test('create', () => {
    const wrapper = mount(AzFooter);
    expect(wrapper.element).not.toBeNull();
  });

  test('height', async (done) => {
    const wrapper = mount(AzFooter, {
      props: {
        height: '100px'
      }
    });
    await nextTick();
    expect(wrapper.vm.$el.style.height).toEqual('100px');
    done();
  });
});

describe('AzMain', () => {
  test('create', () => {
    const wrapper = mount(AzMain);
    expect(wrapper.element).not.toBeNull();
  });
});

describe('AzAside', () => {
  test('create', async (done) => {
    const wrapper = mount({
      components: { AzContainer, AzHeader, AzFooter, AzAside, AzMain },
      template: `<AzContainer>
        <AzAside></AzAside>
      </AzContainer>`
    });
    await nextTick();
    expect(wrapper.find('.az-aside').element).not.toBeNull();
    expect(wrapper.find('.az-aside').element.style.width).toEqual('250px');
    done();
  });

  test('width', async (done) => {
    const wrapper = mount({
      components: { AzContainer, AzHeader, AzFooter, AzAside, AzMain },
      template: `<AzContainer>
        <AzAside width="200px"></AzAside>
      </AzContainer>`
    });
    await nextTick();
    expect(wrapper.find('.az-aside').element.style.width).toEqual('200px');
    done();
  });
});
