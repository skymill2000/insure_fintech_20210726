import axios from "axios";
import React, { useState } from "react";
import Header from "../components/Header";

const HospitalList = () => {
  const [searchInput, setSearchInput] = useState("");
  const getHospitalList = () => {
    const option = {
      method: "GET",
      url: "/B551182/pharmacyInfoService/getParmacyBasisList",
      headers: {},
      params: {
        ServiceKey:
          "uiu3ZzNzDB04UbxOtOL1atH04WOtxB5WSKkPbaCASVHbwgcsIPwHA5Qp6xOmSe6fzCnUVifZcfTXDkgNegv4qQ==",
        pageNo: "1",
        numOfRows: "10",
        emdongNm: searchInput,
      },
    };
    axios(option).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div>
      <Header title="병원검색"></Header>
      <input></input>
      <button>약국 조회하기</button>
    </div>
  );
};

export default HospitalList;
