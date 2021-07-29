import React, { useState } from "react";
import axios from "axios";
import NewsHeader from "../components/NewsHeader";
import NewsList from "../components/NewsList";

const NewsPage = () => {
  const [searchInput, setsearchInput] = useState("삼성");
  const [searchResultList, setSearchResultList] = useState([]);
  const getData = () => {
    let newsApi = `https://newsapi.org/v2/everything?from=2021-06-29&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5&language=ko&q=${searchInput}`;
    axios.get(newsApi).then(function (response) {
      console.log(response);
    });
  };

  return (
    <div>
      <NewsHeader></NewsHeader>
      <button onClick={getData}>검색</button>
      <NewsList></NewsList>
    </div>
  );
};

export default NewsPage;
