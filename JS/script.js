// #Task1
// 1. Создайте пустой объект user.
let user = {};
// 2. Добавьте свойство name со значением John.
user.name = "John";
// 3. Добавьте свойство surname со значением Smith.
user.surname = "Smith";
// 4. Измените значение свойства name на Pete.
user.name = "Pete";
// 5. Удалите свойство name из объекта.
delete user.name;

// #Task2
const user1 = {
    name: "John"
  };
  user.name = "Pette";
// Конструкция будет работать, так как объявление const защищает от изменений 
// только саму переменную user1, но не свойства объекта

// #Task3 
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

let sum = salaries.John + salaries.Ann + salaries.Pete;
// суммируем все зарплаты и сохраняем значение в переменной sum

