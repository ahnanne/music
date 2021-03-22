import './App.scss';
import Header from 'containers/Header/Header.function';
import Main from 'containers/Main/Main.function';

const homelink = 'https://ahnanne.github.io/music';

/* -------------------------------------------------------------------------- */

function App() {
  // http://ws.audioscrobbler.com/2.0/?method=album.search&album=forever&api_key=fca820d24322bcf89930e8d4ab63a2e1&format=json
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

      <Main>
        <Main.Card
          title="Black Mamba"
          subtitle="에스파"
          link="http://naver.com"
        />
      </Main>
    </div>
  )
}

export default App
