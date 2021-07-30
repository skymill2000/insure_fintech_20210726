import React, { useState, useEffect } from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

const HospitalDetail = () => {
  const { search } = useLocation();
  const { ykiho } = queryString.parse(search);
  useEffect(() => {
    getHospitalDetailData();
  }, []);

  const getHospitalDetailData = () => {
    console.log("요청을 만들어 주세요");
  };

  //useEffect 사용해서  <-- 검색을해서 작성을 부탁드립니다.
  //시작하자마자 api 요청을 만들기

  return <div></div>;
};

export default HospitalDetail;
