export const messageAlert = (calculatedIMC) => {
  const lowWeight = calculatedIMC < 18.5;
  const NormalWeight = calculatedIMC >= 18.5 && calculatedIMC <= 24.9;
  const overWeight = calculatedIMC >= 25 && calculatedIMC <= 29.9;
  const gradeOneObesity = calculatedIMC >= 30 && calculatedIMC <= 34.9;
  const gradeTwoObesity = calculatedIMC >= 35 && calculatedIMC <= 39.9;
  const gradeThreeObesity = calculatedIMC >= 40;

  if (lowWeight) {
    return `Seu IMC é de ${calculatedIMC}. Você está abaixo do peso ideal.`;
  } else if (NormalWeight) {
    return `Seu IMC é de ${calculatedIMC}. Você está com o peso normal.`;
  } else if (overWeight) {
    return `Seu IMC é de ${calculatedIMC}. Você está com sobrepeso.`;
  } else if (gradeOneObesity) {
    return `Seu IMC é de ${calculatedIMC}. Você está com obesidade grau I.`;
  } else if (gradeTwoObesity) {
    return `Seu IMC é de ${calculatedIMC}. Você está com obesidade grau II.`;
  } else if (gradeThreeObesity) {
    return `Seu IMC é de ${calculatedIMC}. Você está com obesidade grau III.`;
  }
};

export const calculateIMC = (weight, height) => {
  const heightInMeters = height / 100;
  return (weight / heightInMeters ** 2).toFixed(1);
};
