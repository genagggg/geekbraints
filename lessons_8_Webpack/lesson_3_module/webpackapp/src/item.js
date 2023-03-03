export function drawGalleryItem(item) {

    const itemElement = document.createElement('div')
    itemElement.classList = "gallery-item"

    const imgElement = document.createElement('img')
    itemElement.classList = "gallery-item__image"

    const titleElement = document.createElement('span')
    itemElement.classList = "gallery-item__title"
    titleElement.textContent = item.title

    itemElement.appendChild(imgElement)
    itemElement.appendChild(titleElement)

    return itemElement

}