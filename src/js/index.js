const selecButton = document.querySelectorAll(".button");
const selecCharacter =document.querySelectorAll(".character");
selecButton .forEach((button,index) =>{
    button.addEventListener("click",() => {
        desselectButton();
        desselectCharacter();
        button.classList.add("selected");
        selecCharacter[index].classList.add("selected");
    });
})



function desselectCharacter() {
    const characterSelec = document.querySelector(".character.selected");
    characterSelec.classList.remove("selected");
}

function desselectButton() {
    const buttonSelected = document.querySelector(".button.selected");
    buttonSelected.classList.remove("selected");
}

