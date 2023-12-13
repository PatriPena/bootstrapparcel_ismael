// import * as bootstrap from 'bootstrap'

// Import only the Bootstrap components we need
import { Util, Dropdown, Offcanvas, Popover, Tooltip, Toast } from "bootstrap";

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover);
});

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((tooltip) => {
  new Tooltip(tooltip);
});
