var context = new window.AudioContext();

var osc = context.createOscillator();
osc.frequency.value = 440;
osc.connect(context.destination);
osc.start(0);
