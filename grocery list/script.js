const grocery = document.getElementsByClassName("grocery")[0];
const my_pencil = document.getElementById("my_pencil");
const all_Items = document.getElementById("all_Items");
const userInput = document.getElementById("userInput");

my_pencil.addEventListener("click", function () { all_Items.innerHTML = "" });

userInput.addEventListener("keydown", function (event) {
    // console.log("opu");
    if (event.key == "Enter")
        addItem() = "";
})

function addItem() {
    var h2 = document.createElement("h2");
    h2.innerHTML = " -" + userInput.value;

    h2.addEventListener("click", function () { h2.style.textDecoration = "line-through" });

    all_Items.insertAdjacentElement("beforeend", h2);

    userInput.value = "";
}