if (annyang) {
  // Let's define a command.
  var commands = {
    'Hello': function() {
      // alert('Hello world!');
    event.preventDefault();

    speak();

    inputTxt.blur();
  }
  };
  // Add our commands to annyang
  annyang.addCommands(commands);
  // Start listening.
  annyang.start();
}


var synth = window.speechSynthesis;
var voices = [];

function populateVoiceList() {
  voices = synth.getVoices();
}

populateVoiceList();

if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak(){
    var utterThis = new SpeechSynthesisUtterance('Hi Jebin, Am Izna, your information assistant.');
    utterThis.voice = voices[54];
    utterThis.pitch = 1;
    utterThis.rate = 1;
    synth.speak(utterThis);
}
