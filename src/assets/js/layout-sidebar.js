const hamburger = document.getElementById('hamburger')
const sidebar = document.getElementById('sidebar')
const closeButton = document.getElementById('closeButton')

function openSidebar() {
    sidebar.style.display = 'block'
}

function closeSidebar() {
    sidebar.style.display = 'none'
}

hamburger.addEventListener('click', openSidebar)
closeButton.addEventListener('click', closeSidebar)
