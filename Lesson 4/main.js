// Cho array sau:
const todoList = [
    {
      "id": 1,
      "title": "Làm bài tập về nhà JSI03",
      "completed": false
    },
    {
      "id": 2,
      "title": "Làm bài tập Toán trên lớp",
      "completed": false
    },
    {
      "id": 3,
      "title": "Rửa bát",
      "completed": false
    },
    {
      "id": 4,
      "title": "Quét nhà",
      "completed": true
    },
    {
      "id": 5,
      "title": "Lau nhà",
      "completed": false
    },
  ]

const todoListElm = document.getElementById('todolist');

todoList.forEach((todo) => {
    const todoElm = document.createElement('div');
    todoElm.classList.add('todo');
    const inputElm = document.createElement('input');
    inputElm.setAttribute('type', 'checkbox');
    const spanElm = document.createElement('span');
    spanElm.textContent = todo.title;
    const iconElm = document.createElement('i');
    iconElm.classList.add("bi", "bi-trash-fill");
    iconElm.addEventListener('click', () => handleDeleteTodo(todo.id));
    todoElm.appendChild(inputElm);
    todoElm.appendChild(spanElm);
    todoElm.appendChild(iconElm);
    todoListElm.appendChild(todoElm);
})

const handleDeleteTodo = (deleteId) => {
    const deleteIndex = todoList.findIndex((todo) => todo.id === deleteId);
    todoList.splice(deleteIndex, 1);
}