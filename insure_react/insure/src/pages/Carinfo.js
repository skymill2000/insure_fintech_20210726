import axios from "axios";
import React, { useState } from "react";

const Carinfo = () => {
  const [result, setResult] = useState(undefined);
  const getCarInfo = () => {
    const option = {
      method: "POST",
      url: "/assist/common/carzen/CarAllInfoInquiry",
      headers: {
        Authorization: "Token 332460548c3348109095d32b82710b518cbb318e",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        REGINUMBER: "23버2349",
        OWNERNAME: "곽영애",
      },
    };
    axios(option).then((response) => {
      console.log(response.data);
      setResult(response.data);
    });
  };
  return (
    <div>
      <button onClick={getCarInfo}>차량 조회하기</button>
    </div>
  );
};

export default Carinfo;
