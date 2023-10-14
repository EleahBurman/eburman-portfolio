function startListening() {
  const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = navigator.language || 'en-US'; // Use the user's preferred language or default to 'en-US' if not available

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById('input-box').value = transcript;
  };

  recognition.start();
}