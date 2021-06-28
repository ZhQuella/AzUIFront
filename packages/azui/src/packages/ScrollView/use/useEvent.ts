import { onMounted, onBeforeUnmount, nextTick, reactive, ref } from "vue";
import { addEventResize, removeResizeListener } from "../../../utils/elementResize";

import { on, off } from "../../../utils/dom";

export const useScrollEvent = ({
  update,
  noresize,
  native,
  resize,
  wrap,
  emit
}) => {

  const positionConfig = reactive({
    moveY: 0,
    moveX: 0
  })

  const handleScroll = () => {
    if (wrap.value) {
      positionConfig.moveY = (wrap.value.scrollTop * 100) / wrap.value.clientHeight;
      positionConfig.moveX = (wrap.value.scrollLeft * 100) / wrap.value.clientWidth;
      emit('scroll', {
        scrollLeft: positionConfig.moveX,
        scrollTop: positionConfig.moveY
      })
    }
  }

  onMounted(() => {
    if (!native.value) {
      nextTick(update)
    };
    if (!noresize.value) {
      addEventResize(resize.value, update);
      addEventListener('resize', update);
    };
  })

  onBeforeUnmount(() => {
    if (!noresize.value) {
      removeResizeListener(resize.value, update);
      removeEventListener('resize', update);
    };
  })

  return {
    handleScroll,
    positionConfig
  }

}

export const useBarEvent = ({
  type,
  thumb,
  instance,
  bar,
  wrap,
  scrollbar,
  size
}) => {

  const barStore = ref({});
  const cursorDown = ref<boolean|null>(null);
  const cursorLeave = ref<boolean|null>(null);
  const visible = ref(false);
  let onselectstartStore: any = null;

  const mouseMoveDocumentHandler = (event) => {
    if (cursorDown.value === false) return;
    const prevPage = barStore.value[bar.axis];
    if (!prevPage) return;
    const offset = ((instance.value.getBoundingClientRect()[bar.direction] - event[bar.client]) * -1);
    const thumbClickPosition = (thumb.value[bar.offset] - prevPage);
    const thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / instance.value[bar.offset]);
    wrap.value[bar.scroll] = (thumbPositionPercentage * wrap.value[bar.scrollSize] / 100);
  }

  const mouseUpDocumentHandler = () => {
    cursorDown.value = false;
    barStore.value[bar.axis] = 0;
    off(document, 'mousemove', mouseMoveDocumentHandler);
    document.onselectstart = onselectstartStore;
    if (cursorLeave.value) {
      visible.value = false;
    }
  }

  const startDrag = (event) => {
    event.stopImmediatePropagation();
    cursorDown.value = true;
    on(document, 'mousemove', mouseMoveDocumentHandler);
    on(document, 'mouseup', mouseUpDocumentHandler);
    onselectstartStore = document.onselectstart;
    document.onselectstart = () => false;
  }

  const clickThumbHandler = (event) => {
    event.stopPropagation();
    if (event.ctrlKey || [1, 2].includes(event.button)) {
      return;
    };
    window.getSelection()?.removeAllRanges();
    startDrag(event);
    barStore.value[bar.axis] = (
      event.currentTarget[bar.offset] - (
        event[bar.client] - event.currentTarget.getBoundingClientRect()[bar.direction])
    );
  }

  const clickTrackHandler = (event) => {
    const offset = Math.abs(event.target.getBoundingClientRect()[bar.direction] - event[bar.client]);
    const thumbHalf = (thumb.value[bar.offset] / 2);
    const thumbPositionPercentage = ((offset - thumbHalf) * 100 / instance.value[bar.offset]);
    wrap.value[bar.scroll] = (thumbPositionPercentage * wrap.value[bar.scrollSize] / 100);
  }

  const mouseMoveScrollbarHandler = () => {
    cursorLeave.value = false;
    visible.value = !!size;
  };

  const mouseLeaveScrollbarHandler = () => {
    cursorLeave.value = true;
    visible.value = Boolean(cursorDown.value);
  };

  onMounted(() => {
    on(scrollbar.value, 'mousemove', mouseMoveScrollbarHandler)
    on(scrollbar.value, 'mouseleave', mouseLeaveScrollbarHandler)
  });

  onBeforeUnmount(() => {
    off(document, 'mouseup', mouseUpDocumentHandler)
    off(scrollbar.value, 'mousemove', mouseMoveScrollbarHandler)
    off(scrollbar.value, 'mouseleave', mouseLeaveScrollbarHandler)
  });

  return {
    clickThumbHandler,
    clickTrackHandler,
    visible
  };
}
