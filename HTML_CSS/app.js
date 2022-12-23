import {createCard, appendChildUtil, createButton} from './render.js'
import {addToLocalStorage,getFromLocalStorage} from './localStorageUtils.js'

/**
 * Function to add event for click on remove from favourite
 * @param  id id of Parent Element of card
 */
const handleUnfavourite = (id) => { 
    const favourites= getFromLocalStorage('favourite')
    favourites.forEach(element => {
        if(element.id=id){
            const filteredFavourites = favourites.filter(value => value != element)
            addToLocalStorage('favourite',filteredFavourites) 
            handleFavouriteLabel(`removeFavourite ${id}`)
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
    const _favourites=getFromLocalStorage('favourite')
    _favourites.push(tempProp)
    addToLocalStorage('favourite',_favourites) 
    handleFavouriteLabel(`AddToFav ${parentID}`)
}


/**
 * Function to add event listner on 'add to fav' and 'remove form fav' buttons
 */
const handleEvent = () =>{ 
    const favouriteCardEvent = document.getElementById('cardContainer')
    favouriteCardEvent.addEventListener('click', function(e){
        if(e.target && e.target.className=='btn'){
            addCardToFavourite(e.target.parentElement.id)
        }
        else if(e.target && e.target.className=='removeBtn'){
            handleUnfavourite(e.target.parentElement.id)
        }
    })
}
/**
 * Function to render favourites
 */
const renderFavourite = () =>{
    const cards=[] 
    let cardContainer=document.getElementById('cardContainer')
    cardContainer.innerHTML=''
    const _favourites=getFromLocalStorage('favourite')
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
