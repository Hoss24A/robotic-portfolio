export function Testimonials() {
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = window.speechSynthesis.getVoices().find(v => v.name.includes('Google UK'));
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <p>"Amazing work!" - CEO of TechCorp</p>
      <button onClick={() => speak("Amazing work! - CEO of TechCorp")}>
        🔊 Play Audio
      </button>
    </div>
  );
}