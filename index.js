import { getCandles } from './exchanges/mercadoBitcoin.js'
import { SMAStrategy } from './strategies/SMA.js'
import { getProfit, testVariations } from './training/index.js'
import technicalIndicators from 'technicalindicators'

technicalIndicators.setConfig('precision', 10)

testVariations()
// let candles = await getCandles('ETH-BRL', '1d', 400)
// let smaStrategy = new SMAStrategy({ periods: 10, startingValues: [], verbose: false })

//console.log('Resultado Final', getProfit(smaStrategy, candles, 100000, false))
