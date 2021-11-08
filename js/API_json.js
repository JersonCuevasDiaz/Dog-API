const d = document;
const img_dog = d.getElementById("image_dog");
const btn1 = d.getElementById("btn2");


d.addEventListener("click", (e)=>{
    e.preventDefault()
    if(e.target.matches("#btn2")){
        let c = ['random']
        let dogs = `https://dog.ceo/api/breeds/image/${c}`;
    
    
        fetch(dogs)
        .then(resp => resp.json())
        .then(inf =>{
            console.log(inf.message)
            console.log(img_dog)
            img_dog.innerHTML = `<img src= ${inf.message}>`
        }) 
    }else{return false}
    
})










