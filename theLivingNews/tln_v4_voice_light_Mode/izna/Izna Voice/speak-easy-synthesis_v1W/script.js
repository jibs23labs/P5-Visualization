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

// var inputForm = document.querySelector('form');
// var inputTxt = document.querySelector('.txt');
// var inputTxt = "Hi Jebin. This is Izna.";
var voiceSelect = '';




// var pitch = document.querySelector('#pitch');
// var pitchValue = document.querySelector('.pitch-value');
// var rate = document.querySelector('#rate');
// var rateValue = document.querySelector('.rate-value');

var voices = [];

function populateVoiceList() {
  voices = synth.getVoices();
  // var selectedIndex = 54;
  // voiceSelect.innerHTML = '';
  // for(i = 0; i < voices.length ; i++) {
    // var option = document.createElement('option');
    // option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    // if(voices[i].default) {
    //   option.textContent += ' -- DEFAULT';
    // }

    // option.setAttribute('data-lang', voices[i].lang);
    // option.setAttribute('data-name', voices[i].name);
    // voiceSelect.appendChild(option);
  // }
  // voiceSelect.selectedIndex = selectedIndex;
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

function speak(){
  // if(inputTxt.value !== ''){
    // var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    var utterThis = new SpeechSynthesisUtterance('Hi Jebin, Am Izna, your information assistant.');
    // var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    // var selectedOption = "Google UK English Female (en-GB)";
    // for(i = 0; i < voices.length ; i++) {
    //   if(voices[i].name === selectedOption) {
        utterThis.voice = voices[54];
    //   }
    // }
    // utterThis.pitch = pitch.value;
        utterThis.pitch = 1;
    // utterThis.rate = rate.value;
        utterThis.rate = 1;
    synth.speak(utterThis);
  // }
}

  // inputForm.onsubmit = function(event) {
  // event.preventDefault();
  //
  // speak();
  //
  // inputTxt.blur();
// }
//
// pitch.onchange = function() {
//   pitchValue.textContent = pitch.value;
// }
//
// rate.onchange = function() {
//   rateValue.textContent = rate.value;
// }

// voiceSelect.onchange = function(){
//   speak();
// }
