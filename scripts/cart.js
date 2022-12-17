let displaycartdata=JSON.parse(localStorage.getItem("cartdata")) || [];
let datacontainer =document.getElementById("cartContainer")
function displayDom(displaycartdata){
    datacontainer.innerHTML=null
    displaycartdata.forEach(function(element,index){
        let con=document.createElement("div")
        let img=document.createElement("img")
        img.src=element.image;
       
        let price=document.createElement("p")
        price.innerText="Price -"+ element.price;
        let category=document.createElement("h3")
        category.innerText="Category -"+element.category;
        let button=document.createElement("button");
            button.innerText="Delete"
        button.addEventListener("click",function(){
           deletedata(index)
           
        })
        con.append(img,price,category,button)
        datacontainer.append(con)
    });
    document.getElementById("total").innerText=displaycartdata.length
}
function deletedata(index){
    displaycartdata.splice(index,1);
    localStorage.setItem("cartdata",JSON.stringify(displaycartdata))
    window.location.reload();
}
displayDom(displaycartdata)

