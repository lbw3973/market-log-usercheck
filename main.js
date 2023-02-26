import { getUserList } from "./api.js";
const userListEl = document.querySelector(".user-list");
const h2El = document.querySelector("h2");

h2El.addEventListener("click", async () => {
  let index = 1;
  const userList = (await getUserList()).map((user) => {
    const _user = `
    <li>
      <p>${index++}. 아이디: ${user.email} |  이름: ${user.displayName}</p>
    </li>
    `;
    return _user;
  });
  userListEl.innerHTML = userList.join("");
  h2El.innerHTML += `: ${userList.length}명`;
});
h2El.click();
