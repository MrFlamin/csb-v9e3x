import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Boyfriend from "./Boyfriend/Boyfriend.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Boyfriend: new Boyfriend({
    x: -20,
    y: -13,
    direction: 90,
    costumeNumber: 10,
    size: 90,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 60 // Set to 60 to make your project run faster
});
export default project;
