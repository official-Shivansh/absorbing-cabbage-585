let home=document.getElementById("logo");
home.addEventListener("click", function(){
    window.location.href="index.html"
})

let login=document.getElementById("login");
login.addEventListener("click", function(){
    window.location.href="login.html"
})
let cart=document.getElementById("cart");
cart.addEventListener("click", function(){
    window.location.href="cart.html"
})

let one=document.getElementById("one")
one.addEventListener("mouseenter",function(){
    document.getElementById("nav2data").style.display = "flex"
    document.getElementById("nav2data").style.gap = "70px"
})
one.addEventListener("mouseleave",function(){
    document.getElementById("nav2data").style.display = "none"
})
let two=document.getElementById("two")
two.addEventListener("mouseenter",function(){
    document.getElementById("nav3data").style.display = "flex"
    document.getElementById("nav3data").style.gap = "70px"
})
two.addEventListener("mouseleave",function(){
    document.getElementById("nav3data").style.display = "none"
})
let three=document.getElementById("three")
three.addEventListener("mouseenter",function(){
    document.getElementById("nav4data").style.display = "flex"
    document.getElementById("nav4data").style.gap = "70px"
})
three.addEventListener("mouseleave",function(){
    document.getElementById("nav4data").style.display = "none"
})
let four=document.getElementById("four")
four.addEventListener("mouseenter",function(){
    document.getElementById("nav5data").style.display = "flex"
    document.getElementById("nav5data").style.gap = "70px"
})
four.addEventListener("mouseleave",function(){
    document.getElementById("nav5data").style.display = "none"
})
let five=document.getElementById("five")
five.addEventListener("mouseenter",function(){
    document.getElementById("nav6data").style.display = "flex"
    document.getElementById("nav6data").style.gap = "70px"
})
five.addEventListener("mouseleave",function(){
    document.getElementById("nav6data").style.display = "none"
})
let six=document.getElementById("six")
six.addEventListener("mouseenter",function(){
    document.getElementById("nav7data").style.display = "flex"
    document.getElementById("nav7data").style.gap = "70px"
})
six.addEventListener("mouseleave",function(){
    document.getElementById("nav7data").style.display = "none"
})
let seven=document.getElementById("seven")
seven.addEventListener("mouseenter",function(){
    document.getElementById("nav8data").style.display = "flex"
    document.getElementById("nav8data").style.gap = "70px"
})
seven.addEventListener("mouseleave",function(){
    document.getElementById("nav8data").style.display = "none"
})
let eight=document.getElementById("eight")
eight.addEventListener("mouseenter",function(){
    document.getElementById("nav9data").style.display = "flex"
    document.getElementById("nav9data").style.gap = "70px"
})
eight.addEventListener("mouseleave",function(){
    document.getElementById("nav9data").style.display = "none"
})
let nine=document.getElementById("nine")
nine.addEventListener("mouseenter",function(){
    document.getElementById("nav10data").style.display = "flex"
    document.getElementById("nav10data").style.gap = "70px"
})
nine.addEventListener("mouseleave",function(){
    document.getElementById("nav10data").style.display = "none"
})

// Api sections..................

let container=document.getElementById("apiContainer");
     
let val=fetch("https://fakestoreapi.com/products")
val.then((res)=>{
    return res.json()
})
.then((final)=>{
    displaydata(final)
})
.catch((error)=>{
    console.log(error)
})
let cartArr=JSON.parse(localStorage.getItem("cartdata")) || [];
function displaydata(data){
    data.forEach((element) => {
        let product=document.createElement("div");
        let image=document.createElement("img");
        image.src=element.image;
        let title=document.createElement("h2");
        title.innerText=element.title;
        
        let price=document.createElement("h3");
        price.innerText= "Price -"+element.price
        let button=document.createElement("button");
        button.innerText="Add to cart"
        button.addEventListener("click",function(){
            cartArr.push(element);
            localStorage.setItem("cartdata",JSON.stringify(cartArr))
        })
        product.append(image,title,price,button)
        container.append(product)
    });
}