import { getDateFromLocalStorage } from '../utils.js'

// Функция для вывода общего кол-ва задач
export function showTotalTasksColly () {
  const tasks = getDateFromLocalStorage()
  const quantity = tasks.length
  document.querySelector('.tasks-quantity-container__total-tasks').innerText = `Total tasks : ${quantity}`
}
