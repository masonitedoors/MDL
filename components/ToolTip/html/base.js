export const changeTooltip = (element) => {
  const classItem = 'tooltip--display-tooltip'

  if (element.classList.contains(classItem)) {
    element.classList.remove(classItem)
  } else {
    element.classList.add(classItem)
  }
}
