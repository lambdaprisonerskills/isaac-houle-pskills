class Menu {
  constructor(element) {
    this.element = element;
    this.appearButton = document.querySelector(".menu-button");
    this.closeButton = this.element.querySelector(".close");
    this.appearButton.addEventListener("click", () => {
      this.menuAppear();
    });
    this.closeButton.addEventListener("click", () => {
      this.menuDisappear();
    });
  }
  menuAppear() {
    this.element.style.display = "flex";
  }
  menuDisappear() {
    this.element.style.display = "none";
  }
}

let menu = document.querySelector(".menu");
new Menu(menu);
