import { useReducer } from 'react';
import produce from 'immer'; // 보통 produce라는 이름으로 많이 불러옴.
import './App.scss';
import Header from 'containers/Header/Header.function';
import Main from 'containers/Main/Main.function';
import CounterPopup from 'containers/CounterPopup/CounterPopup.function';
import useFetchState from 'hooks/useFetchState';
import { ReactComponent as Atom } from 'assets/Atom.svg';

const homelink = 'https://ahnanne.github.io/music';

const makeApi = word => {
  return `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${word}&api_key=fca820d24322bcf89930e8d4ab63a2e1&format=json`;
};

const ACTION = {
  UPDATE_KEYWORD: 'update keyword',
  UPDATE_INPUT: 'update input',
};

const initState = {
  keyword: '',
  input: '',
};

const { UPDATE_KEYWORD, UPDATE_INPUT } = ACTION;

function searchReducer(state, action) {

  switch (action?.type) {
    case UPDATE_KEYWORD:
      return {...state, keyword: action.payload};

    case UPDATE_INPUT:
      return {...state, input: action.payload};

    default:
      return state;
  }
}

/* -------------------------------------------------------------------------- */

function App() {
  const [state, dispatch] = useReducer(searchReducer, initState);
  const { keyword, input } = state;

  const [isLoading, hasError, albumData] = useFetchState(makeApi, keyword);

  const handleInput = e => {
    dispatch({
      type: UPDATE_INPUT,
      payload: e.target.value,
    });
  };

  const handleKeyword = e => {
    if (e.key === 'Enter' || e.target.type === 'button') {
      if (input === '') return;

      dispatch({
        type: UPDATE_KEYWORD,
        payload: input,
      });
    }
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
      <CounterPopup />

      <Main>
        {
          albumData?.map(({ url, name: title, artist }) => (
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
