import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  //TODO: mantiene la referencia cuando el componente esta montado
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        isMounted.current
          ? setState({ loading: false, error: null, data })
          : console.log("Setstate no se monto")
      );
  }, [url]);

  return state;
};

export default useFetch;
