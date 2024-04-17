const homepage = document.querySelector(".home");
const homebutton = document.querySelector("#homebutton");
const app = document.querySelector(".app");
const Hbutton = document.querySelector("#Hbutton");
const Hakkimizda = document.querySelector(".Hakkimizda");
const content = document.querySelector(".content");
const ybutton = document.querySelector("#ybutton");


homepage.remove();
Hakkimizda.remove();


const homepageadd = () => {
    content.textContent = "";
    content.appendChild(homepage);
}

const hakkimizda = () => {
    content.textContent = "";
    content.appendChild(Hakkimizda);

}

Hbutton.addEventListener("click", hakkimizda)
homebutton.addEventListener("click", homepageadd);



const Yetkinlikler = () => {
    content.textContent = "";

}




ybutton.addEventListener("click", Yetkinlikler)