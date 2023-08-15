const elCards = document.querySelector(".cards")

const elInputTitle = document.querySelector(".input-title");
const elInputPrice = document.querySelector(".input-price");
const elInputDescription = document.querySelector(".input-description");
const elInputCategory = document.querySelector(".input-category");
const elInputImage = document.querySelector(".input-image");
const elInputRating = document.querySelector(".input-rating");
const elForm = document.querySelector("#form");

function  renderPosts(array,parent){
parent.textcontent = ""
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  const newCard = document.createElement("div")
  newCard.className = "card"
  newCard.style.width = "18rem",

  newCard.innerHTML=`
  <div class="card" style="width: 18rem;">
  <img src="${element.image}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
  <p class="card-text">${element. description}</p>
  <p class="card-text">$${element. price}</p>
  <a href="#" data-id="${element.id}" id="delete-btn" class=" btn btn-danger">Delete</a>
  </div> 
  `
parent.appendChild(newCard)
}

}

  




elCards.addEventListener("click", function ( evt ) {
  
if(evt.target.id === "delete-btn"){

const id = Number(evt.target.dataset.id)
const newArray = [ ];
for (let i = 0; i < output.length; i++) {
  const outputs = output[i];
  if (outputs.id !== id) {
    newArray.push(outputs);
  }
  
}
output = newArray

renderPosts(output,elCards)

}
})

renderPosts(output,elCards)



elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (elInputTitle.value !== "") {
    const newBox = {
      id: card.length === 0 ? 0 : card[card.length - 1].id + 1,
      title: elInputTitle.value,
      price: elInputPrice.value,
      description: elInputDescription.value,
      category: elInputCategory.value,
      image: elInputImage.value,
      rating: elInputRating.value,
    };
    card.push(newBox);
    renderTodos(card, elCards);

    elForm.reset();
  } else {
    alert("Error");
  }
  elcards.appendChild(newCard)
});