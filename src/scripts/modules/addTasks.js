import { getDateFromLocalStorage, setDateToLocalStorage } from '../utils.js'
import { renderCard } from '../modules/renderTasks.js'
import { showTotalTasksColly } from '../modules/showTotalTasksColly.js'
import { showDonedTasksColly } from '../modules/showDonedTasksColly.js'

// Функция принимает данные из инпута, добавляет их в шаблон и создает карточку
// Так же сразу записывает новые данные в LocalStorage
export function handlerSetInputItemToLocalStorage (event) {
  const tasks = getDateFromLocalStorage()
  event.preventDefault()
  const inputText = event.target.todo.value
  event.target.todo.value = ''
  if (inputText.trim().length > 0) {
    tasks.push({
      id: Date.now(),
      text: inputText,
      date: new Date().toLocaleDateString(),
      isCompleted: false
    })
    setDateToLocalStorage('task', tasks)
  } else {
    alert('You didn\'t enter anything')
  }
  renderCard(tasks)
  showTotalTasksColly()
  showDonedTasksColly()
}
