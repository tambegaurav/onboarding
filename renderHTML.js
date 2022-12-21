
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
    img.width=imageProps.width
    img.height=imageProps.height
   
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

const getDiv = (divID,divClass,divText) => {
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
const appendElement =(parentElement, children) => {
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
    
    let  card = getDiv(`${props.id}`,'card','')
    
    const imageProps={
        imageSrc: props.imageSrc,
        id: 'cardImg',
        imageClass: 'cardImg',
        width: 300,
        height: 300
    }
    let img=createImage(imageProps)

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
    let btn=createButton(buttonProps)
    
    let name_rating=getDiv('name_rating','cardItem','')
    let cardName=getDiv('name','name',props.description.name)
    let cardRating=getDiv('rating','rating',props.description.rating)
    let nameRatingChildren=[cardName,cardRating]
    appendElement(name_rating,nameRatingChildren)

    let cardDistance=getDiv('distance','cardItem',props.description.distance)
    let cardDate=getDiv('date','date',props.description.date)
    let cardRate=getDiv('rate','rate',props.description.rate)
    
    let cardChildren=[img,btn,name_rating,cardDistance,cardDate,cardRate]
    
    appendElement(card,cardChildren)
    
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
    let cards=[];
    for(let i=0;i<props.nameList.length;i++){
        let cardProps={
            imageSrc:props.imageList[0],
            isFavourite: false,
            id: `card${i+1}`,
            description:{
                name: props.nameList[i],
                rating: props.ratingList[i],
                distance: props.distanceList[i],
                date: props.dateList[0],
                rate: props.rateList[0]
            }
        }
        let card=createCard(cardProps) 
        cards.push(card)
     }
    
    appendElement(document.getElementById('cardContainer'),cards)
}



const cardDetails={
    imageList: ['https://a0.muscache.com/im/pictures/miso/Hosting-19065198/original/ec8a6a9d-45ac-4b78-a605-c41043989ea9.jpeg?im_w=720'],
    nameList: ['season','Beach','Indonesia','America','Bali'],
    ratingList: [4,3,5,6,4],
    distanceList: ['40km','60km','50km','20km','100km'],
    dateList: ['14-20 jan'],
    rateList: ['$10']
}

renderCard(cardDetails)

///////////////////////////////////////////
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

    let div=getDiv('iconContainer','iconContainer','')

    const imageProps={
        imageSrc: props.imageSrc,
        id: `navIcon${props.id}`,
        imageClass: 'navIcon',
        width: 24,
        height: 24
    }
    let img=createImage(imageProps)
    let navName=getDiv(`navName${props.id}`,'navName',props.name)
    appendElement(div,[img,navName])

    appendElement(button,[div])
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

    let navOptions=[]

    for(let i=0;i<props.iconName.length;i++){
        const navBarProps={
            imageSrc: props.iconList[0],
            name: props.iconName[i],
            id: i+1
        }
        let option=createNav(navBarProps)
        navOptions.push(option)
    }
    appendElement(document.getElementById('nav-container'),navOptions)
    
}

const navDetails= {
    iconList: ['https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg'],
    iconName: ['Top','County','Rural','Farms','Trends','OMG','Amazing','Wild','Jungle']
}
renderNavbar(navDetails)




export {createButton, createImage, createCard, appendElement}