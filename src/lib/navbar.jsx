import React from 'react'
export default function navbar() {
 
 
  return (
   <>
   <navbar class="nav-bar">
    <svg viewBox="0 0 100 80" width="40" height="40" id="menu-btn" >
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
    <div class="container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWrZ0miPBNriXamRscswMGrA2ytIGzvCYvUg&usqp=CAU" alt="logo"/>
        <div id="nav-form">
        <ul class="nav-ul" id="nav-ul">
            <li class="nav-li"> <a href="/">Home</a> </li>
            <li class="nav-li"> <a href="/about">About Us</a> </li>
            <li class="nav-li"> <a href="/github">Github</a> </li>
            <li class="nav-li" onclick="shownav()" id="drop-nav" >More</li>
                <div class="drop-down" id="dropdown" style={{display:'none'}}>
                 <li class="drop-li"> <a href="/form"></a> Form</li>
                 <li class="drop-li"> <a href="/login">Login</a> </li>
                </div> 
        </ul>
        <div class="form-contact" id="form-contact">
            <button class="Login btn"> <a href="/">Projects</a> </button>
            <button class="Signup btn"> <a href="/">Contact Me</a> </button>
        </div></div>
    </div>
   </navbar>
   </>
  )
}
