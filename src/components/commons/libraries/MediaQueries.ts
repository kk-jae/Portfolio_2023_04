export const device = {
  tablet: 1124,
  phone: 768,
};

export const mediaQueries = (key: keyof typeof device) => {
  return `@media (max-width: ${device[key]}px)`;
};
