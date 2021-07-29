import axios from "axios";
import React, { useState } from "react";
import Header from "../components/Header";
import HospitalListItem from "../components/hospital/HospitalCardItem";

const HospitalList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [hospitalList, setHospitalList] = useState([]);
  const getHospitalList = () => {
    const option = {
      method: "GET",
      url: "/B551182/hospInfoService1/getHospBasisList1",
      headers: {},
      params: {
        ServiceKey:
          "uiu3ZzNzDB04UbxOtOL1atH04WOtxB5WSKkPbaCASVHbwgcsIPwHA5Qp6xOmSe6fzCnUVifZcfTXDkgNegv4qQ==",
        pageNo: "1",
        numOfRows: "10",
        clCd: "31",
        yadmNm: searchInput,
      },
    };
    axios(option).then((response) => {
      console.log(response.data);
      setHospitalList(response.data.response.body.items.item);
    });
  };
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };
  return (
    <div>
      <Header title="병원검색"></Header>
      <input onChange={handleChange}></input>
      <button onClick={getHospitalList}>병원 조회하기</button>
      {hospitalList.map(({ addr, clCd, clCdNm, yadmNm, ykiho }) => {
        return (
          <HospitalListItem
            key={ykiho}
            addr={addr}
            clCd={clCd}
            clCdNm={clCdNm}
            yadmNm={yadmNm}
            ykiho={ykiho}
          ></HospitalListItem>
        );
      })}
    </div>
  );
};

export default HospitalList;
