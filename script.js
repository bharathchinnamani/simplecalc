
  function calc()
  {
    let val=eval(document.getElementById("dis").value);
    document.getElementById("dis").value=val;
}
let textBox=document.getElementById("dis");
let btn=document.getElementById("equals");
textBox.addEventListener("keypress", function (event) { event.preventDefault();
    if (event.keyCode == 13) {
        btn.click();
    }
});
