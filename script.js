document.addEventListener("DOMContentLoaded", ()=> {
    const result = document.getElementById("result");



document.querySelectorAll("input[type='button']").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;
    if (value === "c") {
      result.value = "";
    } else if (value === "=") {
      try {
        result.value = eval(result.value);
      } catch {
        result.value = "hehehe error";
      }
    } else {
      result.value += value;
    }
  });
});

});