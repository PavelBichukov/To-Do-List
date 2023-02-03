import { getDateFromLocalStorage } from '../utils.js'

// Функция для вывода кол-ва выполненных задач
export function showDonedTasksColly () {
  const tasks = getDateFromLocalStorage()
  const tasksDone = tasks.filter((tasks) => tasks.isCompleted === true).length
  document.querySelector('.tasks-quantity-container__total-completed-tasks').innerText = `Total completed tasks : ${tasksDone}`
}
