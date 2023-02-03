import { getDateFromLocalStorage, setDateToLocalStorage } from '../utils.js'
import { renderCard } from '../modules/renderTasks.js'
import { showDonedTasksColly } from '../modules/showDonedTasksColly.js'

// Функция отслеживает изменения состояния чекбокса в конкретной карточке
// и записывает это состояние в LocalStorage
export function handlerCheckedStatusChange (event) {
  const tasks = getDateFromLocalStorage()
  if (!event.target.matches('.todo-card__checkbox')) {
    return event.target
  }
  const index = tasks.map((element) => (+element.id === +event.target.id)).indexOf(true)
  tasks[index].isCompleted = !tasks[index].isCompleted
  setDateToLocalStorage('task', tasks)
  renderCard(tasks)
  showDonedTasksColly()
}
