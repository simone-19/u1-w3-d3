const cards = document.getElementById("formid");
cards.addEventListener("submit", function (e) {
  e.preventDefault();

  const newname = document.getElementById("text");
  const newlastname = document.getElementById("text1");
  console.log(newname.value, newlastname.value);
  alert("DATI INVIATI");
  const newcard = document.createElement("div");

  const newapp = document.getElementById("append");
  newcard.innerHTML = `
    <p>${newname.value} ${newlastname.value}</p>`;

  newapp.appendChild(newcard);

  const cancard = (e) => {
    const newdel = document.getElementById("butdelete");
    e.newname = " ";
    e.newlastname = " ";
    console.log("eliminato", newdel);
  };
});
