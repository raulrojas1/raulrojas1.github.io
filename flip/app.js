 document.addEventListener('DOMContentLoaded',() =>{

// add your code here!
// see https://www.skypack.dev/view/confetti for README


//car options
// chaged to var instead of const to be able of randomize 
const cardArray = [

	{
		name: 'fries',
		img: 'images/fries.png'
	},
	{
		name: 'fries',
		img: 'images/fries.png'
	},

	{
		name: 'hotdog',
		img: 'images/hotdog.png'
	},
	{
		name: 'hotdog',
		img: 'images/hotdog.png'
	},

	{
		name: 'ice-cream',
		img: 'images/ice-cream.png'
	},
	{
		name: 'ice-cream',
		img: 'images/ice-cream.png'
	},

	{
		name: 'cheeseburger',
		img: 'images/cheeseburger.png'
	},
	{
		name: 'cheeseburger',
		img: 'images/cheeseburger.png'
	},

	{
		name: 'milkshake',
		img: 'images/milkshake.png'
	},
	{
		name: 'milkshake',
		img: 'images/milkshake.png'
	},

	{
		name: 'pizza',
		img: 'images/pizza.png'
	},
	{
		name: 'pizza',
		img: 'images/pizza.png'

	},

	{
		name: 'fruit',
		img: 'images/fruit.png'
	},
	{
		name: 'fruit',
		img: 'images/fruit.png'
	},

	{
		name: 'pear',
		img: 'images/pear.png'
	},
	{
		name: 'pear',
		img: 'images/pear.png'

	},

	{
		name: 'avocato',
		img: 'images/avocato.png'
	},
	{
		name: 'avocato',
		img: 'images/avocato.png'
	},

	{
		name: 'cookie',
		img: 'images/cookie.png'
	},
	{
		name: 'cookie',
		img: 'images/cookie.png'

	}
 
]

// randomize the array of images
cardArray.sort(() => Math.random() - 0.5) 
//cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')


let cardsChosen = []
let cardsChosenId = []
let cardsWon = []
//create your board
function createBoard(){
	

	for (let i = 0; i < cardArray.length; i++) {
		var card = document.createElement('img')
		card.setAttribute('src','images/blank.png')
		card.setAttribute('data-id',i)
		card.style.userSelect = "none"
		if (cardsChosen.length <= 2 ) {
			card.addEventListener('click',flipCard)
		}
		grid.append(card)
	}
}

function WinAnimation(){
	//Fireworks confetti
	//win animation
		var duration = 15 * 1000;
		var animationEnd = Date.now() + duration;
		var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

		function randomInRange(min, max) {
		  return Math.random() * (max - min) + min;
		}
		var interval = setInterval(function() {
		var timeLeft = animationEnd - Date.now();

		  if (timeLeft <= 0) {
		    return clearInterval(interval);
		  }

		  var particleCount = 300 * (timeLeft / duration);
		  // since particles fall down, start a bit higher than random
		  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
		  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
		}, 250)
}


 
//check for matches
function checkForMatch(){
	var cards = document.querySelectorAll('img')
	const optionOneId = cardsChosenId[0]
	const optionTwoId = cardsChosenId[1]

	if (cardsChosen[0] === cardsChosen[1] ) {
		
		//cards[optionOneId].setAttribute('src','images/white.png')
		cards[optionOneId].style.opacity = '0'
		cards[optionOneId].removeEventListener("click", flipCard)
		cards[optionOneId].style.pointerEvents = 'none'
		cards[optionOneId].style.userSelect = "none"

		//cards[optionTwoId].setAttribute('src','images/white.png')
		cards[optionTwoId].style.opacity = '0'
		cards[optionTwoId].removeEventListener("click", flipCard)
		cards[optionTwoId].style.pointerEvents = 'none'
		cards[optionOneId].style.userSelect = "none"

		cardsWon.push(cardsChosen)
		if (cardsWon.length>=10) {
			resultDisplay.textContent = "10 Ganasteee!!!"
			WinAnimation()
		} else{
		//Normal Confetti
		resultDisplay.textContent = cardsWon.length
			confetti({
			  particleCount: 1000,
			  startVelocity: 30,
			  spread: 360,
			  origin: {
			    x: Math.random(),
			    // since they fall down, start a bit higher than random
			    y: Math.random() - 0.2
			  }
			})
		}

		
	}else {
		cards[optionOneId].setAttribute('src','images/blank.png')
		cards[optionTwoId].setAttribute('src','images/blank.png')
	}

	cardsChosen = []
	cardsChosenId = []

}


//create flip
function flipCard(){
	    if (cardsChosen.length <= 1) {
	        var cardId = this.getAttribute('data-id')
	        cardsChosen.push(cardArray[cardId].name)
	        cardsChosenId.push(cardId)
	        this.setAttribute('src', cardArray[cardId].img)
	    }

        if (cardsChosen.length === 2 ) {
        	if (cardsChosenId[0] != cardsChosenId[1]) {
        		setTimeout(checkForMatch, 300)
        	}
        	else {
        		cardsChosen.pop()
        		cardsChosenId.pop()
        	}
        }
    }







createBoard()









})
