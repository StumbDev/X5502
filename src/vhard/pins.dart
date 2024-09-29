enum PinMode {
  input,
  output,
}

enum ResistorType {
  ohm, // Regular resistor
  kiloohm,
}

// Pin class
class Pin {
  PinMode _mode;
  num _value;
  bool _pullupEnabled;
  bool _pulldownEnabled;

    // ignore: unused_field
    num? _pwmValue;
  Set _pwmFrequency;
  Set _pwmDutyCycle;

  Pin({PinMode mode = PinMode.input}) {
    _mode = mode;
    _value = 0;
    _pullupEnabled = false;
    _pulldownEnabled = false;
  }

  PinMode get mode => _mode;

  set mode(PinMode mode) {
    _mode = mode;
  }

  num get value => _value;

  set value(num value) {
    _value = value;
  }

  void enablePullup() {
    _pullupEnabled = true;
  }

  void disablePullup() {
    _pullupEnabled = false;
  }

  void enablePulldown() {
    _pulldownEnabled = true;
  }

  void disablePulldown() {
    _pulldownEnabled = false;
  }

  bool isPullupEnabled() {
    return _pullupEnabled;
  }

  bool isPulldownEnabled() {
    return _pulldownEnabled;
  }
}


// Resistor class
class Resistor {
  num _resistance;
  ResistorType _type;

  Resistor(this._resistance, {ResistorType type = ResistorType.ohm}) : _type = type;

  num get resistance {
    return _resistance * (_type == ResistorType.kiloohm ? 1000 : 1);
  }
}

void main() {
  // Example usage
  var pin1 = Pin(mode: PinMode.output);
  pin1.value = 1;

  var resistor1 = Resistor(10, type: ResistorType.kiloohm);

  print(pin1.value); // Outputs 1
  print(resistor1.resistance); // Outputs 10000
}
