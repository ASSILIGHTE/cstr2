import confetti from 'canvas-confetti';

// Soft celebration confetti - Sky Blue Palette
export const triggerSoftConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    colors: ['#0284c7', '#0ea5e9', '#38bdf8', '#7dd3fc', '#bae6fd', '#e0f2fe']
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

// Heart & Cloud Burst animation for button press
export const triggerHeartBurst = (originX = 0.5, originY = 0.5) => {
  const blueHeartShape = confetti.shapeFromText({ text: '🩵', scalar: 1.5 });
  const cloudShape = confetti.shapeFromText({ text: '☁️', scalar: 1.2 });
  const sparklesShape = confetti.shapeFromText({ text: '✨', scalar: 1.1 });

  confetti({
    particleCount: 35,
    spread: 70,
    origin: { x: originX, y: originY },
    shapes: [blueHeartShape, cloudShape, sparklesShape],
    scalar: 1.3,
    ticks: 120,
    gravity: 0.6,
    decay: 0.94,
    startVelocity: 30
  });
};

