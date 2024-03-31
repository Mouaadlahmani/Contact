// ----------search-bar---------
function search() {
    let filter = document.getElementById('search').value.toUpperCase();
    let cards = document.querySelectorAll('.card');
  
    cards.forEach(card => {
      let title = card.querySelector('h5').textContent.toUpperCase();
      let phone = card.querySelector('p').textContent.toLocaleLowerCase();
      if (title.includes(filter) || phone.includes(filter)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  }

// --------get infos from api ----------
async function info() {
    // get contact from api
    const response = await fetch("resultat.json");
    const data = await response.json();
   //creat cardlist
    const cardlist=document.querySelector(".cards");
   data.results.forEach(user => {
   //creat div with classe="card" in list cart
    const card=document.createElement("div");
    card.classList.add("card");
   //insert this code inside the card div
    card.innerHTML=`
    <img src="${user.picture.large}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${user.name}</h5>
      <p class="card-text">${user.phone}</p>
      <p class="card-text">${user.email}</p>
    </div>`

    cardlist.appendChild(card);
  });
}
info();

// -----------add new-contact-------

function add(){
  var image = document.getElementById('exampleFormControlFile1').value;
  var fname = document.getElementById('first_name').value;
  var lname = document.getElementById('last_name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('inputEmail4').value;

  localStorage.setItem('image', image)
  localStorage.setItem('first_name', fname);
  localStorage.setItem('last_name', lname);
  localStorage.setItem('phone', phone);
  localStorage.setItem('email', email);

};
