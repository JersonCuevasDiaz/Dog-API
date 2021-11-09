import{doc,img_dog,btn2} from './main.js';

doc.addEventListener("click", (e)=>{
    e.preventDefault();
    if (e.target.matches("#btn2")){
        let rand = 'random';
        let dogs = `https://dog.ceo/api/breeds/image/${rand}`;

        fetch(dogs)
            .then(resp => resp.json())
            .then(inf => {
                img_dog.innerHTML = `<img src= ${inf.message}>`;
            });
    } else { return false; }

});










