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

document.querySelector('.submit-button').addEventListener('click', (event) => {
    event.preventDefault();
    openModal();
});

document.querySelector('.close-model').addEventListener('click', () => {
    closeModal();
});

function openModal() {
    const overlay = document.querySelector('.overlay');
    overlay.style.visibility = 'visible';
    document.querySelector('.status-order').textContent = getDrinksAmount();
}


function closeModal() {
    const overlay = document.querySelector('.overlay');
    overlay.style.visibility = 'hidden';
}

function getDrinksAmount() {
    const num = document.querySelectorAll('fieldset').length;
    const mod = num % 10;
    const drink = `${num !== 11 && mod === 1 ?
        'напиток'
        : (num > 20 && (mod === 2 || mod === 3 || mod === 4)) || (num >= 2 && num <= 4) ?
            'напитка'
            : 'напитков'}`

    return `Заказ принят! Вы заказали ${num} ${drink}`;
}
