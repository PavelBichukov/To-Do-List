import { getDateFromLocalStorage } from '../utils.js'
import { showTotalTasksColly } from '../modules/showTotalTasksColly.js'
import { showDonedTasksColly } from '../modules/showDonedTasksColly.js'
import { renderCard } from './renderTasks.js'

// Функция для удаления конкретно выбранной задачи
export function handlerDeleteCurrentTask (event) {
  const tasks = getDateFromLocalStorage()
  if (!event.target.matches('.todo-card__delete-button')) {
    return event.target
  }
  const confirmation = confirm('Do you want to delete this task?')
  if (confirmation) {
    const index = tasks.filter((element) => (+element.id !== +event.target.id))
    tasks.length = 0
    for (const key in index) {
      tasks.push(index[key])
    }
    localStorage.setItem('task', JSON.stringify(tasks))
    showTotalTasksColly()
    showDonedTasksColly()
    renderCard(tasks)
  }
}
