class Menu {
  constructor(element) {
    this.element = element;
    this.appearButton = document.querySelector(".menu-button");
    this.closeButton = this.element.querySelector(".close");
    this.links = this.element.querySelectorAll(".links");
    this.links[this.links.length - 1].style.border = "none";
    this.main = document.querySelector("main");
    this.appearButton.addEventListener("click", () => {
      this.menuAppear();
    });
    this.closeButton.addEventListener("click", () => {
      this.menuDisappear();
    });
  }
  menuAppear() {
    TweenMax.fromTo(
      this.element,
      0.5,
      { display: "none", opacity: 0 },
      { display: "flex", opacity: 1 }
    );
    this.main.classList.add("blur");
  }
  menuDisappear() {
    TweenMax.fromTo(
      this.element,
      0.5,
      { display: "flex", opacity: 1 },
      { display: "none", opacity: 0 }
    );
    this.main.classList.remove("blur");
  }
}

let menu = document.querySelector(".menu");
new Menu(menu);
