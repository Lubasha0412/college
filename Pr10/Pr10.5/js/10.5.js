document.addEventListener("DOMContentLoaded", hiddenCloseclick);
document.getElementById('button').addEventListener("click", hiddenCloseclick);
function hiddenCloseclick(event) {
  let x = document.getElementById('button2');
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none"
  }
}