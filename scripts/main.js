import { calculateIMC } from "./calculateIMC.js";
import { toggleModal } from "./toggleModal.js";
import { validateInputs } from "./validation.js";

const imcElement = document.querySelector("#imc");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");

const btnCalculateIMC = document.querySelector("#btn-calculate-IMC");
const btnClose = document.querySelector("#btn-close");

const messageError = document.querySelector(".error");

const hideErrorMessage = () => {
  messageError.classList.add("hide");
};

weightInput.addEventListener("input", hideErrorMessage);
heightInput.addEventListener("input", hideErrorMessage);

btnCalculateIMC.addEventListener("click", (e) => {
  e.preventDefault();

  if (!validateInputs(weightInput, heightInput)) {
    messageError.classList.remove("hide");
    weightInput.value = "";
    heightInput.value = "";
    return;
  }

  toggleModal();

  const weight = Number(weightInput.value);
  const height = Number(heightInput.value);
  const calculatedIMC = calculateIMC(weight, height);
  imcElement.innerText = calculatedIMC;
});

const resetForm = () => {
  weightInput.value = "";
  heightInput.value = "";
};

btnClose.addEventListener("click", () => {
  toggleModal();
  resetForm();
});
