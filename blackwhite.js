function switchMode() {
  const body = document.body;
  const currentClass = body.className;
  body.className = currentClass === "dark-mode" ? "light-mode" : "dark-mode";
  document.getElementById("toggleMode").innerHTML =
    currentClass === "light-mode" ? "Toggle light mode" : "Toggle dark mode";
}