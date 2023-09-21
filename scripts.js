// function updateH1Styling() {
//   const h1 = document.querySelector('[data-something]');
//   h1.style.color = "#f00"
// }

// document.addEventListener('click', updateH1Styling);

function updatePhoto() {
  const photo = document.querySelector('[data-photo]')
  photo.style.rotate = '45deg';
}

// function getInputValue() {
//   const input = document.querySelector('[data-input]')
//   const val = input.value
//   const h2 = document.createElement('h2')
//   h2.textContent = val
//   h2.style.color = "blue"
//   document.body.appendChild(h2)
// }

function addItemToMyList() {
  const inputValue = document.querySelector('[data-text]').value
  const li = document.createElement('li')
  const ul = document.querySelector('[data-ul]') 
  // li.textContent = inputValue
  li.innerHTML = inputValue
  ul.appendChild(li);
}

function addImageToPage() {
  const figure = document.querySelector('figure')
  const value = document.querySelector('[data-what-image]').value
  const image = document.createElement('img');
  image.src = 'https://picsum.photos/id/' + value + '/300'
  figure.appendChild(image)
}

// if(this condition is met) {
//   // do all these
// } else {
//   // do these
// }

const theme = 'light'

if(theme === 'light' ) {
  document.body.style.backgroundColor = 'yellow'
} else {
  document.body.style.backgroundColor = 'black'
}

const imagesId = [1050, 1051, 1052, 1053, 1054, 1055, 1056, 100, 101]

imagesId.forEach(function(id){
  const figure = document.querySelector('[data-figure]')
  const img = document.createElement('img')
  img.src = 'https://picsum.photos/id/' + id + '/100'
  // figure.appendChild(img);
})

// for loop
for(let i = 1; i <= 200 ; i++) {
  const img = document.createElement('img')
  img.src = 'https://picsum.photos/id/' + i + '/100'
  img.style.margin = '3px'
  document.body.appendChild(img);
}