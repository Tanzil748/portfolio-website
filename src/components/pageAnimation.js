export const fadeIn = (direction) => {
  return {
    hidden: {
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      opacity: 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: 0.3,
      },
    },
  };
};
