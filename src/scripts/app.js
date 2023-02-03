import { getDateFromLocalStorage } from './utils.js'
import { createMainContainer } from './components/createMainContaner.js'
import { createForm } from './components/createForm.js'
import { addTasksCounterContainer } from './components/addTasksCounterContainer.js'
import { renderCard } from './modules/renderTasks.js'
import { showTotalTasksColly } from './modules/showTotalTasksColly.js'
import { showDonedTasksColly } from './modules/showDonedTasksColly.js'
import { addListeners } from './modules/addListeners.js'

// Функция-сборник функций, необходимых для запуска приложения
export function initApp () {
  createMainContainer()
  createForm()
  addTasksCounterContainer()
  renderCard(getDateFromLocalStorage())
  showTotalTasksColly()
  showDonedTasksColly()
  addListeners()
}
