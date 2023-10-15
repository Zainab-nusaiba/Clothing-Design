import { proxy } from "valtio";

//can be considered as empty default values
const state = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: `./threejs.png`,
  fullDecal: `./threejs.png`,
});

export default state;
