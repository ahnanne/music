import { useState, useEffect } from 'react';
import './App.scss';
import Header from 'containers/Header/Header.function';
import Main from 'containers/Main/Main.function';
import useFetchState from 'hooks/useFetchState';
import { ReactComponent as Atom } from 'assets/Atom.svg';

const homelink = 'https://ahnanne.github.io/music';

/* -------------------------------------------------------------------------- */

function App() {
  const [keyword, setKeyword] = useState('');
  const [input, setInput] = useState('');
  const [api, setApi] = useState(() => keyword || keyword === 0
      ? `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${keyword}&api_key=fca820d24322bcf89930e8d4ab63a2e1&format=json`
      : 'https://yts.mx/api/v2/list_movies.json?limit=1&query_term=');
  const [isLoading, hasError, data] = useFetchState(api);

  const handleKeyword = e => {
    if (e.key === 'Enter' || e.target.type === 'button') {
      if (input === '') return;

      setApi(() => {
        setKeyword(input);

        return `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${keyword}&api_key=fca820d24322bcf89930e8d4ab63a2e1&format=json`;
      });
    }
  };

  const handleInput = e => {
    setInput(e.target.value);
  };

  if (isLoading) {
    return (
      <Atom />
    );
  }

  if (hasError) { // 에러가 발생한 상황에서 렌더링
    return (
      <div role="alert">{hasError.message}</div>
    );
  }

  return (
    <div className="App">
      <Header>
        <Header.LinkedHeading link={homelink}>
          앨범 찾기 :)
        </Header.LinkedHeading>
        <Header.SearchForm
          placeholder="가수명, 노래 제목, 앨범 이름으로 검색하기"
          id="searchAlbum"
          input={input}
          handleInput={handleInput}
          handleKeyword={handleKeyword}
        />
      </Header>

      <Main>
        {
          data?.map(({ url, name: title, artist }) => (
            <Main.Card
              key={url}
              title={title}
              subtitle={artist}
              link={url}
            />
          ))
        }
      </Main>
    </div>
  )
}

export default App