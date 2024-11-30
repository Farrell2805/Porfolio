//main page
let elements = document.querySelectorAll('.text');
elements.forEach(element => {
    let innerText = element.innerText;
    element.innerHTML = "";
    let textContainer = document.createElement("div");
    textContainer.classList.add("block");

    for (let letter of innerText) {
        let span = document.createElement("span");
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add("letter");
        textContainer.appendChild(span);
    }

    element.appendChild(textContainer);
    element.appendChild(textContainer.cloneNode(true));

    element.addEventListener("mouseover", () => {
        element.classList.remove("play");  
    });
});

//navbar
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropdown = document.querySelector('.dropdown');

toggleBtn.onclick = function(){
    dropdown.classList.toggle('open');
    const isOpen = dropdown.classList.contains('open')
    toggleBtnIcon.classList = isOpen
     ? 'fa-solid fa-xmark'
     : 'fa-solid fa-bars'
}

function sendMail() {
    var link = "mailto:farrell.jonathan@binus.ac.id"
         + "&subject=" + escape("This is my subject")
         + "&body=" + escape("This is my body");
    window.open(link, "_blank");   
}
