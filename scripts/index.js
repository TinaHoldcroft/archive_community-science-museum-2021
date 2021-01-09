const btns = document.querySelectorAll('.message-popup');

for (let btn of btns) { 
    btn.onclick = () => btn.classList.toggle('--active'); 
}
function popUpFunction() {
    var popup = document.getElementById("messagePopup");
    popup.classList.toggle("--show"); 
}
