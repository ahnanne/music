import { useState, useEffect } from 'react';

export default function useFetchState(api = '') {
  // API가 과도하게 호출되는 것을 방지하기 위해,
  // 최초 렌더링은 하지 않음.

  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState([]);

  
  useEffect(() => {
    if (api === 'http://ws.audioscrobbler.com/2.0/?method=album.search&album=&api_key=fca820d24322bcf89930e8d4ab63a2e1&format=json') return;

    setIsLoading(true);

    const fetchData = async function() {
      try {
        const response = await fetch(api);
        const json = await response.json();
    
        if (json?.data?.movies) setData(null);
        else setData(json?.results?.albummatches?.album);
      } catch (err) {
        setHasError(true);
        console.error(err);
      }
    };
    
    fetchData();
    setIsLoading(false);
  }, [api]); // fetch는 api가 바뀔 때만 실행~


  return [isLoading, hasError, data];
}
