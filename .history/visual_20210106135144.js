import { Text } from "./text.js";

import { BounceString } from "./bouncestrings.js";

export class Visual {
  constructor() {
    this.text = new Text();

    this.strings = [];

    this.mouse = {
      x: 0,
      y: 0,
      radius: 100,
    };
    document.addEventListener("pointermove", this.onMove.bind(this), false);
  }

  show(stageWidth, stageHeight) {
    this.pos = this.text.setText("M", 5, stageWidth, stageHeight);

    this.strings = [];
  
    for (let i = 0; i < this.pos.outline.length; i++) {
      this.strings[i] = new BounceString({
x1:this.pos.outline[i].x,
x1:this.pos.outline[i].x,
x1:this.pos.outline[i].x,
x1:this.pos.outline[i].x,
      })

      
  }

  onMove(e) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }
}