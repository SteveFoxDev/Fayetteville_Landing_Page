// Get all sidenav items
const sideNavItems = document.querySelectorAll('.sidebar .sidebar__list .sidebar__list--item');
// Get checkbox
const checkbox = document.getElementById('hamburger');
// add event listener to each sidenav item, on click checkbox = false
sideNavItems.forEach(item => {
    item.addEventListener('click', () => {
        checkbox.checked = false;
    });
});