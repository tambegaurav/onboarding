import { cardDetails, navDetails, cardImageProp, searchButtonProps, languageButtonPros, favouriteButtonPros} from "./constants.js"

/**
* Function to create Image
* @param
* { imageSrc: image url which need to be rendred
*   imageID: unique ID of image
*   imageClass: image class name
*   width: width of image
*   height: height of image
*   alt: alt text of image
* }
* @return image with given content
*/

const createImage = (imageProps) => {
    let img=document.createElement('img')
    img.src=imageProps.imageSrc
    img.id=imageProps.id
    img.className=imageProps.imageClass
    if((imageProps.width) != undefined || (imageProps.height != undefined)){
        img.width=imageProps.width  
        img.height=imageProps.height 
    }
    return img
}

 /**
 * Function to create button
 * @param {
 *  buttonID: unique id of button
 *  buttonClass: className of button
 * buttonText: Text content of button
 * } buttonProps 
 * @returns button with given props
 */

const createButton = (buttonProps) => {
    let btn=document.createElement('button')
    btn.id=buttonProps.buttonID
    btn.className=buttonProps.buttonClass
    btn.appendChild(document.createTextNode(buttonProps.buttonText))
    return btn
}

/**
 * Function to createDiv
 * @param  divID: unique id of Div
 * @param  divClass: class name of Div
 * @param  divText: Text content of Div
 * @returns div element
 */

const createDiv = (divID,divClass,divText) => { 
    let tempDiv=document.createElement('div')
    tempDiv.id=divID
    tempDiv.className=divClass
    if (divText !='')
    {
        tempDiv.textContent=divText 
    }
    return tempDiv
}

/**
 * 
 * @param  parentElement: Element in which children will be appended 
 * @param  children: List of children to be appended 
 */
const appendChildUtil =(parentElement, children) => { 
    children.forEach(element => {
        parentElement.append(element)
    });
}

/*
 * Function to create card
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
 *  } 
 *  } props
 * @return card with given content
*/


const createCard = (props) => {
    let  card = createDiv(`${props.id}`,'card','')
    
    const imageProps={ 
        imageSrc: props.imageSrc,
        id: cardImageProp.id,
        imageClass: cardImageProp.class,
        width: cardImageProp.width,
        height: cardImageProp.height
    }
    const buttonProps={
        buttonClass: 'btn',
        buttonID:`AddToFav ${props.id}`,
        buttonText: 'Add To Favourite'
    }
    if(props.isFavourite==true){
       buttonProps.buttonClass='removeBtn'
       buttonProps.buttonID=`removeFavourite ${props.id}`
       buttonProps.buttonText='Remove From Favourite'  
    }
    const cardProps={
        img: createImage(imageProps),
        btn: createButton(buttonProps),
        name_rating: createDiv('name_rating','cardItem',''),
        cardDistance: createDiv('distance','cardItem',props.description.distance),
        cardDate: createDiv('date','date',props.description.date),
        cardRate: createDiv('rate','rate',props.description.rate)
    }
    let nameRatingChildren=[createDiv('name','name',props.description.name),createDiv('rating','rating',props.description.rating)]
    appendChildUtil(cardProps.name_rating,nameRatingChildren)
    let cardChildren=[cardProps.img, cardProps.btn, cardProps.name_rating, cardProps.cardDistance, cardProps.cardDate, cardProps.cardRate]
    appendChildUtil(card,cardChildren)
    return card
}


/**
 * Function to render the cards
 * @param 
 * {imageList: list of url of images to be rendered
 *  nameList: list of name to be display on card 
 *  ratingList: list of ratings
 *  distanceList: list of distances
 *  dateList: list of dates
 *  rateList: list of rates
 * } props 
 */
const renderCard = (props) =>{ 
    const cards=[];
    props.forEach(element => {
        let card=createCard(element) 
        cards.push(card)       
    });
    appendChildUtil(document.getElementById('cardContainer'),cards)
}

renderCard(cardDetails)

/**
 * Function to create NavOption
 * @param {
 *  imageSrc: url of navIcon
 *  name: name of navOption
 * id: unique navOption id
 * } props 
 * @returns navOption with given details
 */
const createNav = (props) => {
    const buttonProps = {
        buttonID:'navButton',
        buttonClass:'navButton',
        buttonText:''
    }
    let button=createButton(buttonProps)
    let div=createDiv('iconContainer','iconContainer','')
    const imageProps={
        imageSrc: props.imageSrc,
        id: `navIcon${props.id}`,
        imageClass: 'navIcon',
        width: 24, 
        height: 24
    }
    let img=createImage(imageProps)
    let navName=createDiv(`navName${props.id}`,'navName',props.name)
    appendChildUtil(div,[img,navName])
    appendChildUtil(button,[div])
    return button
}

/**
 * Function to render navBar
 * @param {
 * iconList: list of url of icons
 * iconName: list of name of icons
 * id: uniqe id of navOption
 * } props 
 */
const renderNavbar = (props) => { 
    const navOptions=[]
    props.forEach(element => {
        const navBarProps={
            imageSrc: element.iconUrl,
            name: element.iconName,
            id: element.id
        }
        let option=createNav(navBarProps)
        navOptions.push(option)
    });
    appendChildUtil(document.getElementById('nav-container'),navOptions) 
}
renderNavbar(navDetails)

/**
 * Function to add Header
 */
const renderHeader = () => {
    const headerProps={
        logo: createDiv('logo_box','logo_container','airbnb'),
        searchBox: createDiv('searchBox','searchBar',''),
        sideBox: createDiv('sideBox','sideBar','')
    }

    const searchButton={
        anywhere: createButton(searchButtonProps[0]),
        anytime: createButton(searchButtonProps[1]),
        guest: createButton(searchButtonProps[2]),
        search: createButton(searchButtonProps[3])
    }
    const searchImageProps={ 
        imageSrc: "./AirBnB_files/se.png",
        id: 'searchIcon',
        imageClass: 'searchIcon',
        width: 10,
        height: 10
    }
    let img=createImage(searchImageProps)
    appendChildUtil(searchButton.search,[img])
    appendChildUtil(headerProps.searchBox,[searchButton.anywhere,searchButton.anytime,searchButton.guest,searchButton.search])
    const sideButtons={
        home: createDiv('home','home','Airbnb your home'),
        language: createDiv('language','language',''),
        favourite: createDiv('favourite','favourite','')
    }
    const languageImageProps={
        imageSrc: "./AirBnB_files/browser.png",
        id: 'languageIcon',
        imageClass: 'languageIcon',
        width: 20,
        height: 20
    }
    let languageButton=createButton(languageButtonPros)
    appendChildUtil(languageButton,[createImage(languageImageProps)])
    appendChildUtil(sideButtons.language,[languageButton])
    const favouriteImageProps={
        imageSrc: "./AirBnB_files/favorites-icon-png-29.png",
        id: 'favIcon',
        imageClass: 'favIcon',
        width: 20,
        height: 20
    }
    let favouriteButton=createButton(favouriteButtonPros)
    appendChildUtil(favouriteButton,[createImage(favouriteImageProps)])
    appendChildUtil(sideButtons.favourite,[favouriteButton])
    appendChildUtil(headerProps.sideBox,[sideButtons.home,sideButtons.language,sideButtons.favourite])
    const header=document.getElementById('header_container')
    appendChildUtil(header,[headerProps.logo,headerProps.searchBox,headerProps.sideBox])
}
renderHeader();

export {createButton, createImage, createCard, appendChildUtil}