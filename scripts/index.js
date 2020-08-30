const btns = document.querySelectorAll('.btn');

for (let btn of btns) {
    btn.onclick = () => btn.classList.toggle('active');
}