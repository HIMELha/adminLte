const navToggler = document.getElementById('navToggler');
const navbar = document.getElementById('navbar');
const header = document.querySelector('header');
const main = document.getElementById('main');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const profileBtn = document.getElementById('profileBtn');
const profileNav = document.querySelector('.profileMenu');
const profileArr = document.getElementById('arrow');
const headerIcons = document.getElementById('headerIcons');
const notifyBtn = document.getElementById('notifyBtn');
const notifyNav = document.getElementById('notifyNav');
const msgBtn = document.getElementById('msgBtn');
const msgNav = document.getElementById('msgNav');
const savedState = localStorage.getItem('navbarState');

const addCat = document.getElementById('addCat');
const newCatModal = document.getElementById('newCatModal');


// Load the saved state from local storage (if available)
if (savedState === 'inactive') {
    navbar.classList.add('active');
    main.classList.add('active');
    header.classList.add('active');
    headerIcons.classList.add('hidee');
}

navToggler.addEventListener('click', () => {
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        main.classList.remove('active');
        header.classList.remove('active');
        headerIcons.classList.remove('hidee');
        // Save the state to local storage
        localStorage.setItem('navbarState', 'active');
    } else {
        navbar.classList.add('active');
        main.classList.add('active');
        header.classList.add('active');
        headerIcons.classList.add('hidee');
        // Save the state to local storage
        localStorage.setItem('navbarState', 'inactive');
    }
});

// full screen function 
fullscreenBtn.addEventListener('click', () => {
    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            fullscreenBtn.classList.remove('fa-minimize');
            fullscreenBtn.classList.add('fa-expand');
        }
    } else {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
            fullscreenBtn.classList.remove('fa-expand');
            fullscreenBtn.classList.add('fa-minimize');
        }
    }
});
// profile toggler
profileBtn.addEventListener('click', () => {    
    if (profileNav.classList.contains('active')) {
        profileNav.classList.remove('active');
        profileArr.style.transition = '0.3s ease-out';
        profileArr.style.rotate = '0deg';
    } else {
        profileNav.classList.add('active');
        profileArr.style.transition = '0.3s ease-in';
        profileArr.style.rotate = '180deg';
    }
});
//notifcation toggler
notifyBtn.addEventListener('click', () => {
    if (notifyNav.classList.contains('active')) {
        notifyNav.classList.remove('active');
    } else {
        notifyNav.classList.add('active');
    }
    if (msgNav.classList.contains('active')) {
        msgNav.classList.remove('active');
    }
});
//message toggler
msgBtn.addEventListener('click', () => {
    if (msgNav.classList.contains('active')) {
        msgNav.classList.remove('active');
    } else {
        msgNav.classList.add('active');
    }

    if (notifyNav.classList.contains('active')) {
        notifyNav.classList.remove('active');
    }
});



//show and hide modals
const btn = document.getElementById('add');
const addModal = document.getElementById('addModal');
const editModal = document.getElementById('editModal');
const edit = document.getElementById('edit');

btn.addEventListener('click', () => {
    if (addModal.classList.contains('hidden')) {
        addModal.classList.remove('hidden');
        addModal.classList.add('block');
    }
    close = document.getElementById('close');
    close.addEventListener('click', () => {
        if (addModal.classList.contains('block')) {
            addModal.classList.remove('block');
            addModal.classList.add('hidden');
        }
    });
});

edit.addEventListener('click', () => {
    if (editModal.classList.contains('hidden')) {
        editModal.classList.remove('hidden');
        editModal.classList.add('block');
    }
    close = document.getElementById('closeEdit');
    close.addEventListener('click', () => {
        if (editModal.classList.contains('block')) {
            editModal.classList.remove('block');
            editModal.classList.add('hidden');
        }
    });
});