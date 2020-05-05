import "../css/style.scss";
import { User } from "./model/user";

function createElement() {
  const element = document.createElement("div");
  const user: User = new User("Type", "Script", 20);
  element.innerHTML = ["Hello", "world", user.firstName, user.lastName].join(
    " "
  );
  return element;
}

document.body.appendChild(createElement());
