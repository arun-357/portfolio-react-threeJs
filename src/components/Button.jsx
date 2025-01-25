import confetti from "canvas-confetti"

// eslint-disable-next-line react/prop-types
export default function Button({text, containerClass}) {
  function handleButtonClick() {
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 55,
      origin: { x: 1 }
    });
    setTimeout(() => {
      window.open('https://www.linkedin.com/in/im-arunachalam', '_blank', 'noopener');
    }, 1000);
  }

  return <>
    <button className={`btn ${containerClass}`} onClick={handleButtonClick}> 
      {text}
    </button>
  </>
}
