import { computed } from "vue";
import { getElType } from "../../../utils/validation";

export const useStyles = (gutter) => {

  const styles = computed(() => {
    let gutterNum = gutter.value;

    if(getElType(gutterNum) === "Array"){
      if(!gutterNum.length){
        return {
          margin: "0px"
        }
      }
      if(gutterNum.length === 1){
        let num = gutterNum[0] / 2;
        return {
          marginLeft: `-${num}px`,
          marginRight: `-${num}px`,
          marginTop: `-${num}px`,
          marginBottom: `-${num}px`
        }
      }
      if(gutterNum.length === 2){
        let [vertical, cross] = gutterNum;
        return {
          marginLeft: `-${cross / 2}px`,
          marginRight: `-${cross / 2}px`,
          marginTop: `-${vertical / 2}px`,
          marginBottom: `-${vertical / 2}px`
        }
      }
      if(gutterNum.length === 3){
        let [top, cross, bottom] = gutterNum;
        return {
          marginLeft: `-${cross / 2}px`,
          marginRight: `-${cross / 2}px`,
          marginTop: `-${top}px`,
          marginBottom: `-${bottom}px`
        }
      }
      if(gutterNum.length >= 4){
        let [top, right, bottom, left] = gutterNum;
        return {
          marginLeft: `-${left}px`,
          marginRight: `-${right}px`,
          marginTop: `-${top}px`,
          marginBottom: `-${bottom}px`
        }
      }
    }
    if(isNaN(gutterNum)){
      gutterNum = 0;
    }
    if(getElType(gutterNum) === "Number"){
      gutterNum = gutterNum / 2;
      return {
        marginLeft: `-${gutterNum}px`,
        marginRight: `-${gutterNum}px`
      }
    }
    return {};
  });

  return styles;
};
