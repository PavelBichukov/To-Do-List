import { showTotalTasksColly } from './showTotalTasksColly.js'
import { showDonedTasksColly } from './showDonedTasksColly.js'
import { getDateFromLocalStorage } from '../utils.js'
import { renderCard } from '../modules/renderTasks.js'

// Функция для удаления всех задач
export function handlerDeleteAllTasks () {
  const tasks = getDateFromLocalStorage()
  const confirmation = confirm('Are you sure you want to delete all tasks?')
  if (confirmation) {
    localStorage.clear()
    tasks.length = 0
    renderCard(tasks)
    showTotalTasksColly()
    showDonedTasksColly()
  }
}
