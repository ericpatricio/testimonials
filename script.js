// Local data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web designer",
    img: "https://randomuser.me/api/portraits/med/women/75.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, deleniti est! Fugit quia beatae praesentium, temporibus accusantium ipsa ad vero ex. Quisquam odio esse, sint beatae exercitationem porro repellat quaerat?",
  },
  {
    id: 2,
    name: "rafael thompson",
    job: "web developer",
    img: "https://randomuser.me/api/portraits/med/men/75.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, deleniti est! Fugit quia beatae praesentium, temporibus accusantium ipsa ad vero ex. Quisquam odio esse, sint beatae exercitationem porro repellat quaerat?",
  },
  {
    id: 3,
    name: "javier rodriguez",
    job: "intern",
    img: "https://randomuser.me/api/portraits/med/men/85.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, deleniti est! Fugit quia beatae praesentium, temporibus accusantium ipsa ad vero ex. Quisquam odio esse, sint beatae exercitationem porro repellat quaerat?",
  },

];

// DOM variables
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Set item
let currentItem = 0;


// Event listener

// Load first item
window.addEventListener('DOMContentLoaded', function() {
  showPerson(currentItem);
});

// Show next person
nextBtn.addEventListener('click', function() {
  currentItem++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }  
  showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener('click', function() {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

// Show random
randomBtn.addEventListener('click', function() {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);
  showPerson(currentItem);
})

// Function

// Show person
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}
