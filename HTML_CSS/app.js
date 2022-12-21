import {createCard, appendElement, createButton} from './renderHTML.js'

let favourites=[]
/**
 * Function to add event for click on remove from favourite
 * @param  parentElement: Parent Element of card
 */
const addUnfavouriteEvent = (parentElement) => {
    for(let val in favourites){
        
        if(favourites[val].id == parentElement.id){
            favourites.splice(val,1)
            addToLocalStorage('favourite',favourites)
            replaceUnfavouriteButton(parentElement)
        }
    }
}

/**
 * Function to replace button from 'remove from favourite' to 'add to favourite'
 * @param  parentElement : Parent element of card
 */
const replaceUnfavouriteButton =(parentElement) =>{
    let buttonProps={
        buttonID: `AddToFav ${parentElement.id}`,
        buttonClass:`btn`,
        buttonText:`Add To Favourite`
    }
    let favouriteButton=createButton(buttonProps)
    let unfavouriteButton= document.getElementById(`removeFavourite ${parentElement.id}`)
    parentElement.replaceChild(favouriteButton,unfavouriteButton)
}

/**
 * Function to replace button from   'add to favourite' to 'remove from favourite'
 * @param  parentElement : Parent element of card
 */

const replaceFavouriteButton = (parentElement) =>{
    let buttonProps={
        buttonID: `removeFavourite ${parentElement.id}`,
        buttonClass:`removeBtn`,
        buttonText:`Remove From Favourite`
    }
    let unfavouriteButton=createButton(buttonProps)
    let favouriteButton= document.getElementById(`AddToFav ${parentElement.id}`)
    parentElement.replaceChild(unfavouriteButton,favouriteButton)

}

/**
 * Function to add properties of card to favourite list
 * @param 
 * { imageSrc: image url which needs to be rendred 
 *   id: unique card id
 *   isFavourite: is this marked favourite
 *  {
 *    name: name of the card
 *    rating: rating of the card
 *    distance: distance
 *    date: date
 *    rate: rate  
 *  } description: navbar option description
 *  } cardItem 
 */
const addProps = (cardItem) =>{

    let parentElement=cardItem.parentElement
    let children=parentElement.children
    let tempProp = {
        imageSrc: children[0].src,
        isFavourite: true,
        id: parentElement.id,
        description:{
            name: children[2].children[0].textContent,
            rating: children[2].children[1].textContent,
            distance: children[3].textContent,
            date: children[4].textContent,
            rate: children[5].textContent
        }
    }
    
    favourites.push(tempProp)
    addToLocalStorage('favourite',favourites)
    replaceFavouriteButton(parentElement)
    

}

/**
 * Function to add favourite list to local storage
 * @param key : unique key to store the values
 * @param  value : actual value to be stor in local storage
 */
const addToLocalStorage = (key, value) =>{
    localStorage.setItem(key, JSON.stringify(value));
}

/**
 * Function to add event listner on 'add to fav'and 'remove form fav' buttons
 */
const addEvent = () =>{

    let cardList= document.querySelectorAll('.btn')
    cardList.forEach(cardItem =>{
        cardItem.addEventListener('click',function(){
            addProps(cardItem)

        })
    })
    let cardList2=document.querySelectorAll('.removeBtn')
    cardList2.forEach(cardItem =>{
        cardItem.addEventListener('click',function(){
            addUnfavouriteEvent(cardItem.parentElement)
            renderFavourite()
        })
    })
}


/**
 * Function to render favourites
 */
const renderFavourite = () =>{
    let cards=[]
    let cardContainer=document.getElementById('cardContainer')
    cardContainer.innerHTML=''
    
    favourites=JSON.parse(localStorage.getItem('favourite'))
    for(let element in favourites){
        
        let card=createCard(favourites[element])
        
        cards.push(card)
    }
   appendElement(cardContainer,cards)
   addEvent()
}


addEvent()


let favour=document.getElementById('fvt');
favour.addEventListener('click',renderFavourite);


