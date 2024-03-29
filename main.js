// fetch('resultat.json').then((result) => {
//     let myData = result.json();
//     return myData;
// }).then((myData) => {
//     myData.length = 5;
//     return myData;
// }).then((myData) => {
//     console.log(myData);
//     console.log(myData.results[2].name);
//     console.log(myData.results[2].phone);
//     console.log(myData.results[2].email);
// });

async function get() {
    // fetich kyjib les contact mn api
    const response = await fetch("resultat.json");
//    chnager les ifo from api to json file
    const data = await response.json();
     console.log(data);
//les cartes
    const listcart=document.querySelector(".cards");
    // results= array f api
data.results.forEach(user => {
// creat div with classe="col-md-4" in list cart
    const cart=document.createElement("div");
    cart.classList.add("card");
//    pour boucler les cart aymchi lcart ou ghyht fiha dkchi li jb mn api
    cart.innerHTML=`
    <img src="${user.picture.large}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${user.name}</h5>
      <p class="card-text">${user.phone}</p>
      <p class="card-text">${user.email}</p>
    </div>`

    listcart.appendChild(cart);
});

}
get()
