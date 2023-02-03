import { createNoTasksMessage } from '../components/createNoTasksMessage.js'
import { createEmptyCard } from '../components/createEmptyCard.js'

// Функция-рендер карточки
export function renderCard (tasks) {
  document.querySelector('.card-container').innerHTML = ''
  if (tasks.length > 0) {
    tasks.forEach((task) => {
      const taskCard = createEmptyCard(task.id, task.text, task.date, task.isCompleted)
      document.querySelector('.card-container').append(taskCard)
    })
  } else {
    createNoTasksMessage()
  }
}
