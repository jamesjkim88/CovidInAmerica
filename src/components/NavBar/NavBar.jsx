import React from 'react';

export default function(){
  return(
    <>
      <nav className="navBar">
        <ul className="nav-items">
          <li className="link-items">
            <h1>Covid In<br/>America 🇺🇸</h1>
          </li>
          <li className="link-items">
            <form>
              <input type="text" placeholder="City, county, state, or zip"/>
            </form>
          </li>
          <li className="link-items">
            <h3>Menu</h3>
          </li>
        </ul>
      </nav>
    </>
  )
}