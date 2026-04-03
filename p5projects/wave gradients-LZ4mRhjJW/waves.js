class Wave {
  constructor(amp, period, phase, phaseShift) {
    this.amp = amp;
    this.period = period;
    this.phase = phase;
    this.phaseShift = phaseShift;
  }

  update() {
    this.phase += this.phaseShift;
  }

  setPhaseShift(v) {
    this.phaseShift = v;
  }

  setPeriod(v) {
    this.period = v;
  }
}

class SineWave extends Wave {
  constructor(amp, period, phase, phaseShift) {
    super(amp, period, phase, phaseShift);
  }

  evaluate(x) {
    let y = sin(this.phase + (TWO_PI * x) / this.period);
    let normalized = map(y, -1, 1, 0, this.amp);

    return normalized;
  }
}

class SquareWave extends Wave {
  constructor(amp, period, phase, phaseShift) {
    super(amp, period, phase, phaseShift);
  }

  sgn(v) {
    if (v > 0) {
      return 1;
    } else if (v < 0) {
      return -1;
    } else {
      return 0;
    }
  }
  
  evaluate(x) {
    let y = sin(this.phase + (TWO_PI * x) / this.period);
    let normalized = map(this.sgn(y), -1, 1, 0, this.amp);

    return normalized;
  }
}

class SawtoothWave extends Wave {
  constructor(amp, period, phase, phaseShift) {
    super(amp, period, phase, phaseShift);
  }
  
  evaluate(x) {
    let a = (x + this.phase) / this.period;
    let saw = 2 * (a - floor(0.5 + a));
    let normalized = map(saw, -1, 1, 0, this.amp);
    
    return normalized;
  }
}
