import {createCard, appendChildUtil, createButton} from './render.js'
import {addToLocalStorageUtil,getFromLocalStorageUtil} from './localStorageUtils.js'

const favourites=[]
/**
 * Function to add event for click on remove from favourite
 * @param  parentID id of Parent Element of card
 */

const handleUnfavourite = (parentID) => { 

    favourites.forEach(element => {
        if(element.id=parentID){
            const filteredFavourites = favourites.filter(value => value !== element)
            addToLocalStorageUtil('favourite',filteredFavourites) 
            handleFavouriteLabel(`removeFavourite ${parentID}`)
        }
        
    });
}
/**
 * Function to change the label of favourite and unfavourite button
 * @param  id: id of button that needs to be changed 
 */
const handleFavouriteLabel = (id) =>{
    let button=document.getElementById(id)
    let parentID = button.parentElement.id
    if (button.textContent=='Add To Favourite'){
        button.textContent=`Remove From Favourite`
        button.id=`removeFavourite ${parentID}`
        button.className='removeBtn'
    }
    else{
        button.textContent=`Add To Favourite`
        button.id=`AddToFav ${parentID}`
        button.className='btn'
    }
}
/**
 * Function to add properties of card to favourite list
 * @param parentID: parent ID of card needs to be added
 */
const addCardToFavourite = (parentID) =>{ 
    let parentElement=document.getElementById(parentID)
    let children=parentElement.children
    let tempProp = { //these are very specific , we should always deal with generic property .
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
    addToLocalStorageUtil('favourite',favourites) //you can source the data from local storage and don't expose the global variable, you could make it private variable in localStorage utility function if it's required
    handleFavouriteLabel(`AddToFav ${parentID}`)
}


/**
 * Function to add event listner on 'add to fav' and 'remove form fav' buttons
 */
const handleEvent = () =>{ 
    const favouriteCardEvent= document.querySelectorAll('.btn') //try event delegation instead
    favouriteCardEvent.forEach(cardItem =>{
        cardItem.addEventListener('click',function(){ 
            addCardToFavourite(cardItem.parentElement.id)

        })
    })
    const unfavouriteCardEvent=document.querySelectorAll('.removeBtn') 
    unfavouriteCardEvent.forEach(cardItem =>{
        cardItem.addEventListener('click',function(){
            handleUnfavourite(cardItem.parentElement.id)
            renderFavourite()
        })
    })
}
/**
 * Function to render favourites
 */
const renderFavourite = () =>{
    const cards=[] 
    let cardContainer=document.getElementById('cardContainer')
    cardContainer.innerHTML=''
    const _favourites=getFromLocalStorageUtil('favourite')
    _favourites.forEach(element => {
        let card=createCard(element)
        cards.push(card)
    });
   appendChildUtil(cardContainer,cards)
   handleEvent()
}
handleEvent()
let favour=document.getElementById('fvt');
favour.addEventListener('click',renderFavourite);


