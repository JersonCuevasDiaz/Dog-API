import { doc,img_dog,btn2,inf_error,divInf} from "./main.js";

doc.addEventListener("click", (e) => {
  e.preventDefault();
  if(e.target === btn2){
    let rand = "random";
    async function apiAsync() {
      try {
        let API = await fetch(`https://dog.ceo/api/breeds/image/${rand}`);
        let result = await API.json();
        // validation errors
        if (!API.ok || API.status == 404){
          throw { resp: API.ok, status: API.status }}
        divInf.classList.add("image_dog");
        divInf.innerHTML = `<img src = ${result.message}>`;
      } catch (error) {
        inf_error.classList.add("text_errors");
        inf_error.innerHTML = `Upss... ocurrio un problema con la solicitud: Error: ${error.status}`;
      }
    }
    apiAsync();
  }
});
