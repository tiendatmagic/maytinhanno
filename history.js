var text = document.getElementById("img");
var text2 = document.getElementById("obj");
var data = JSON.parse(localStorage.getItem("dataa"));
var arr = JSON.parse(localStorage.getItem("arr"));
if (arr === null) {
  arr = [];
}

document.getElementById("content-notifications").innerHTML = JSON.parse(localStorage.getItem("dataa"));

function write() {
  data = document.getElementById("content-notifications").innerHTML += "<li>" + "Số ảnh:" + text.value + "," + " " + "Số obj:" + text2.value + "</li>";
  arr.push(text.value);
  localStorage.setItem("dataa", JSON.stringify(data));
  localStorage.setItem("arr", JSON.stringify(arr));
}
// if (data !== null) {
//   for (i = 0; i < arr.length; i++) {
//     document.getElementsByClassName("btnxoa")[i].addEventListener("click", function () {
//       localStorage.removeItem("dataa");
//       localStorage.removeItem("arr");
//     });
//   }
// }
document.getElementsByClassName("deletehistory")[0].addEventListener("click", () => {
  localStorage.removeItem("dataa");
  localStorage.removeItem("arr");
  document.getElementById("content-notifications").innerHTML = "";
});