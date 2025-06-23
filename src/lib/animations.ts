import { gsap } from 'gsap';

export const floatAnimation = (target: gsap.TweenTarget) => {
  return gsap.to(target, {
    y: -10,
    duration: 2,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut',
  });
};