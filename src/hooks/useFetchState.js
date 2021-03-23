import { useState, useEffect } from 'react';

/**
const NETWORK_STATUS = {
  idle: 'idle',
  pending: 'pending',
  resolved: 'resolved',
  rejected: 'rejected',
}
 */

export default function useFetchState(api, param) { // api는 param을 이용하여 url을 만드는 function
  // const { idle, pending, resolved, rejected } = NETWORK_STATUS;

  /**
  API가 과도하게 호출되는 것을 방지하기 위해,
  최초 렌더링은 하지 않음.
  */

  const [isLoading, setIsLoading] = useState(false);
  // isLoading 대신 status를 사용하여 NETWORK_STATUS에 따른 상태 관리를 할 수 있음.
  const [hasError, setHasError] = useState(false);
  const [data, setData] = useState([]);

  const newApi = api(param);
  
  useEffect(() => {
    // setIsLoading(true);

    if (api(param) === 'https://ws.audioscrobbler.com/2.0/?method=album.search&album=&api_key=fca820d24322bcf89930e8d4ab63a2e1&format=json') {
      setIsLoading(false);
      return;
    }

    const fetchData = async function() {
      try {
        const response = await fetch(newApi);
        const json = await response.json();
        
        setData(json?.results?.albummatches?.album);

        setIsLoading(false);
      } catch (err) {
        setHasError(true);
      }
    };

    fetchData();
  }, [api, param, newApi]);

  return [isLoading, hasError, data];
}
