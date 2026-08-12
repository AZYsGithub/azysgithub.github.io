/*const buttons = document.getElementsByClassName("buttonSubmit");



for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", () => {
        alert("clicked");
    })
}*/

const button = document.getElementById("changeText");
button.addEventListener("click", () => {
    const currentTextbox = document.getElementById("textbox");

    //alert(currentTextbox.value);
    document.getElementById("changableText").textContent = currentTextbox.value;
});