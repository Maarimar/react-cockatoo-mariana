import React from "react";
import { Link } from "react-router-dom";
import style from './NavBar.module.css'


function NavBar() {

  return (
    <div>
      <ul>
        <li className={style.ListItem}>
          <Link to='/todo-list'>
        <button className={style.button}>To-do list</button>
        </Link>
        </li>
      </ul>
      <ul>
        <li className={style.ListItem}>
           <Link to='https://github.com/Maarimar/react-cockatoo-mariana' target={"_blank"}>
        <button className={style.button}>Code</button>
        </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;