import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    errors: null,
  });
  
  const { data, loading: isLoading, errors } = state;

  const getFetch = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState({
        data,
        loading: false,
        errors: null,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        errors: error,
      });
    }
  };

  useEffect(() => {
    if (!url) return;
    getFetch();
  }, [url]);


  return {
    data,
    isLoading,
    errors,
  };
};
