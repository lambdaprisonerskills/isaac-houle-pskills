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
    document.querySelector("main").classList.add("blur");
  }
  menuDisappear() {
    this.element.style.display = "none";
    document.querySelector("main").classList.remove("blur");
  }
}

let menu = document.querySelector(".menu");
new Menu(menu);
