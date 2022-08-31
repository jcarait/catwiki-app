import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error! Status: ${response.status}`);
        }
        setData(await response.json());
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [url]);

  return { data, error };
}
