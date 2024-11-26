export const getYearsArray = () => {
  const currentYear = new Date().getFullYear();

  return Array.from(
    { length: currentYear - 2015 + 1 },
    (_, index) => currentYear - index
  ).reverse();
};
