import { sma, SMA } from 'technicalindicators'

export class SMAStrategy {
    _sma = null
    _verbose = true
    _status = 'NONE'
    constructor({ periods, startingValues, verbose = true }) {
        this._verbose = verbose
        this._sma = new SMA({ period: periods, values: startingValues })
    }
    proccessCandle(candle) {
        let result = this._sma.nextValue(candle.close)
        let recomendation
        if (result > candle.close && this._status != 'NONE') recomendation = 'SELL'
        else if (result < candle.close && this._status != 'LONG') recomendation = 'BUY'
        else recomendation = 'NEUTRAL'
        if (this._verbose) console.log('SMA Recomendation', recomendation, 'Closing:', candle.close, 'Result:', result)
        return recomendation
    }
    setStatus(status) {
        this._status = status
    }
    getStatus() {
        return this._status
    }
}
