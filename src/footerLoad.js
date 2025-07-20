export default function (parentContainer) {
  const footer = document.createElement("footer");
  const string = "Copyright &copy 2023 Punto de Calma";
  footer.innerHTML = string;
  parentContainer.appendChild(footer);
}
