import Header from "./components/Header";

const Element = ({ username }) => {
  return (
    <>
      <h1>안녕하세요 {username} 새로운 컴포넌트 입니다.</h1>
    </>
  );
};

function App() {
  let userInput = "test";

  const inputChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
  };

  return (
    <div>
      <Header title="테스트 페이지"></Header>
      <Element username={userInput}></Element>
      <input value={userInput} onChange={inputChange}></input>
    </div>
  );
}

export default App;
