import React from "react";

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <a href="/todo-list">To-do list</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="/code">GitHub</a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;