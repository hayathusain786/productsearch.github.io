let product= {
    data:[
        {
        ProductName:"Red Polo T-Shirt",
        category:"Topwear",
        Price:"30",
        image:"red-polo.png",
    },
    {
        ProductName:"Purple Polo T-Shirt",
        category:"Topwear",
        Price:"30",
        image:"puple-polo.png",
    },
    {
        ProductName:"Blue Shirt",
        category:"Topwear",
        Price:"40",
        image:"blue-shirt.png",
    },
    {
        ProductName:"Radian Shirt",
        category:"Topwear",
        Price:"45",
        image:"radian-shirt.jfif",
    },
    {
        ProductName:"Maroon Kurta",
        category:"Topwear",
        Price:"50",
        image:"maroon-kurta.png",
    },
    {
        ProductName:"Coloured Kurta",
        category:"Topwear",
        Price:"55",
        image:"colored-kurta.png",
    },
    {
        ProductName:"Cool White Sneaker",
        category:"Bottomwear",
        Price:"60",
        image:"collwhite-shoes.jpg",
    },
    {
        ProductName:"Sport Shoes",
        category:"Bottomwear",
        Price:"65",
        image:"sport-shoes.jpg",
    },
    {
        ProductName:"Simple White Sneaker",
        category:"Bottomwear",
        Price:"60",
        image:"white-sneakers.png",
    },
    {
        ProductName:"Black & White Sneaker",
        category:"Bottomwear",
        Price:"66",
        image:"black&white-sneakers.png",
    },
    {
        ProductName:"LightPink Hand Bag",
        category:"Bag",
        Price:"30",
        image:"lightpink-bag.png",
    },
    {
        ProductName:"Yellow Hand Bag",
        category:"Bag",
        Price:"37",
        image:"yellow-bag.jfif",
    },
    {
        ProductName:"Designed Hand Bag",
        category:"Bag",
        Price:"45",
        image:"designed-bag.png",
    },
    {
        ProductName:"Apple Watch",
        category:"Watch",
        Price:"120",
        image:"apple watch.png",
    },
    {
        ProductName:"Rolex Watch",
        category:"Watch",
        Price:"140",
        image:"rolex-watch.png",
    },
    {
        ProductName:"Black Watch",
        category:"Watch",
        Price:"80",
        image:"black-watch.png",
    },
    ],
};

for(let i of product.data){
    //create card
    let card=document.createElement("div");
    // add card class category initially all cards are hidden
    card.classList.add("card",i.category,"hide");
    // create image div 
    let imgcontainer=document.createElement("div");
    // add class name of image container
    imgcontainer.classList.add("image-container");
    // create a image tag 
    let image=document.createElement("img");
    image.setAttribute("src",i.image);
    imgcontainer.appendChild(image);
    card.appendChild(imgcontainer);
    
    // create a container for product name and price 
   let container=document.createElement("div");
   container.classList.add("container");
   // get product name 
   let name=document.createElement("h5");
   name.classList.add("product-name");
   name.innerText=i.ProductName.toUpperCase();
   container.appendChild(name);
  // get price of products
   let price =document.createElement("h6");
   price.classList.add("price");
   price.innerText="$"+i.Price;
   container.appendChild(price);


   card.appendChild(container);
    document.getElementById("products").appendChild(card);
}

// pass parameter in onclick function same as product category 

function FillterProduct(value)
{
    //button
    let buttons=document.querySelectorAll(".button-style");

    buttons.forEach((button)=>{
        if(value.toUpperCase()==button.innerText.toUpperCase()){
            button.classList.add("active");
        }else{
            button.classList.remove("active");
        }
    })
    //select all cards
    let elements=document.querySelectorAll(".card");
    //loop through all card
    elements.forEach((element)=>{
    //display all cards on 'all' button click
    if(value=="all"){
        element.classList.remove("hide");
        
    } 
    else{
        //check if element contains category class 
        if(element.classList.contains(value)){
            //display element based on category
            element.classList.remove("hide");
        }
        else{
            //hide other elements
            element.classList.add("hide");
        }
    }
    });
}

//search button click 
document.getElementById("search").addEventListener("click",()=>{
    //initializations
    let searchInput=document.getElementById("search-input").value;
    let productsName=document.querySelectorAll(".product-name");
    let cards=document.querySelectorAll(".card");

    //loop through all the productnames
    productsName.forEach((element,index)=>{
        //check if text includes the search Input
        if(element.innerText.includes(searchInput.toUpperCase())){
            //display matching cards
            cards[index].classList.remove("hide");
        }
        else{
            cards[index].classList.add("hide");
        }
    });    
});


// intitally display all the products on all button active 

window.onload= () => {
    FillterProduct("all");
}
