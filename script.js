function saveLocal(event) {
  event.preventDefault();
  let email = document.querySelector("#email_").value;
  let name = document.querySelector("#name_").value;
  let tele = document.querySelector("#tele_").value;
  let obj = {
    Email: email,
    Name: name,
    Tele: tele,
  };
  localStorage.setItem(obj.Email, JSON.stringify(obj));
  showOnScreen(obj);
}

function showOnScreen(obj) {
  let parent = document.querySelector("#table_");
  let child = document.createElement("li");
  let childText = document.createTextNode(
    `${obj.Email}-${obj.Name}-${obj.Tele}`
  );
  let deletebtn = document.createElement("button");
  let deletebtnText = document.createTextNode("delete");
  deletebtn.onclick = () => {
    localStorage.removeItem(obj.Email);
    parent.removeChild(child);
  };
  deletebtn.appendChild(deletebtnText);
  child.appendChild(deletebtn);
  child.appendChild(childText);
  parent.appendChild(child);
}

window.addEventListener("DOMContentLoaded", () => {
  let objKeys = Object.keys(localStorage);

  for (let i = 0; i < objKeys.length; i++) {
    let key = objKeys[i];
    let userString = localStorage[key];
    let userobj = JSON.parse(userString);
    showOnScreen(userobj);
  }
});
