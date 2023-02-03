// Функция добавляет элемент, в котором показано кол-во задач
export function addTasksCounterContainer () {
  const tasksQuantityContaier = document.createElement('div')
  tasksQuantityContaier.className = 'tasks-quantity-container'
  document.querySelector('.header').append(tasksQuantityContaier)

  const totalTasksQuantity = document.createElement('p')
  totalTasksQuantity.className = 'tasks-quantity-container__total-tasks'
  tasksQuantityContaier.append(totalTasksQuantity)

  const totalCompletedTasksQuantity = document.createElement('p')
  totalCompletedTasksQuantity.className = 'tasks-quantity-container__total-completed-tasks'
  tasksQuantityContaier.append(totalCompletedTasksQuantity)

  return tasksQuantityContaier
}
