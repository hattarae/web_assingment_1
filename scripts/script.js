var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark')
}
function toggleDropdown(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.toggle('hidden');
    }
}
//modal gallery
window.showModal = function (src) {
    modal.classList.remove('hidden');
    modalImg.src = src;
}

window.closeModal = function () {
    modal.classList.add('hidden');
}

function toggleDarkMode() {
    const btn = document.getElementById('dark-mode-btn');
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
        if (btn) btn.innerHTML = '🌙 DARK MODE';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
        if (btn) btn.innerHTML = '☀️ LIGHT MODE';
    }
}
//assingment requirement but i used summary and details instead for FAQ 
// details.addEventListener("toggle", (event) => {
//   if (details.open) {
//     /* the element was toggled open */
//   } else {
//     /* the element was toggled closed */
//   }
// });