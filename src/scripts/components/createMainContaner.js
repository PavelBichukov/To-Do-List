const root = document.querySelector('#root')

// Функция создает главнй контейнер(внутри форма и пустой блок для карточек)
export function createMainContainer () {
  const mainContainer = document.createElement('div')
  mainContainer.className = 'main-container'
  root.append(mainContainer)

  const header = document.createElement('header')
  header.className = 'header'
  mainContainer.append(header)

  const cardContainer = document.createElement('div')
  cardContainer.className = 'card-container'
  mainContainer.append(cardContainer)

  return mainContainer
}
