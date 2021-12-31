let setting_menue = document.getElementById('setting_menue'),
    profile_toggle_btn = document.getElementById('profile_toggle_btn');

function toogleClassShowed() {
    setting_menue.classList.toggle('profile-settings-menue-showed')
}

profile_toggle_btn.addEventListener('click', function (e) {
    toogleClassShowed()
    e.stopPropagation()
});

window.addEventListener('click', function () {
    setting_menue.classList.remove('profile-settings-menue-showed')
})