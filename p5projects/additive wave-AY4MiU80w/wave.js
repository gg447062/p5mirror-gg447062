class Wave {
  constructor (amp, period, phase) {
    this.amp = amp
    this.period = period
    this.phase = phase
  }
  
  updatePeriod(s) {
    this.period += s
  }
  
  update(s = 0.01) {
    this.phase += s
  }
  
  eval(x) {
    let y = sin(this.phase + TWO_PI * x / this.period) * this.amp
    return y
  }
}