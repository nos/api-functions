import { NosWindow } from "./window";

declare const window: NosWindow;

// Check if nOS is defined in window
const exists = !!window.NOS;

export default exists;
