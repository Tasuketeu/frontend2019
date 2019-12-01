import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header =(props)=>{
  return(
    <header
     className={s.header}>
    <div class="header1">
      <div class="content-width">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Search</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">My movies</a>
                </li>
              </ul>
            </div>

            <div class="col-md-3">
              <ul class="nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">John Doe</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </header>

  //   <header
  //    className={s.header}>
  //     <img src="https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg" alt="logo" />
  //     <div className={s.loginBlock}>
  //         {props.isAuth? <div>{props.login}-   <button onClick={props.logout}>Logout</button> </div>:
  //   <NavLink to={'/login'}>Login</NavLink>}
  //     </div>
  // </header>
  );
}

export default Header;
