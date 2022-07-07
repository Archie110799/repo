import React from "react";
import User from "../UserItem";
import "./listUser.css";

function ListUser(props) {
  const { listUser, startIndex, endIndex } = props;
  let getUser = () => {
    let content = [];
    for (let index = startIndex; index < endIndex; index++) {
      content.push(<User user={listUser[index]} key={`user-${index}`}></User>);
      //   content.push(render(listData[index]));
    }
    return content;
  };
  return <>{getUser()}</>;
}

export default ListUser;
