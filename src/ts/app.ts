import "../css/style.scss";
import { State } from "./model/todo";
import { Todo } from "./model/todo";

function createElement() {
  const element = document.createElement("div");
  const todo: Todo = new Todo("test", new Date(), 1, 1, State.WAITING, 0);
  element.innerHTML = ["Hello", "world", todo.title, todo.workState].join(" ");
  return element;
}

document.body.appendChild(createElement());
