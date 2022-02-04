import { RSI } from 'technicalindicators'

export class RSIStrategy {
    _rsi = null
    _verbose = true
    _status = 'NONE'
    _overbought
    _oversold
    constructor({ periods, startingValues, verbose = true, overbought = 70, oversold = 30 }) {
        this._verbose = verbose
        this._rsi = new RSI({ period: periods, values: startingValues })
        this._overbought = oversold
        this._overbought = overbought
    }
    proccessCandle(candle) {
        let result = this._rsi.nextValue(candle.close)
        let recomendation
        if (result > this._overbought && this._status != 'NONE') recomendation = 'SELL'
        else if (result < this._overbought && this._status != 'LONG') recomendation = 'BUY'
        else recomendation = 'NEUTRAL'
        if (this._verbose) console.log('RSI Recomendation', recomendation, 'Closing:', candle.close, 'Result:', result)
        return recomendation
    }
    setStatus(status) {
        this._status = status
    }
    getStatus() {
        return this._status
    }
}
