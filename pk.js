// function submitForm() {
//     var inputValue = document.getElementById("inputField").value;
//   }
  function submitForm() {
    var inputValue = document.getElementById("inputField").value;
    window.open("/ux/index.html?input=" + inputValue, "_blank");
  }