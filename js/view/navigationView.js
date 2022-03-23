class navCl {
  #parentEl = document.querySelector(".navigation");
  #navigationLink = this.#parentEl.querySelectorAll(".navigation__link");

  hideNavigationDropdown() {
    this.#navigationLink.forEach((el) => {
      el.querySelector(".navigation__icon").classList.remove(
        "navigation__icon--active"
      );
    });

    this.#parentEl
      .querySelectorAll(".navigation__dropdown")
      .forEach((el) => el.classList.remove("navigation__dropdown--active"));
  }

  toggleNavigationAction() {
    this.#parentEl
      .querySelector(".navigation__action")
      .classList.toggle("navigation__action--active");
  }

  toggleNavigationDropdown(i, target) {
    if (target.querySelector(".navigation__icon--active")) {
      this.hideNavigationDropdown();
    } else {
      this.hideNavigationDropdown();

      // rotating icon
      this.#navigationLink[i]
        .querySelector(".navigation__icon")
        .classList.add("navigation__icon--active");

      // displaying dropdown

      this.#parentEl
        .querySelectorAll(".navigation__dropdown")
        [i].classList.add("navigation__dropdown--active");
    }
  }

  addHandlerNavigationMenu(handler) {
    this.#parentEl
      .querySelector(".navigation__menu")
      .addEventListener("click", function (e) {
        e.preventDefault();
        e.target.classList.toggle("navigation__menu--active");
        handler();
      });
  }

  addHandlerNavigationLink(handler) {
    this.#navigationLink.forEach((el, i) =>
      el.addEventListener("click", function (e) {
        e.preventDefault();
        handler(i, e.target);
      })
    );
  }
}

export default new navCl();
