import React from "react";

const ListUser = ({ user }) => {
  return (
    <div>
      {user.name} 님의 나이는 {user.age} 이고 키는 {user.height}
    </div>
  );
};

export default ListUser;
