class Box {
  constructor(element) {
    this.element = element;
    // get the element that holds the background color
    this.background = this.element.querySelector(".bg-color");
    // also get all the links
    this.links = this.element.querySelectorAll("a");
    // listen for mouseover
    this.element.addEventListener("mouseover", () => {
      this.mouseOver();
    });
    this.element.addEventListener("mouseout", () => {
      this.mouseOff();
    });
  }
  mouseOver() {
    // change the background color to the banner background
    this.background.style.background = "rgba(36, 41, 67, 0.9)";
    // I wanted it to be more obvious that the links were clickable without changing the current styles or layout, so on hover of the box element the links change to their hover color
    this.links.forEach(link => (link.style.color = "#6fc3df"));
  }
  mouseOff() {
    // by just removing the inline style, the element reverts to how it is styled in less
    this.background.style.background = "";
    this.links.forEach(link => (link.style.color = ""));
  }
}

let boxes = Array.from(document.querySelectorAll(".box"));
console.log(boxes);
boxes.map(box => new Box(box));
