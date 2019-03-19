import { NosWindow } from "./window";

declare const window: NosWindow;

import exists from "./exists";

// bind assets constant to variable
const assets = exists
  ? window.NOS.ASSETS
  : {
      GAS: "602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7",
      NEO: "c56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b"
    };

export default assets;
