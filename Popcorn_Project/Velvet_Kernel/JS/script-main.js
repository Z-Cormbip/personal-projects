// Quantity Stepper/ Increment/Decrement Counter

class QuantityStepper {
  constructor(minusSelector, plusSelector, inputSelector, min = 1, max = 9) {
    this.minusBtn = document.querySelector(minusSelector);
    this.plusBtn = document.querySelector(plusSelector);
    this.amountInput = document.querySelector(inputSelector);
    this.amount = parseInt(this.amountInput.value) || min;
    this.min = min;
    this.max = max;

    this.updateButtonState();
    this.attachEvents();
  }

  updateButtonState() {
    this.plusBtn.disabled = this.amount >= this.max;
    this.minusBtn.disabled = this.amount <= this.min;
  }

  attachEvents() {
    this.plusBtn.addEventListener("click", () => {
      if (this.amount < this.max) {
        this.amount++;
        this.amountInput.value = this.amount;
        this.updateButtonState();
      }
    });

    this.minusBtn.addEventListener("click", () => {
      if (this.amount > this.min) {
        this.amount--;
        this.amountInput.value = this.amount;
        this.updateButtonState();
      }
    });
  }
}

const kernelQtyStepper = new QuantityStepper(".minus", ".plus", "#amount");
