// Функция для отрисовки и добавления формы
export function createForm () {
  const headerForm = document.createElement('form')
  headerForm.className = 'header__form'
  headerForm.name = 'header-form'
  headerForm.action = '#'
  document.querySelector('.header').append(headerForm)

  const formDeleteButton = document.createElement('button')
  formDeleteButton.className = 'form__delete-button'
  formDeleteButton.type = 'button'
  formDeleteButton.name = 'deleteAll'
  formDeleteButton.innerText = 'Delete All'
  headerForm.append(formDeleteButton)

  const formInput = document.createElement('input')
  formInput.className = 'form__input'
  formInput.type = 'text'
  formInput.name = 'todo'
  formInput.placeholder = 'Enter todo...'
  headerForm.append(formInput)

  const formAddButton = document.createElement('button')
  formAddButton.className = 'form__add-button'
  formAddButton.type = 'submit'
  formAddButton.innerText = 'Add'
  headerForm.append(formAddButton)

  return headerForm
}
