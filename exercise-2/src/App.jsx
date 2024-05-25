import React from "react";

export const vinhData = {
  firstName: "Vinh",
  lastName: "Hoang Nhu",
  title: "PN Training Manager",
};

export const myData = {
  firstName: "My",
  lastName: "Ngo",
  title: "PN Trainer",
};

// TODO Edit the User component code to be able to display DIFFERENT users !
export function User(props) {
  const { firstName,lastName,title } = props.user; // Destructuring props
  return (
    <div id="user" data-testid="user">
      <h2>{firstName} {lastName}</h2>
      <p>{title}</p>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <h1>PNV React Team !!</h1>
      <p>Here are some PNV React masters, do you know them?</p>
      <User user = {vinhData} key={vinhData.firstName}/> {/* This line needs some changes*/}
      <User user = {myData} key={myData.firstName}/> {/* This line needs some changes*/}
    </div>
  );
}

export default App;
