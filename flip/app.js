 document.addEventListener('DOMContentLoaded',() =>{

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

confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});
	 
//check for matches
function checkForMatch(){
	var cards = document.querySelectorAll('img')
	const optionOneId = cardsChosenId[0]
	const optionTwoId = cardsChosenId[1]

	if (cardsChosen[0] === cardsChosen[1] /*& optionOneId != optionTwoId*/) {
		
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
		confetti()
	}else {
		cards[optionOneId].setAttribute('src','images/blank.png')
		cards[optionTwoId].setAttribute('src','images/blank.png')
		//alert('Mal')
		//alert(cardsChosen[0]+' '+cardsChosen[1])
	}

	cardsChosen = []
	cardsChosenId = []
	resultDisplay.textContent = cardsWon.length

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
