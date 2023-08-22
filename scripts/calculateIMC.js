export const calculateIMC = (weight, height) => {
  const heightInMeters = height / 100;
  return (weight / heightInMeters ** 2).toFixed(1);
};
