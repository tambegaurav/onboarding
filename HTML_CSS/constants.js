const cardDetail={
    imageList: ['https://a0.muscache.com/im/pictures/miso/Hosting-19065198/original/ec8a6a9d-45ac-4b78-a605-c41043989ea9.jpeg?im_w=720'],
    nameList: ['season','Beach','Indonesia','America','Bali'],
    ratingList: [4,3,5,6,4],
    distanceList: ['40km','60km','50km','20km','100km'],
    dateList: ['14-20 jan'],
    rateList: ['$10']
}
const cardDetails=[{imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-19065198/original/ec8a6a9d-45ac-4b78-a605-c41043989ea9.jpeg?im_w=720',
    description:{name: 'season', rating: 4, distance: '40km', date: '14-20 Jan', rate: '$10'},id: '123', isFavourite: false},
    {imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-19065198/original/ec8a6a9d-45ac-4b78-a605-c41043989ea9.jpeg?im_w=720',
    description:{name: 'season', rating: 4, distance: '40km', date: '14-20 Jan', rate: '$10'},id: '124', isFavourite: false},
    {imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-19065198/original/ec8a6a9d-45ac-4b78-a605-c41043989ea9.jpeg?im_w=720',
    description:{name: 'season', rating: 4, distance: '40km', date: '14-20 Jan', rate: '$10'},id: '125', isFavourite: false},
    {imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-19065198/original/ec8a6a9d-45ac-4b78-a605-c41043989ea9.jpeg?im_w=720',
    description:{name: 'season', rating: 4, distance: '40km', date: '14-20 Jan', rate: '$10'},id: '126', isFavourite: false},
    {imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-19065198/original/ec8a6a9d-45ac-4b78-a605-c41043989ea9.jpeg?im_w=720',
    description:{name: 'season', rating: 4, distance: '40km', date: '14-20 Jan', rate: '$10'},id: '127', isFavourite: false},
    {imageSrc: 'https://a0.muscache.com/im/pictures/miso/Hosting-19065198/original/ec8a6a9d-45ac-4b78-a605-c41043989ea9.jpeg?im_w=720',
    description:{name: 'season', rating: 4, distance: '40km', date: '14-20 Jan', rate: '$10'},id: '128', isFavourite: false}]
const navDetails=[{iconUrl:'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg', iconName: 'Top', id:1}, 
    {iconUrl:'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg', iconName: 'County', id:2}, 
    {iconUrl:'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg', iconName: 'Rural', id:3}, 
    {iconUrl:'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg', iconName: 'Farms', id:4}, 
    {iconUrl:'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg', iconName: 'Trends', id:5},
    {iconUrl:'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg', iconName: 'OMG', id:6},
    {iconUrl:'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg', iconName: 'Amazing', id:7},
    {iconUrl:'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg', iconName: 'Wild',  id:8},
    {iconUrl:'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg', iconName: 'Jungle',id:9}]

const cardImageProp ={
    id: 'cardImg',
    class: 'cardImg',
    width: 300,
    height: 300
}
const searchButtonProps=[
    {buttonID:'anywhereButton', buttonClass:'button', buttonText:'anywhere'},
    {buttonID:'anytimeButton', buttonClass:'button', buttonText:'anytime'},
    {buttonID:'guestButton', buttonClass:'button', buttonText:'guest'},
    {buttonID:'search', buttonClass:'button', buttonText:''}
]
const languageButtonPros={
    buttonID: 'languageButton',
    buttonClass: 'button',
    buttonText:''
}
const favouriteButtonPros={
    buttonID: 'fvt',
    buttonClass: 'button',
    buttonText:''
}
export {cardDetails, navDetails, cardImageProp, searchButtonProps, languageButtonPros, favouriteButtonPros}