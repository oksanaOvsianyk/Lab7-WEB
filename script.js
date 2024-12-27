function task2() {
  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');

  const temp = input1.value;
  input1.value = input2.value;
  input2.value = temp;
}

document.addEventListener('DOMContentLoaded', function () {
  const swapButton = document.getElementById('swapButton');
  swapButton.addEventListener('click', swapInputValues);
});

function task4(change) {
  const square = document.getElementById('square');
  const currentWidth = square.offsetWidth;
  const currentHeight = square.offsetHeight;

  
  const newWidth = Math.max(15, currentWidth + change);
  const newHeight = Math.max(15, currentHeight + change);

  square.style.width = `${newWidth}px`;
  square.style.height = `${newHeight}px`;
}

document.addEventListener('DOMContentLoaded', function () {
  const decreaseBtn = document.getElementById('decrease');
  const increaseBtn = document.getElementById('increase');

  decreaseBtn.addEventListener('click', () => resizeSquare(-15));
  increaseBtn.addEventListener('click', () => resizeSquare(15));
});

function task6() {
  const listItems = document.querySelectorAll('#list li');

  listItems.forEach(item => {
    const currentValue = parseInt(item.textContent, 10);
    item.textContent = currentValue * 2;
  });
}
function task7() {
 
  const categoriesList = document.querySelector('#categories');
  const categories = categoriesList.querySelectorAll('.item');

  console.log(`Number of categories: ${categories.length}`);

  // Перебираємо кожну категорію
  categories.forEach(category => {
    
    const title = category.querySelector('h2').textContent;

   
    const itemsCount = category.querySelectorAll('ul li').length;

    
    console.log(`Category: ${title}`);
    console.log(`Elements: ${itemsCount}`);
  });
}

function task8(event) {
  event.preventDefault(); 

  const form = document.querySelector('.login-form');
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }

  // Створюємо об'єкт з введеними даними
  const formData = {
    email: email,
    password: password,
  };
  console.log(formData);

  form.reset();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Функція для зміни кольору фону body та оновлення тексту в span.color
function changeBackgroundColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor; // Зміна фону
  document.querySelector('.color').textContent = randomColor; // Оновлення тексту
}


function task9() {
  changeBackgroundColor(); // Зміна кольору фону
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function createBoxes(amount) {
  const boxesContainer = document.getElementById('boxes');
  // Очищаємо контейнер перед додаванням нових елементів
  boxesContainer.innerHTML = '';

  let size = 30; // Початковий розмір для першої коробки

  // Створюємо необхідну кількість коробок
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    // Додаємо коробку в контейнер
    boxesContainer.appendChild(box);

    // Збільшуємо розміри кожної наступної коробки на 10px
    size += 10;
  }
}


function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = ''; // Очищаємо вміст контейнера
}

document.querySelector('[data-create]').addEventListener('click', () => {
  const input = document.querySelector('input');
  const amount = parseInt(input.value);

  // Перевірка валідності введеного значення
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); // Створення коробок
  } else {
    alert('Please enter a number between 1 and 100');
  }

  input.value = ''; // Очищаємо інпут після створення коробок
});

document
  .querySelector('[data-destroy]')
  .addEventListener('click', destroyBoxes);
