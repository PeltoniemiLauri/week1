import "./styles.css";

document.getElementById("Button").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("Hello").innerHTML = "My notebook";
  console.log("Hello world");
}
