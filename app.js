

// const fav={}

// let favlist=document.querySelectorAll('.btn');
// favlist.forEach(f => {
//     f.addEventListener('click',function(){
        
//         let parElem=f.parentElement
        
//         fav[parElem.id]=parElem;
           
//         console.log(fav);
        
//         //document.getElementById('AddToFav').remove();
//         let newUnFav=document.createElement('button')
//         newUnFav.className='btn'
//         newUnFav.id=`RemFromFav ${parElem.id}`
//         newUnFav.appendChild(document.createTextNode('Remove From Favourite'))
        
//         let oldFav=document.getElementById(`AddToFav ${parElem.id}`)
        
        
//         parElem.replaceChild(newUnFav,oldFav)
        
//         newUnFav.addEventListener('click',function(){
//         delete fav[parElem.id];
//         console.log(fav)
//         parElem.replaceChild(oldFav,newUnFav)
//         //showFav();
//        })
//     });
    
// });





// //agar id fav me nahi h to not disp;ay
// let fv=document.getElementById('fvt');
// fv.addEventListener('click',showFav);

// function showFav(){
//     console.log('showing favourates');
//     let g=document.getElementById("cards");
//     const nc=g.parentElement
//     g.remove()

//     const newCard=document.createElement('div');
//     newCard.id='cards'
//     newCard.className='cards'
//     for(key in fav){
//         newCard.appendChild(fav[key])
        
//     }

   
//     nc.appendChild(newCard)
    
//     //console.log(newCard)
    
// //     let x=fav[1]
// //    console.log(x)  
    
// }

//-------------------------------




const fav=[]
let first_page_cards

let favlist=document.querySelectorAll('.btn');
favlist.forEach(f => {
    f.addEventListener('click',function(){
        
        let parElem=f.parentElement
        
        fav.push(parElem.id);
        localStorage.setItem('favs', JSON.stringify(fav));
        // localStorage.setItem("fav",fav)
        // console.log(typeof localStorage.getItem("fav"))
        console.log(fav);
        
        //document.getElementById('AddToFav').remove();
        let newUnFav=document.createElement('button')
        newUnFav.className='btn'
        newUnFav.id=`RemFromFav ${parElem.id}`
        newUnFav.appendChild(document.createTextNode('Remove From Favourite'))
        
        let oldFav=document.getElementById(`AddToFav ${parElem.id}`)
        
        
        parElem.replaceChild(newUnFav,oldFav)
        
        newUnFav.addEventListener('click',function(){
      
        //fav=fav.filter(checkPresent(parElem))
        for(let val in fav){
            if(fav[val]==parElem.id){
                fav.splice(val,1)
                localStorage.setItem('favs', JSON.stringify(fav));
            }
        }
        console.log(fav)
        parElem.replaceChild(oldFav,newUnFav)
        
       })
    });
    
});

function checkPresent(Elem){
    return Elem != parElem
}




let fv=document.getElementById('fvt');
fv.addEventListener('click',showFav);

function showFav(){
    console.log('showing favourates');
    let g=document.getElementById("cards");
    const nc=g.parentElement
    //g.remove()
   
    const newCard=document.createElement('div');
    newCard.id='cards'
    newCard.className='cards'
    const favourate= JSON.parse(localStorage.getItem('favs'));
    console.log(favourate)
    for(let key in favourate){
        
        
        newCard.appendChild(document.getElementById(favourate[key]))
        
    }

    g.remove()
    nc.appendChild(newCard)
    
   
    console.log(nc)
}


window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    
  });
//-------------------------------Filters
