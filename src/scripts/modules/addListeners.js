import { handlerSetInputItemToLocalStorage } from './addTasks.js'
import { handlerCheckedStatusChange } from './taskCheckedStatusChange.js'
import { handlerDeleteCurrentTask } from './deleteCurrentTask.js'
import { handlerDeleteAllTasks } from './deleteAllTasks.js'

// Функция добавляет слушателей событий на элементы
export function addListeners () {
  document.querySelector('.header__form').addEventListener('submit', handlerSetInputItemToLocalStorage)
  document.querySelector('.card-container').addEventListener('click', handlerCheckedStatusChange)
  document.querySelector('.card-container').addEventListener('click', handlerDeleteCurrentTask)
  document.querySelector('.form__delete-button').addEventListener('click', handlerDeleteAllTasks)
}
