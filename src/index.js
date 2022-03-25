//import { render } from '@testing-library/react';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import FirstComponent from "./FirstComponent/FirstComponent";
import Comment from "./Comment/Comment";
import { Watch } from "./Watch/Watch";

//----------------

ReactDOM.render(
  <FirstComponent />,
  document.getElementById("FirstComponent")
);

//----------------

const comment = {
  date: "23/03/22",
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};

ReactDOM.render(
  <Comment
  date = {comment.date}
  text = {comment.text}
  author = {comment.author}
  />,
  document.getElementById("Comment")
);

//----------------

ReactDOM.render(
  <Watch/>,
  document.getElementById("Watch")
)

//----------------

// const itemsArray = [
//   "first string",
//   "second string",
//   "third string",
//   "fourth string",
//   "fifth string"
// ]

// const name = "Sasha";

// let user = {
//   firstName: name,
//   lastName: 'Kot'
// }

// function formatName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

// function getSreetingUser() {
//   if (user) {
//     return formatName(user);
//   } else {
//     return "incognito";
//   }
// }

// const logo =  (
//   <div>
//     <img src='./logo192.png'/>
//   </div>
// )

// const hello = (
//   <div>
//     <p>Здравствуйте!</p>
//     <p>Рады вас видеть.</p>
//   </div>
// );

// const element = (
//   <h1 className='test'>
//     <h5>{hello}</h5>
//     Hello, {getSreetingUser()}!
//     {logo}
//   </h1>
// );

// const linkAddress = "https://www.reactjs.org";

// const link = <a href={linkAddress}> {element} </a>

// ReactDOM.render(
//   link,
//   document.getElementById('root')
// );

// function tick() {
//   const element = (
//     <div className='test'>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('clock'));
// }

// setInterval(tick, 1000);
