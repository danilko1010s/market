function addToCart(itemName) {
    alert(`${itemName} додано до кошика!`);
}

// Task 5: Check if the script is connected
console.log('Перевірка підключеного файлу скриптів market.js');

// Task 6: Get the element with id="items"
let itemsDiv = document.getElementById("items");
console.log(itemsDiv);

// Task 8: Check if the element exists
if (itemsDiv) {
    // Task 11: Log properties of the element
    console.log('Поле classList: ', itemsDiv.classList);
    console.log('Поле id: ', itemsDiv.id);
    console.log('Поле clientWidth: ', itemsDiv.clientWidth);
    console.log('Поле innerHTML: ', itemsDiv.innerHTML);

    // Task 12: Add text to the block
    itemsDiv.innerText = 'Програмно доданий текст';

    // Task 13: Add another text to the block
    itemsDiv.innerText += '\nДругий Програмно доданий текст';

    // Task 15: Add formatted HTML to the block
    itemsDiv.innerHTML = '<h1>Відформатований HTML код</h1>';

    // Task 16: Add a single block with class "item"
    itemsDiv.innerHTML += '<div class="item"></div>';

    // Task 17: Add 4 blocks programmatically
    for (let i = 0; i < 4; i++) {
        itemsDiv.innerHTML += '<div class="item"></div>';
    }

    // Task 18: Add 100 blocks programmatically
    for (let i = 0; i < 100; i++) {
        itemsDiv.innerHTML += '<div class="item"></div>';
    }
} else {
    // Task 8: Log a message if the block is not found
    console.log('Блок товарів не знайдено');
}
