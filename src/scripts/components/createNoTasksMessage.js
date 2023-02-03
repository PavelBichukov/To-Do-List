// Функция создает блок с текстом, когда задач нет
export function createNoTasksMessage () {
  const noTasks = document.createElement('h2')
  noTasks.className = 'card-container__no-tasks'
  noTasks.innerText = 'You don\'t have any task'
  document.querySelector('.card-container').append(noTasks)
  return noTasks
}
