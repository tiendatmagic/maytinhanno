var inputt = document.getElementById("inputs");
var mang;
var array = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

var charArr;

document.getElementById("result").addEventListener("click", () => {
  if (inputt.value === "") {

    document.getElementById("img").value = "Không được bỏ trống nha 😁😁😁";
    document.getElementById("obj").value = "Không được bỏ trống nha 😁😁😁";
  } else {
    mang = inputt.value;
    charArr = mang.split(",");

    for (i = 0; i < charArr.length; i++) {
      array.push(Number(charArr[i]));

      document.getElementById("img").value = array.length;

      //
      document.getElementById("obj").value = array.reduce(reducer);
    }
    array = [];
  }

  if (document.getElementById("obj").value === "NaN") {
    document.getElementById("img").value = "Nhập tào lao, không hiểu kiểu gì";
    document.getElementById("obj").value = "Nhập tào lao, không hiểu kiểu gì";
  }
});



document.getElementById("img").addEventListener("click", () => {
  if (document.getElementById("obj").value !== "NaN" && inputt.value !== "") {



    var copyText = document.getElementById("img");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }
});

document.getElementById("obj").addEventListener("click", () => {
  if (document.getElementById("obj").value !== "NaN" && inputt.value !== "") {
    var copyText = document.getElementById("obj");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
  }
});

