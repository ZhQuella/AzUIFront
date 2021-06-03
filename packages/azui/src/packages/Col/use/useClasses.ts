import { computed } from 'vue';

type Breakpoint = 'xl' | 'lg' | 'md' | 'sm' | 'xs';
const RESPONSIVE_ARRAY: Breakpoint[] = ['xl', 'lg', 'md', 'sm', 'xs'];

type ColPropType = number | string
export type SizeProp = {
  span?: ColPropType
  order?: ColPropType
  offset?: ColPropType
  push?: ColPropType
  pull?: ColPropType
}

export const useClasses = ({
  span,
  props
}) => {

  const spanNumber = computed(() => {
    return span?.value;
  });

  return computed(() => {
    let sizeObjs: any[] = [];
    RESPONSIVE_ARRAY.reverse().forEach((size) => {
      let sizeProps: SizeProp = {}
      const propSize = props[size];
      if (typeof propSize !== 'undefined') {
        if (typeof propSize === 'number') {
          sizeProps = { span: propSize }
        } else {
          sizeProps = propSize || {}
        }
        sizeObjs.push({
          [`az-col-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
          [`az-col-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
          [`az-col-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
          [`az-col-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
          [`az-col-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0
        })
      }
    })
    return [
      {
        [`az-col-${spanNumber?.value}`]: spanNumber?.value,
        [`az-col-order-${props.order}`]: props.order,
        [`az-col-offset-${props.offset}`]: props.offset,
        [`az-col-push-${props.push}`]: props.push,
        [`az-col-pull-${props.pull}`]: props.pull
      },
      ...sizeObjs
    ];
  })
}
