import exists from "./exists";
import { NosWindow } from "./window";

declare const window: NosWindow;

const nos = {
  exists,
  getAddress: window.NOS.V1.getAddress
};

export default nos;
