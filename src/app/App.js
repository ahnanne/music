import './App.scss';
import logo from 'assets/logo.svg';
import Header from 'containers/Header/Header.function';

const homelink = 'https://ahnanne.github.io/music';

/* -------------------------------------------------------------------------- */

function App() {
  return (
    <div className="App">
      <Header>
        <Header.LinkedHeading link={homelink}>
          앨범 찾기 :)
        </Header.LinkedHeading>
        <Header.SearchForm
          placeholder="가수명, 노래 제목, 앨범 이름으로 검색하기"
          id="searchAlbum"
        />
      </Header>

      {/* <Main></Main> */}
    </div>
  )
}

export default App
