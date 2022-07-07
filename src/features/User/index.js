import React from "react";
import UserList from "./components/UserList";

const listUser = [
  {
    name: "Tulen",
    age: 18,
    lane: "MID",
    image: "logo192.png"
  },
  {
    name: "Florentino",
    age: 24,
    lane: "TOP",
    image: "logo192.png"
  },
  {
    name: "Yorn",
    age: 25,
    lane: "BOTTOM",
    image: "logo192.png"
  },
  {
    name: "Amily",
    age: 30,
    lane: "TOP",
    image: "logo192.png"
  },
  {
    name: "Zuka",
    age: 50,
    lane: "TOP",
    image: "logo192.png"
  },
  {
    name: "Yan",
    age: 18,
    lane: "MID",
    image: "logo192.png"
  },
  {
    name: "Zata",
    age: 25,
    lane: "MID",
    image: "logo192.png"
  },
];

function User() {
  return (
    <div className="div-row">
      <div className="div-col">
        Column Left
        <UserList listUser={listUser} startIndex={0} endIndex={Math.round(listUser.length / 2)}></UserList>
        {/* {getUser(listUser, 0, Math.round(listUser.length / 2))} */}
      </div>
      <div className="div-col">
        Column right
        <UserList listUser={listUser} startIndex={Math.round(listUser.length / 2)} endIndex={listUser.length}></UserList>
        {/* {getUser(listUser, Math.round(listUser.length / 2), listUser.length)} */}
      </div>
    </div>
  );
}

export default User;
