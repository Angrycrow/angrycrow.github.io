const details = document.querySelector("details");
details.addEventListener("click", function(e) {
  if (details.hasAttribute("open")) { // since it's not closed yet, it's open!
    e.preventDefault(); // stop the default behavior, meaning - the hiding
    details.classList.add("closing"); // add a class which apply the animation in CSS
    setTimeout(() => { // only after the animation finishes, continue
      details.removeAttribute("open"); // close the element
      details.classList.remove("closing");
    }, 400);
  }
});