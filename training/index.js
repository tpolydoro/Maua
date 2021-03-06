import { getCandles } from '../exchanges/mercadoBitcoin.js'
import { SMAStrategy } from '../strategies/SMA.js'
import { RSIStrategy } from '../strategies/RSI.js'
import { StochasticRSIStrategy } from '../strategies/StochasticRSI.js'

export async function testVariations() {
    //await testSMA(100)
    await testRSI(800)
    await testStochasticRSI(800)
}

export async function testStochasticRSI(count) {
    let candles = await getCandles('ETH-BRL', '1d', count)
    let stochasticRSI = new StochasticRSIStrategy({ periods: 10, startingValues: [], verbose: false })
    console.log('StochasticRSI 10 Resolução: 1d Quantidade:', count, 'Resultado por dia:', getProfit(stochasticRSI, candles, 100000, false, '1d'))

    stochasticRSI = new StochasticRSIStrategy({ periods: 14, startingValues: [], verbose: false })
    console.log('StochasticRSI 14 Resolução: 1d Quantidade:', count, 'Resultado por dia:', getProfit(stochasticRSI, candles, 100000, false, '1d'))

    stochasticRSI = new StochasticRSIStrategy({ periods: 20, startingValues: [], verbose: false })
    console.log('StochasticRSI 20 Resolução: 1d Quantidade:', count, 'Resultado por dia:', getProfit(stochasticRSI, candles, 100000, false, '1d'))

    candles = await getCandles('ETH-BRL', '1h', count)
    stochasticRSI = new StochasticRSIStrategy({ periods: 10, startingValues: [], verbose: false })
    console.log('StochasticRSI 10 Resolução: 1h Quantidade:', count, 'Resultado por dia:', getProfit(stochasticRSI, candles, 100000, false, '1h'))

    stochasticRSI = new StochasticRSIStrategy({ periods: 14, startingValues: [], verbose: false })
    console.log('StochasticRSI 14 Resolução: 1h Quantidade:', count, 'Resultado por dia:', getProfit(stochasticRSI, candles, 100000, false, '1h'))

    stochasticRSI = new StochasticRSIStrategy({ periods: 20, startingValues: [], verbose: false })
    console.log('StochasticRSI 20 Resolução: 1h Quantidade:', count, 'Resultado por dia:', getProfit(stochasticRSI, candles, 100000, false, '1h'))

    candles = await getCandles('ETH-BRL', '15m', count)
    stochasticRSI = new StochasticRSIStrategy({ periods: 10, startingValues: [], verbose: false })
    console.log('StochasticRSI 10 Resolução: 15m Quantidade:', count, 'Resultado por dia:', getProfit(stochasticRSI, candles, 100000, false, '15m'))

    stochasticRSI = new StochasticRSIStrategy({ periods: 14, startingValues: [], verbose: false })
    console.log('StochasticRSI 14 Resolução: 15m Quantidade:', count, 'Resultado por dia:', getProfit(stochasticRSI, candles, 100000, false, '15m'))

    stochasticRSI = new StochasticRSIStrategy({ periods: 20, startingValues: [], verbose: false })
    console.log('StochasticRSI 20 Resolução: 15m Quantidade:', count, 'Resultado por dia:', getProfit(stochasticRSI, candles, 100000, false, '15m'))
}

