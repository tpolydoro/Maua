import axios from "axios";
const apiUrl = "https://api.mercadobitcoin.net/api";

export async function getCandles(ticker, resolution, count) {
  let result = await axios.get(`${apiUrl}/v4/candles`, {
    params: {
      to: 0,
      symbol: ticker,
      resolution: resolution,
      countback: count,
    },
  });
  let candles = [];
  for (let index = 0; index < result.data.t.length; index++) {
    candles.push({
      time: result.data.t[index],
      open: parseFloat(result.data.o[index]),
      high: parseFloat(result.data.h[index]),
      low: parseFloat(result.data.l[index]),
      close: parseFloat(result.data.c[index]),
      volume: parseFloat(result.data.v[index]),
    });
  }
  return candles;
}
