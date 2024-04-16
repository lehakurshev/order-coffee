let count = 1;
const addBtn = document.querySelector(".add-button");

addBtn.addEventListener("click", () => {
    count++;
    let forms = document.querySelectorAll(".beverage");
    let newForm = forms[forms.length - 1].cloneNode(true);
    newForm.querySelector("h4").innerHTML = `Напиток №${count}`;

    for (let radio of newForm.querySelectorAll("input[type=radio]")) {
        radio.name = "milk" + count;
    }

    let removeButton = newForm.querySelector(".remove-button");
    removeButton.addEventListener("click", () => {
        if (count > 1) {
            newForm.remove();
            count--;
        }
    });

    forms[forms.length - 1].after(newForm);
});