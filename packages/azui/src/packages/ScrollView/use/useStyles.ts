import { computed } from "vue";

export const useScrollStyles = ({
  height
}) => {

  const scrollStyles = computed(() => {
    return {
      height: `${height.value}px`
    }
  });

  return {
    scrollStyles
  }
}

export const renderThumbStyle = ({ position, size, type, bar, area }) => {
  const style = {} as any;
  const translate = `translate${bar.axis}(${ position }%)`;
  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;
  style[type === 'vertical'? 'width': 'height'] = area.value;
  return style;
}

export const useBarStyles = ({
  size,
  position,
  type,
  bar,
  area
}) => {

  const thumbStyle = computed(() => {
    return renderThumbStyle({
      size: size.value,
      position: position.value,
      type: type.value,
      bar,
      area
    })
  });


  return {
    thumbStyle
  }
}

