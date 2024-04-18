const homepage = document.querySelector(".home");
const homebutton = document.querySelector("#homebutton");
const app = document.querySelector(".app");
const Hbutton = document.querySelector("#Hbutton");
const Hakkimizda = document.querySelector(".Hakkimizda");
const content = document.querySelector(".content");
const ybutton = document.querySelector("#ybutton");
const yetkinlikler = document.querySelector(".yetkinlikler");
const iletisim = document.querySelector(".iletisim");
const ibutton = document.querySelector("#ibutton");








homepage.remove();
Hakkimizda.remove();
yetkinlikler.remove();
iletisim.remove();







const homepageadd = () => {

    content.textContent = "";
    content.appendChild(homepage);

}

const hakkimizda = () => {

    content.textContent = "";
    content.appendChild(Hakkimizda);

}





const Yetkinlikler = () => {

    content.textContent = "";
    content.appendChild(yetkinlikler);

}



const iFun = () => {

    content.textContent = "";
    content.appendChild(iletisim);

}






Hbutton.addEventListener("click", hakkimizda);
homebutton.addEventListener("click", homepageadd);
ybutton.addEventListener("click", Yetkinlikler);
ibutton.addEventListener("click", iFun);