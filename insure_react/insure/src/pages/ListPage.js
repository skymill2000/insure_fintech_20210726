import React, { useState } from "react";

const ListPage = () => {
  const [array, setarray] = useState([
    { name: "홍길동", age: "32", height: "184" },
    { name: "고길동", age: "42", height: "174" },
    { name: "둘리", age: "12", height: "174" },
    { name: "둘리", age: "12", height: "174" },
    { name: "둘리", age: "12", height: "174" },
    { name: "둘리", age: "12", height: "174" },
    { name: "둘리", age: "12", height: "174" },
    { name: "둘리", age: "12", height: "174" },
    { name: "둘리", age: "12", height: "174" },
  ]);
  return (
    <div>
      {array.map((user) => {
        return (
          <>
            {user.name} 님의 나이는 {user.age} 이고 키는 {user.height}
            <br />
          </>
        );
      })}
    </div>
  );
};

export default ListPage;
//rafce
