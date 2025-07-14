const components = {
  snackShop: {
    pinDefault: document.querySelector('[data-pin-default="snackShop"]'),
    pinClicked: document.querySelector('[data-pin-clicked="snackShop"]'),
    card: document.querySelector('[data-card="snackShop"]'),
    block: document.querySelector('[data-block="snackShop"]'),
  },
  mallStore: {
    pinDefault: document.querySelector('[data-pin-default="mallStore"]'),
    pinClicked: document.querySelector('[data-pin-clicked="mallStore"]'),
    card: document.querySelector('[data-card="mallStore"]'),
    block: document.querySelector('[data-block="mallStore"]'),
  },
  navyPier: {
    pinDefault: document.querySelector('[data-pin-default="navyPier"]'),
    pinClicked: document.querySelector('[data-pin-clicked="navyPier"]'),
    card: document.querySelector('[data-card="navyPier"]'),
    block: document.querySelector('[data-block="navyPier"]'),
  },
};

// Visibility Function
function setVisibility(storeKey, visibilityMap) {
  const store = components[storeKey];
  if (!store) return;

  for (const part in visibilityMap) {
    if (store[part]) {
      store[part].classList.toggle("hidden", !visibilityMap[part]);
    }
  }
}

// Toggle Visibility
setVisibility("snackShop", {
  pinDefault: 1,
  pinClicked: 0,
  card: 0,
  block: 1,
});

setVisibility("mallStore", {
  pinDefault: 1,
  pinClicked: 0,
  card: 0,
  block: 0,
});

setVisibility("navyPier", {
  pinDefault: 1,
  pinClicked: 0,
  card: 0,
  block: 0,
});

// Location Search

class LocationSearch {
  // Constructor receives an object with selectors for the input field and the dropdown extension
  constructor({ inputSelector, extensionSelector }) {
    // Grab the input element
    this.input = document.querySelector(inputSelector);

    // Grab the extension dropdown (suggestions container)
    this.extension = document.querySelector(extensionSelector);

    // Reference to the outer wrapper (used for detecting outside clicks)
    this.container = this.input.closest(".location-search-container");

    // Bind methods to preserve the value of 'this' when used as event handlers
    this.openExtension = this.openExtension.bind(this);
    this.closeExtension = this.closeExtension.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);

    // Initialize event listeners
    this.attachEvents();
  }

  // Method to attach all relevant event listeners
  attachEvents() {
    // When input is focused (or clicked), show the dropdown
    this.input.addEventListener("focus", this.openExtension);

    // Detect any click outside the container to close the dropdown
    document.addEventListener("click", this.handleOutsideClick);

    // Add a click listener to each suggested location <li> to close dropdown when selected
    this.extension.querySelectorAll("li").forEach((li) => {
      li.addEventListener("click", this.handleItemClick);
    });
  }

  // Method to open/show the dropdown extension
  openExtension() {
    this.extension.classList.add("is-open");
  }

  // Method to close/hide the dropdown extension
  closeExtension() {
    this.extension.classList.remove("is-open");
  }

  // Called whenever the user clicks on the document
  handleOutsideClick(e) {
    // If the click is *outside* the container, close the dropdown
    if (!this.container.contains(e.target)) {
      this.closeExtension();
    }
  }

  // Called when a suggestion <li> is clicked
  handleItemClick(e) {
    // Optional: you can read the location text from e.target.textContent or innerText here
    this.closeExtension(); // Close dropdown after selecting
  }
}

const search = new LocationSearch({
  inputSelector: "#inputLocation",
  extensionSelector: ".searchbox-extension",
});

// Pin and Store Cards

class PinStoreCards {
  constructor({
    pinSelector,
    cardSelector,
    closeSelector,
    mapWrapperSelector,
    hiddenClass = "hidden",
  }) {
    this.pinBtns = document.querySelectorAll(pinSelector);
    this.clickedPins = document.querySelectorAll("[data-pin-clicked]");
    this.cards = document.querySelectorAll(cardSelector);
    this.closeBtns = document.querySelectorAll(closeSelector);
    this.mapWrapper = document.querySelector(mapWrapperSelector);
    this.blocks = document.querySelectorAll(".store-specific-block");
    this.hiddenClass = hiddenClass;
    this.lastOpenedStoreId = null;

    this.attachEvents();
  }

  attachEvents() {
    this.pinBtns.forEach((pin) => {
      pin.addEventListener("click", () => {
        const storeId = pin.getAttribute("data-store");
        this.openCard(storeId);
      });
    });

    this.closeBtns.forEach((xBtn) => {
      xBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const storeId = xBtn.getAttribute("data-store");
        this.closeCard(storeId);
      });
    });

    if (this.mapWrapper) {
      this.mapWrapper.addEventListener("click", (e) => {
        const clickedInsideCard = e.target.closest(".store-details-card");
        const clickedOnPin = e.target.closest(".store-pin-wrapper");

        if (!clickedInsideCard && !clickedOnPin) {
          this.cards.forEach((card) => card.classList.add(this.hiddenClass));
          this.clickedPins.forEach((pin) =>
            pin.classList.add(this.hiddenClass)
          );
        }
      });
    }

    this.cards.forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target === card) {
          const storeId = card.getAttribute("data-store");
          this.closeCard(storeId);
        }
      });
    });
  }

  openCard(storeId) {
    // 💡 Save the current one only if it's different
    if (this.lastOpenedStoreId !== storeId) {
      this.previousStoreId = this.lastOpenedStoreId;
      this.lastOpenedStoreId = storeId;
    }

    this.cards.forEach((card) => {
      card.classList.toggle(
        this.hiddenClass,
        card.getAttribute("data-store") !== storeId
      );
    });

    this.blocks.forEach((block) => {
      block.classList.toggle(
        this.hiddenClass,
        block.getAttribute("data-block") !== storeId
      );
    });

    this.clickedPins.forEach((pin) => {
      pin.classList.toggle(
        this.hiddenClass,
        pin.getAttribute("data-pin-clicked") !== storeId
      );
    });
  }

  closeCard(storeId) {
    const card = document.querySelector(
      `.store-details-card[data-store="${storeId}"]`
    );
    if (card) card.classList.add(this.hiddenClass);

    this.clickedPins.forEach((pin) => {
      if (pin.getAttribute("data-pin-clicked") === storeId) {
        pin.classList.add(this.hiddenClass);
      }
    });
  }
}

new PinStoreCards({
  pinSelector: "[data-store]",
  cardSelector: ".store-details-card",
  closeSelector: ".x-mark-container",
  mapWrapperSelector: ".map-wrapper",
});
