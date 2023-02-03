// Функция получает данные из LocalStorage
export function getDateFromLocalStorage () {
  return JSON.parse(localStorage.getItem('task')) ?? []
}

// Функция записывает данные в LocalStorage
export function setDateToLocalStorage (key, value) {
  return localStorage.setItem(key, JSON.stringify(value))
}
