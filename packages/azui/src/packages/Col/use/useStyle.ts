import { computed } from 'vue';
import { getElType } from "../../../utils/validation";

export const useStyles = ({
  config
}) => {

  const styles = computed(() => {
    const { gutter } = config;
    let gutterNum = gutter;
    if(getElType(gutterNum) === "Array"){
      if(!gutterNum.length){
        return {
          padding: "0px"
        }
      }
      if(gutterNum.length === 1){
        let num = gutterNum[0] / 2;
        return {
          paddingLeft: `${num}px`,
          paddingRight: `${num}px`,
          paddingTop: `${num}px`,
          paddingBottom: `${num}px`
        }
      }
      if(gutterNum.length === 2){
        let [vertical, cross] = gutterNum;
        return {
          paddingLeft: `${cross / 2}px`,
          paddingRight: `${cross / 2}px`,
          paddingTop: `${vertical / 2}px`,
          paddingBottom: `${vertical / 2}px`
        }
      }
      if(gutterNum.length === 3){
        let [top, cross, bottom] = gutterNum;
        return {
          paddingLeft: `${cross / 2}px`,
          paddingRight: `${cross / 2}px`,
          paddingTop: `${top}px`,
          paddingBottom: `${bottom}px`
        }
      }
      if(gutterNum.length >= 4){
        let [top, right, bottom, left] = gutterNum;
        return {
          paddingLeft: `${left}px`,
          paddingRight: `${right}px`,
          paddingTop: `${top}px`,
          paddingBottom: `${bottom}px`
        }
      }
    }
    if(isNaN(gutterNum)){
      gutterNum = 0;
    }
    if(getElType(gutterNum) === "Number"){
      gutterNum = gutterNum / 2;
      return {
        paddingLeft: `${gutterNum}px`,
        paddingRight: `${gutterNum}px`
      }
    }
    return {};
  });

  return styles;
}
