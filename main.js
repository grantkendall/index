const items = document.querySelectorAll("li");
const right = document.querySelector(".right");

const text = document.createElement("p");
text.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, excepturi? Eveniet qui quis perspiciatis placeat, maxime corporis vitae expedita dicta beatae, natus facere accusamus autem excepturi nihil saepe architecto laborum."
text.style.display = "none";

const testText = document.createElement("p");
testText.textContent = "This is a test to determine if hidden elements take up space on the page."

right.appendChild(text);
right.appendChild(testText);

items.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.classList.add("hover");
        text.style.display = "block";
    });
    element.addEventListener("mouseleave", () => {
        element.classList.remove("hover");
        text.style.display = "none";
    });
});

