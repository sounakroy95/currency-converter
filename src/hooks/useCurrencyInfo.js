import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyInfo = async () => {
      const response = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
      );
      const responseData = await response.json();
      setData(responseData[currency]);
    };
    fetchCurrencyInfo();
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
