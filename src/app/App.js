import { useState, useEffect } from 'react';
import './App.scss';
import Header from 'containers/Header/Header.function';
import Main from 'containers/Main/Main.function';
import useAlbumState from 'hooks/useAlbumState';

const homelink = 'https://ahnanne.github.io/music';

/* -------------------------------------------------------------------------- */

function App() {
  const [keyword, setKeyword] = useState('');
  
  const api = keyword || keyword === 0
    ? `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${keyword}&api_key=fca820d24322bcf89930e8d4ab63a2e1&format=json`
    : 'https://yts.mx/api/v2/list_movies.json?limit=1&query_term=';

  const [isLoading, hasError, albumData] = useAlbumState(api);

  const handleKeyword = e => {
    setKeyword(e.target.value);
  };

  return (
    <div className="App">
      <Header>
        <Header.LinkedHeading link={homelink}>
          앨범 찾기 :)
        </Header.LinkedHeading>
        <Header.SearchForm
          placeholder="가수명, 노래 제목, 앨범 이름으로 검색하기"
          id="searchAlbum"
          keyword={keyword}
          handleKeyword={handleKeyword}
        />
      </Header>

      <Main>
        <Main.Card
          key={1}
          title="Black Mamba"
          subtitle="에스파"
          imgSrc="https://ssl.pstatic.net/static/newsstand/2021/0322/pressian/181853/001.jpg"
          link="http://naver.com"
        />
        <Main.Card
          key={2}
          title="Black Mamba"
          subtitle="에스파"
          imgSrc="https://ssl.pstatic.net/static/newsstand/2021/0322/pressian/181853/001.jpg"
          link="http://naver.com"
        />
      </Main>
    </div>
  )
}

export default App
