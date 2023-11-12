function detail(event) {
  event.preventDefault();
  let price = document.querySelector("#number_").value;
  let dish = document.querySelector("#text_").value;
  let table = document.querySelector("#tableSelect").value;
  let obj = {
    Price: price,
    Dish: dish,
    Table: table,
  };
  axios.post(
    "https://crudcrud.com/api/a70de86b007b44f598c4164f1645019e/DATA",
    obj
  );
  showOnScreen(obj);
}
function showOnScreen(obj) {
  let parent = document.querySelector("#itemList_");
  let child = document.createElement("li");
  let childText = document.createTextNode(
    `${obj.Table} -${obj.Price} -${obj.Dish}`
  );
  let deleteBtn = document.createElement("button");
  let deleteText = document.createTextNode("delete");
  deleteBtn.onclick = () => {
    parent.removeChild(child);
    axios.delete(
      `https://crudcrud.com/api/a70de86b007b44f598c4164f1645019e/DATA/${obj._id}`
    );
  };
  deleteBtn.appendChild(deleteText);
  child.appendChild(deleteBtn);
  child.appendChild(childText);
  parent.appendChild(child);
}
window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/a70de86b007b44f598c4164f1645019e/DATA")
    .then((res) => {
      console.log(res);
      for (let i = 0; i < res.data.length; i++) {
        showOnScreen(res.data[i]);
      }
    })
    .catch((err) => console.log(err));
});
