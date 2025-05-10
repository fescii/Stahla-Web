import apps from "./apps/index.js";
import create from "./create/index.js";
import feeds from "./feeds/index.js";
import forms from "./forms/index.js";
import loaders from "./loaders/index.js";
import popups from "./popups/index.js";
import stats from "./stats/index.js";
import wrappers from "./wrappers/index.js";

const core = () => {
  window.matchMedia('(display-mode: standalone)').addEventListener('change', (evt) => {
    let displayMode = 'browser';
    if (evt.matches) {
      displayMode = 'standalone';
    }
    // Log display mode change to analytics
    console.log('DISPLAY_MODE_CHANGED', displayMode);
  });
}

export default function uis(text) {
  apps();
  create();
  feeds();
  forms();
  loaders();
  popups();
  stats();
  wrappers();
  core();
  // Log to console
  console.log(text);
}