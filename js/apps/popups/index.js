import DeletePopup from "./delete.js"

export default function popups() {
  // Register popups
  customElements.define("delete-popup", DeletePopup);
}