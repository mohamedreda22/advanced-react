import React, { useState, useEffect } from "react";

export function BitcoinPrice() {
  const [btcData, setBtcData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => {
        setBtcData(jsonData.bpi.USD);
        setLoading(false); // Mark data as loaded
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Mark data as loaded even on error
      });
  };

  return (
    <div>
      {loading ? (
        <h1>Data is loading...</h1>
      ) : Object.keys(btcData).length > 0 ? (
        <div>
          <h1>Bitcoin Price</h1>
          <p>Current rate: {btcData.rate} USD</p>
        </div>
      ) : (
        <h1>Data not available</h1>
      )}
    </div>
  );
}
