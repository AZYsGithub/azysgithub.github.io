// video bg playback
const videobackground = document.querySelector(".hero-background-container");
videobackground.playbackRate = 0.5;

window.addEventListener('scroll', () => {
    const header = document.querySelector('.top-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});



const modalElement = document.getElementsByClassName('modal-background')[0];
const modalBox = document.getElementsByClassName('modal-box')[0];
const modalCloseButton = document.getElementsByClassName('close-modal-button')[0];
modalCloseButton.addEventListener('click', () => {
    modalElement.style.display = "none";
})

function ShowPopup(title, description, buttons) {
    modalElement.style.display = "flex";

    const titleElement = modalBox.querySelector("h1");
    const descElement = modalBox.querySelector("p");
    const buttonContainer = modalBox.querySelector(".modal-buttons-contianer");

    titleElement.textContent = title;
    descElement.textContent = description;

    for (const button of buttons) {
        const newButton = document.createElement("button");
        if (button.type === "primary") {
            newButton.className = "modal-button";
        } else if (button.type === "secondary") {
            newButton.className = "modal-button modal-button-secondary";
        }
        newButton.textContent = button.text;
        buttonContainer.appendChild(newButton);
        newButton.addEventListener("click", () => {
            button.callback();
            if (button.close != null) {
                if (button.close) {
                    modalElement.style.display = "none";
                }
            } else {
                modalElement.style.display = "none";
            }
        })
    }
}

ShowPopup("Welcome", "Hello, welcome to the test modal dialog, i hope you like the ui :)",
    [
        {
            text: "Alright!",
            type: "primary",
            callback: () => {
                console.log("cool");
            }
        },
        {
            text: "No",
            type: "secondary",
            close: false,
            callback: () => {
                alert("WHYYYY!")
            }
        }
    ]
)