import { getCandles } from './exchanges/mercadoBitcoin.js'
import { SMAStrategy } from './strategies/SMA.js'
import technicalIndicators from 'technicalindicators'

technicalIndicators.setConfig('precision', 10)

let candles = await getCandles('ETH-BRL', '1d', 400)
let smaStrategy = new SMAStrategy({ periods: 10, startingValues: [] })

let quantity = 100
let startMoney = 0
let endMoney = 0
let acumulado = 0
for (let candle of candles) {
    let action = smaStrategy.proccessCandle(candle)
    if (action == 'BUY') {
        smaStrategy.setStatus('LONG')
        startMoney = quantity * candle.close
    } else if (action == 'SELL') {
        if (smaStrategy.getStatus() == 'LONG') {
            smaStrategy.setStatus('NONE')
            endMoney = quantity * candle.close
            acumulado += endMoney - startMoney
            console.log(startMoney > endMoney ? 'PREJUÍZO' : 'LUCRO', endMoney - startMoney)
        }
    }
}
console.log('Resultado Final', acumulado)
