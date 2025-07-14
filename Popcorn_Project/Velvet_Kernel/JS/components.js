// Off Frame Overlay Window

class OffCanvasOverlay {
  constructor({
    openBtnSelector,
    wrapperSelector,
    closeBtnSelector,
    hiddenClass = "is-closed",
  }) {
    this.openBtn = document.querySelector(openBtnSelector);
    this.wrapper = document.querySelector(wrapperSelector);
    this.closeBtn = this.wrapper.querySelector(closeBtnSelector);
    this.hiddenClass = hiddenClass;

    // Bind methods so 'this' stays correct in event callbacks
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.checkOutsideClick = this.checkOutsideClick.bind(this);

    this.attachEvents();
  }

  attachEvents() {
    this.openBtn.addEventListener("click", this.open);
    this.closeBtn.addEventListener("click", this.close);
    this.wrapper.addEventListener("click", this.checkOutsideClick);
  }

  open() {
    this.wrapper.classList.remove(this.hiddenClass);
  }

  close() {
    this.wrapper.classList.add(this.hiddenClass);
  }

  checkOutsideClick(e) {
    // Only close if user clicked directly on the backdrop wrapper
    if (e.target === this.wrapper) {
      this.close();
    }
  }
}

const leftOverlay = new OffCanvasOverlay({
  openBtnSelector: ".left-menu-btn",
  wrapperSelector: ".left-overlay-wrapper",
  closeBtnSelector: ".x-icon-container",
  hiddenClass: "is-closed",
});