export async function testRSI(count) {
    let candles = await getCandles('ETH-BRL', '1d', count)
    let rsiStrategy = new RSIStrategy({ periods: 10, startingValues: [], verbose: false })
    console.log('RSI 10 Resolução: 1d Quantidade:', count, 'Resultado por dia:', getProfit(rsiStrategy, candles, 100000, false, '1d'))

    rsiStrategy = new RSIStrategy({ periods: 14, startingValues: [], verbose: false })
    console.log('RSI 14 Resolução: 1d Quantidade:', count, 'Resultado por dia:', getProfit(rsiStrategy, candles, 100000, false, '1d'))

    rsiStrategy = new RSIStrategy({ periods: 20, startingValues: [], verbose: false })
    console.log('RSI 20 Resolução: 1d Quantidade:', count, 'Resultado por dia:', getProfit(rsiStrategy, candles, 100000, false, '1d'))

    candles = await getCandles('ETH-BRL', '1h', count)
    rsiStrategy = new RSIStrategy({ periods: 10, startingValues: [], verbose: false })
    console.log('RSI 10 Resolução: 1h Quantidade:', count, 'Resultado por dia:', getProfit(rsiStrategy, candles, 100000, false, '1h'))

    rsiStrategy = new RSIStrategy({ periods: 14, startingValues: [], verbose: false })
    console.log('RSI 14 Resolução: 1h Quantidade:', count, 'Resultado por dia:', getProfit(rsiStrategy, candles, 100000, false, '1h'))

    rsiStrategy = new RSIStrategy({ periods: 20, startingValues: [], verbose: false })
    console.log('RSI 20 Resolução: 1h Quantidade:', count, 'Resultado por dia:', getProfit(rsiStrategy, candles, 100000, false, '1h'))

    candles = await getCandles('ETH-BRL', '15m', count)
    rsiStrategy = new RSIStrategy({ periods: 10, startingValues: [], verbose: false })
    console.log('RSI 10 Resolução: 15m Quantidade:', count, 'Resultado por dia:', getProfit(rsiStrategy, candles, 100000, false, '15m'))

    rsiStrategy = new RSIStrategy({ periods: 14, startingValues: [], verbose: false })
    console.log('RSI 14 Resolução: 15m Quantidade:', count, 'Resultado por dia:', getProfit(rsiStrategy, candles, 100000, false, '15m'))

    rsiStrategy = new RSIStrategy({ periods: 20, startingValues: [], verbose: false })
    console.log('RSI 20 Resolução: 15m Quantidade:', count, 'Resultado por dia:', getProfit(rsiStrategy, candles, 100000, false, '15m'))
}
export async function testSMA(count) {
    let candles = await getCandles('ETH-BRL', '1d', count)
    let smaStrategy = new SMAStrategy({ periods: 5, startingValues: [], verbose: false })
    console.log('SMA 5 Resolução: 1d Quantidade:', count, 'Resultado por dia:', getProfit(smaStrategy, candles, 100000, false, '1d'))

    smaStrategy = new SMAStrategy({ periods: 10, startingValues: [], verbose: false })
    console.log('SMA 10 Resolução: 1d Quantidade:', count, 'Resultado por dia:', getProfit(smaStrategy, candles, 100000, false, '1d'))

    smaStrategy = new SMAStrategy({ periods: 20, startingValues: [], verbose: false })
    console.log('SMA 20 Resolução: 1d Quantidade:', count, 'Resultado por dia:', getProfit(smaStrategy, candles, 100000, false, '1d'))

    candles = await getCandles('ETH-BRL', '1h', count)
    smaStrategy = new SMAStrategy({ periods: 5, startingValues: [], verbose: false })
    console.log('SMA 5 Resolução: 1h Quantidade:', count, 'Resultado por dia:', getProfit(smaStrategy, candles, 100000, false, '1h'))

    smaStrategy = new SMAStrategy({ periods: 10, startingValues: [], verbose: false })
    console.log('SMA 10 Resolução: 1h Quantidade:', count, 'Resultado por dia:', getProfit(smaStrategy, candles, 100000, false, '1h'))

    smaStrategy = new SMAStrategy({ periods: 20, startingValues: [], verbose: false })
    console.log('SMA 20 Resolução: 1h Quantidade:', count, 'Resultado por dia:', getProfit(smaStrategy, candles, 100000, false, '1h'))

    candles = await getCandles('ETH-BRL', '15m', count)
    smaStrategy = new SMAStrategy({ periods: 5, startingValues: [], verbose: false })
    console.log('SMA 5 Resolução: 15m Quantidade:', count, 'Resultado por dia:', getProfit(smaStrategy, candles, 100000, false, '15m'))

    smaStrategy = new SMAStrategy({ periods: 10, startingValues: [], verbose: false })
    console.log('SMA 10 Resolução: 15m Quantidade:', count, 'Resultado por dia:', getProfit(smaStrategy, candles, 100000, false, '15m'))

    smaStrategy = new SMAStrategy({ periods: 20, startingValues: [], verbose: false })
    console.log('SMA 20 Resolução: 15m Quantidade:', count, 'Resultado por dia:', getProfit(smaStrategy, candles, 100000, false, '15m'))
}

export function getProfit(strategy, candles, startBalance, verbose, resolution = '1d') {
    let balance = startBalance
    let startMoney = 0
    let endMoney = 0
    let totalProfit = 0
    let quantity = 0
    let profits = 0
    let loses = 0
    for (let candle of candles) {
        let action = strategy.proccessCandle(candle)
        if (action == 'BUY') {
            strategy.setStatus('LONG')
            quantity = balance / candle.close
            balance = 0
            startMoney = quantity * candle.close
        } else if (action == 'SELL') {
            if (strategy.getStatus() == 'LONG') {
                strategy.setStatus('NONE')
                endMoney = quantity * candle.close
                balance = endMoney
                totalProfit += endMoney - startMoney
                if (verbose) console.log(startMoney > endMoney ? 'LOSE' : 'PROFIT', endMoney - startMoney)
                if (startMoney > endMoney) profits++
                else loses++
            }
        }
    }
    let result
    if (resolution == '1d') {
        result = totalProfit / candles.length
    } else if (resolution == '1h') {
        result = totalProfit / (candles.length / 24)
    } else if (resolution == '15m') {
        result = totalProfit / (candles.length / 24 / 4)
    } else {
        result = 0
    }
    return result.toFixed(2)
}
