import navigationView from "./view/navigationView";

const controlNavigationMenu = function () {
  navigationView.toggleNavigationAction();
};

const controlNavigationDropdown = function (i, target) {
  navigationView.toggleNavigationDropdown(i, target);
};

const init = function () {
  navigationView.addHandlerNavigationMenu(controlNavigationMenu);
  navigationView.addHandlerNavigationLink(controlNavigationDropdown);
};

init();
