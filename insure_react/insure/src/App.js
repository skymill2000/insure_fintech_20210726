import Header from "./components/Header";

const Element = ({ username }) => {
  return (
    <>
      <h1>안녕하세요 {username} 새로운 컴포넌트 입니다.</h1>
    </>
  );
};

function App() {
  return (
    <div>
      <Header title="테스트 페이지"></Header>
      <Element username="유관우"></Element>
      <Element username="홍길동"></Element>
      <Element username="장비"></Element>
      <Element username="유비"></Element>
    </div>
  );
}

export default App;
