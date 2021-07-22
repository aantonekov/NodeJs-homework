const btn = document.querySelectorAll('.btn')
const btnDelete = document.querySelectorAll('.btnDel')


let tovar = {
    'gitara': 1,
    'barabani': 1,
    'acustik gitara': 1,
    'saksofon': 1
}

document.addEventListener('click', (ev) =>{
   if(ev.target.classList.contains('btn')){
       plusFunction(ev.target.dataset.id)
   }
   if(ev.target.classList.contains('btnDel')){
    minusFunction(ev.target.dataset.id)
   }
})

const plusFunction = (id) =>{
    tovar[id] ++;
    localStorage.setItem('culc',JSON.stringify(tovar))
    tovar = JSON.parse(tovar);
    // tovar[id] ++;
    rendCard()
}

const minusFunction = (id) =>{

    tovar[id] --;
    localStorage.setItem('culc',JSON.stringify(tovar))
    tovar = JSON.parse(tovar);

    if(tovar[id] -1 === 0){
        deleteFunction(tovar)
    } else{
        tovar[id] --;
        rendCard()
    }
    
}
const deleteFunction = (id) =>{
    delete localStorage.tovar[id]
   
  
    
    delete tovar[id];
    rendCard()
}


const rendCard = ()=> {
 
    console.log(tovar);
}

rendCard()
