export const isNumber = (input) => {
  return !isNaN(input) && input !== "";
};

export const validateInputs = (weightInput, heightInput) => {
  if (!isNumber(weightInput.value) || !isNumber(heightInput.value)) {
    return false;
  }
  return true;
};
