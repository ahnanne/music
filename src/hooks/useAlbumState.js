import { useState, useEffect } from 'react';

export default function useAlbumState(api = '') {
  // API가 과도하게 호출되는 것을 방지하기 위해,
  // 최초 렌더링은 하지 않음.

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [albumData, setAlbumData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(res => {
        res.data.hasOwnProperty('movies') // 최초 렌더링인지 확인
        ? setAlbumData(null)
        : setAlbumData(res.results.albummatches.album);
        setIsLoading(false);
      })
      .catch(error => setHasError(true));
  }, [api]);

  console.log(albumData);

  return [isLoading, hasError, albumData];
}
