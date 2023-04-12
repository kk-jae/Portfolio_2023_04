export const device = {
  tablet: 1024,
  phone: 768,
};

export const mediaQueries = (key: keyof typeof device) => {
  return `@media (max-width: ${device[key]}px)`;
};
