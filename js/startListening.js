// Function to start listening when the microphone button is clicked
function startListening() {
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = 'en-US'; // Set the language, adjust as needed

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById('input-box').value = transcript;
  };

  recognition.start();
}
