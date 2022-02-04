import { StochasticRSI } from 'technicalindicators'

export class StochasticRSIStrategy {
    _stochasticRsi = null
    _verbose = true
    _status = 'NONE'
    _overbought = 0
    _oversold = 0
    constructor({ periods, rsiPeriods = 14, kPeriod = 3, dPeriod = 3, startingValues, verbose = false, overbought = 80, oversold = 20 }) {
        this._verbose = verbose
        let inputStochasticRSI = {
            values: startingValues,
            rsiPeriod: rsiPeriods,
            stochasticPeriod: periods,
            kPeriod: kPeriod,
            dPeriod: dPeriod,
        }
        this._stochasticRsi = new StochasticRSI(inputStochasticRSI)
        this._overbought = oversold
        this._overbought = overbought
    }
    proccessCandle(candle) {
        let result = this._stochasticRsi.nextValue(candle.close)
        let recomendation
        if (result) {
            let { stochRSI, k, d } = result
            if (stochRSI > this._overbought && this._status != 'NONE') recomendation = 'SELL'
            else if (stochRSI < this._overbought && this._status != 'LONG') recomendation = 'BUY'
            else recomendation = 'NEUTRAL'
            if (this._verbose) console.log('RSI Recomendation', recomendation, 'Closing:', candle.close, 'Result:', stochRSI, 'k:', k, 'd:', d)
        } else {
            recomendation = 'NEUTRAL'
        }
        return recomendation
    }
    setStatus(status) {
        this._status = status
    }
    getStatus() {
        return this._status
    }
}
