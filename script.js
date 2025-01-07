// setTimeout(() => console.log(), 1000);

// CRUD - Create Read Update Delete

// pending(загрузка) fulfilled(успех)  rejected(не успех)
const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users"); // Promise
const fetchTodos = fetch("https://jsonplaceholder.typicode.com/todos"); // Promise
// console.log(promise);

const usersList = document.getElementById("usersList");
const todosList = document.getElementById("todosList");

fetchTodos
    .then((res) => res.json())
    .then((todos) => {
        // TODO title, completed

        // BASED Отобразить title и completed для каждой задачи на странице
        
        // ADVANCED Отобразить title и в зависимости от значения completed выделить стилистически:
        // (например, разный фон для выполненных и невыполненных задач)
        // (или перечёркнутый текст для выполненных задач text-decoration: none / line-through )

        // DRY - Don't Repeat Yourself
        todos.filter((_, index) => index < 5).forEach(({ title, completed }) => {
            // Условный оператор:
            // 1. Проверка на возможность решения тернарным оператором
            todosList.innerHTML += `
                <li
                    class="${completed ? "completed" : "not-completed"}"
                    style="text-decoration: ${completed ? "line-through" : "none"}"
                >${title}</li>
            `;
        })
    })

fetchUsers
    .then((res) => res.json())
    .then((users) => {
        // деструктуризация
        // const usersCopy = [...users];
        // usersCopy.length = 5;
        users.filter((_, index) => index < 5).forEach(({
            name: nickname,
            phone,
            email,
            address: {
                street,
                suite
            }}) => {
                // let name = "Alex";
            const li = document.createElement('li');
            li.innerHTML = `
                <h2>Имя контакта: ${nickname}</h2>
                <p>Номер контакта: ${phone}</p>
                <p>Емэйл контакта: ${email}</p>
                <p>Адрес контакта: ${street} ${suite}</p>
            `;
            usersList.appendChild(li);
        })
    })
    .catch(err => console.log(err))
    .finally(() => console.log("Thank you!"))


const obj = {
    nickName: "Mark",
    age: 32,
    hobby: ["chess", "football"]
}

console.log(obj + '');


obj.toString = function() {
    return `Любитель ${this.hobby[0]} и ${this.hobby[1]}`
}

console.log(obj.toString());

// Объект в формате строки
const str = JSON.stringify(obj);
console.log(str);

// Строка в формате объекта JavaScript Object Notation (JSON)
const objCopy = JSON.parse(str);
console.log(objCopy);
