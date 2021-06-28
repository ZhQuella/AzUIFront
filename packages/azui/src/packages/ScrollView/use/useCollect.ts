import { ref, reactive, watch, nextTick, inject, Ref } from "vue";

export const useScrollCollect = ({
  slots
}) => {

  const scrollbar = ref();
  const wrap = ref();
  const resize = ref();

  const sizeConfig = reactive({
    sizeWidth: "0px",
    sizeHeight: "0px"
  });

  const update = () => {
    if (!wrap.value) return;
    const heightPercentage = (wrap.value.clientHeight * 100) / wrap.value.scrollHeight;
    const widthPercentage = (wrap.value.clientWidth * 100) / wrap.value.scrollWidth;
    sizeConfig.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
    sizeConfig.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
  }

  watch(() => slots.default, () => {
    nextTick(update)
  })


  return {
    scrollbar,
    wrap,
    resize,
    sizeConfig,
    update
  }
}

export const useBarCollect = ({
  type
}) => {

  const scrollbar = inject('scrollbar', {} as Ref<HTMLElement>);
  const wrap = inject('scrollbar-wrap', {} as Ref<HTMLElement>);
  const instance = ref(null);
  const thumb = ref(null);

  const bar = BAR_MAP[type.value];

  return {
    bar,
    thumb,
    instance,
    scrollbar,
    wrap
  }

}

export const BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top',
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left',
  }
};

