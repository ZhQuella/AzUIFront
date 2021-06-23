
export const useEvent = ({
  emit,
  loading, 
  disabled
}) => {

  const handleClick = (event) => {
    if(disabled.value || loading.value) return;
    emit("click", event)
  }

  return {
    handleClick
  }

}
