import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(url);
        setData(await response.json());
      } catch (error) {
        setError(error);
      }
    })();
  }, [url]);

  return { data, error };
}
