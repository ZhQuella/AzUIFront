import { computed } from "vue";

export const useStyles = (gutter) => {

  const styles = computed(() => {
    let gutterNum = gutter.value;
    if(isNaN(gutterNum)){
      gutterNum = 0;
    }
    gutterNum = gutterNum / 2;
    return {
      marginLeft: `-${gutterNum}px`,
      marginRight: `-${gutterNum}px`
    }
  });

  return styles;
};
