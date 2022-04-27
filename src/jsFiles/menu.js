import createMainContentDiv from "./createMainContentDiv";

//figure out how to create enums later
const foodTypes = ["Main Dishes","Appetizers","Desserts","Drinks"];
const foodTypeHeaderId = ['main-dishes-header','appetizers-header', 'desserts-header', 'drinks-header'];
const foodTypeContainer = ['main-dishes-container', 'appetizers-container', 'desserts-container', 'drinks-container'];

function createMenu(){
    let mainContentDiv = createMainContentDiv();
    changeStylesheet();
    createDOMMenuStructure(mainContentDiv);
    addMenuItems();
}

function changeStylesheet() {
    const currLinkRel = document.getElementById('current-stylesheet');
    currLinkRel.href = '/src/cssFiles/menu.css';
}


//appends all the headers to the appropriate location
function createDOMMenuStructure(mainContentDiv){
    //do the first header menu separately
    let menuHeader = document.createElement('h1');
    menuHeader.innerText = 'Menu';
    mainContentDiv.appendChild(menuHeader);

    //append the header container to store the food items
    for(let i = 0; i < foodTypes.length; i++){
        let currHeader = document.createElement('h2');
        let currContainer = document.createElement('div');

        currHeader.innerText = foodTypes[i];
        currHeader.setAttribute('id', foodTypeHeaderId[i]);
        currContainer.setAttribute('id', foodTypeContainer[i]);
        currContainer.setAttribute('class', 'menu-items-container');

        mainContentDiv.appendChild(currHeader);
        mainContentDiv.appendChild(currContainer);        
    }
}

function addMenuItems() {
    //for all the main dish menu items
    const characterOmurice = new menuItem("Character Omurice","24.99","/src/images/menu/main-dish/character-omurice.webp",foodTypes[0]);
    const classicOmurice = new menuItem("Classic Omurice","14.99","/src/images/menu/main-dish/classic-omurice-set.webp",foodTypes[0]);
    const tornadoOmurice = new menuItem("Tornado Omurice","18.99", "/src/images/menu/main-dish/tornado-omurice.webp",foodTypes[0]);
    const transformingOmurice = new menuItem("Transforming Omurice","19.99","/src/images/menu/main-dish/transforming-omurice.jpg",foodTypes[0]);

    //for all appetizer menu items
    const dollarSalad = new menuItem("Dollar Salad","1.00","/src/images/menu/appetizers/dollar-salad.jpg",foodTypes[1]);
    const misoSoup = new menuItem("Miso Soup","2.00","/src/images/menu/appetizers/miso-soup.webp",foodTypes[1]);

    //for all dessert menu items
    const cheeseCake = new menuItem("Cheese Cake","4.00","/src/images/menu/desserts/cheesecake.jpg",foodTypes[2]);
    const creamPuff = new menuItem("Cream Puffs","4.99","/src/images/menu/desserts/cream-puffs.webp",foodTypes[2]);
    const shortCakes = new menuItem("Strawberry Short Cakes","4.99","/src/images/menu/desserts/strawberry-shortcake.webp",foodTypes[2]);

    //for all drinks
    const calpico = new menuItem("Calpico","2.00","/src/images/menu/drinks/calpico.jpg",foodTypes[3]);
    const cocaCola = new menuItem("Coca Cola","2.00","/src/images/menu/drinks/coca-cola.jpg",foodTypes[3]);
    const icedTea = new menuItem("Iced Tea","3.99","/src/images/menu/drinks/iced-tea.jpg",foodTypes[3]);

    const allItems = [characterOmurice, classicOmurice, tornadoOmurice, transformingOmurice, dollarSalad, misoSoup, cheeseCake, creamPuff, shortCakes, calpico, cocaCola, icedTea];

    addItemsToDOM(allItems);
}

function addItemsToDOM(allItems)
{
    for(let i = 0; i < allItems.length; i++)
    {
        allItems[i].pushMenuItemToDOM();
    }
}


class menuItem {
    constructor(foodName, foodPrice, foodImg, foodType){
        this.foodName = foodName;
        this.foodPrice = foodPrice;
        this.foodImg = foodImg;
        this.foodType = foodType;
    }

    pushMenuItemToDOM(){
        let containerID = '';
        //find out which container to append the item to
        switch (this.foodType) {
            case foodTypes[0]:
                containerID = foodTypeContainer[0];
                break;
            case foodTypes[1]:
                containerID = foodTypeContainer[1];
                break;
            case foodTypes[2]:
                containerID = foodTypeContainer[2];
                break;
            case foodTypes[3]:
                containerID = foodTypeContainer[3];
                break;
        }

        let containerElemToAppend = document.getElementById(containerID);
        let allInfoFigure = document.createElement('figure');
        let imgDivContainer = document.createElement('div');
        let foodImg = document.createElement('img');
        let figcaptionNamePrice = document.createElement('figcaption');
        let foodItemName = document.createElement('div');
        let foodItemPrice = document.createElement('div')


        let altText = this.foodName.toLowerCase();

        imgDivContainer.setAttribute('class','menu-img-container');
        foodImg.setAttribute('src',this.foodImg);
        foodImg.setAttribute('alt',altText);

        let imgNaturalHeight = foodImg.naturalHeight;
        let imgNaturalWidth = foodImg.naturalWidth;

        if(imgNaturalHeight > imgNaturalWidth) {
            foodImg.style.height = '325px';
        }
        else{
            foodImg.style.width = '340px';
        }

        //I don't know why cakes only work half the time
        if(this.foodName == "Cheese Cake" || this.foodName == "Strawberry Short Cakes"){
            foodImg.style.height = '325px'
        }

        foodItemName.setAttribute('class','menu-item-name');
        foodItemPrice.setAttribute('class','menu-item-price');

        foodItemName.innerText = this.foodName;
        foodItemPrice.innerText = '$' + this.foodPrice;

        containerElemToAppend.appendChild(allInfoFigure);
        allInfoFigure.appendChild(imgDivContainer);
        imgDivContainer.appendChild(foodImg);
        
        figcaptionNamePrice.appendChild(foodItemName);
        figcaptionNamePrice.appendChild(foodItemPrice);
        allInfoFigure.appendChild(figcaptionNamePrice);

    }
}



export {createMenu};