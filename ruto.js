const btn = document.getElementById('change');
const darkTheme = 'darkTheme';
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const selectedTheme = localStorage.getItem('selected-theme');

if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)

}
btn.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    localStorage.setItem('selected-theme', getCurrentTheme())
})