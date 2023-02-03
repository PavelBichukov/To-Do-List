
// функция для отрисовки и добавления карточки
export function createEmptyCard (id, text, date, isCompleted) {
  const toDoCard = document.createElement('div')
  toDoCard.className = 'todo-card'
  document.querySelector('.card-container').append(toDoCard)
  if (isCompleted) toDoCard.classList.add('checked')

  const cardCheckBoxLabel = document.createElement('label')
  cardCheckBoxLabel.htmlFor = `${id}`
  cardCheckBoxLabel.classList = 'todo-card__checkbox-label'
  toDoCard.append(cardCheckBoxLabel)

  const cardCheckBoxCustomStyle = document.createElement('span')
  cardCheckBoxCustomStyle.className = 'todo-card__checkbox-decor'
  cardCheckBoxLabel.append(cardCheckBoxCustomStyle)

  const cardCheckBox = document.createElement('input')
  cardCheckBox.id = `${id}`
  cardCheckBox.className = 'todo-card__checkbox'
  cardCheckBox.type = 'checkbox'
  cardCheckBox.name = 'cardCheckbox'
  cardCheckBox.checked = isCompleted
  cardCheckBoxLabel.prepend(cardCheckBox)

  const cardText = document.createElement('p')
  cardText.className = 'todo-card__text'
  cardText.innerText = `${text}`
  toDoCard.append(cardText)
  if (isCompleted) cardText.classList.add('checked')

  const cardDate = document.createElement('p')
  cardDate.className = 'todo-card__date'
  cardDate.innerText = `${date}`
  toDoCard.append(cardDate)
  if (isCompleted) cardDate.classList.add('checked')

  const cardDeleteButton = document.createElement('button')
  cardDeleteButton.className = 'todo-card__delete-button'
  cardDeleteButton.id = `${id}`
  cardDeleteButton.type = 'button'
  cardDeleteButton.innerText = '✖'
  toDoCard.append(cardDeleteButton)

  return toDoCard
}
