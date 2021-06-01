
export const useEvent = ({
  emit
}) => {

  const handleClick = (event) => {
    emit("click", event)
  }

  return {
    handleClick
  }

}
