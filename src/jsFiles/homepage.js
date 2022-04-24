import createMainContentDiv from "./createMainContentDiv";

function createHomePage() {
    let mainContentDiv = createMainContentDiv();
    changeStylesheet();
    createCompanyNameLogo(mainContentDiv);
    createRestaurantInfo(mainContentDiv);
}

function changeStylesheet() {
    const currLinkRel = document.getElementById('current-stylesheet');
    currLinkRel.href = '/src/cssFiles/homepage.css';
}


function createCompanyNameLogo(mainContentDiv) {
    //for restaurant name
    createRestaurantName(mainContentDiv);
    createCompanyLogo(mainContentDiv);
}

function createRestaurantName(mainContentDiv) {
    let restaurantName = document.createElement('h1');
    let firsthalfName = document.createElement('span');
    let secondhalfName = document.createElement('span');    

    restaurantName.setAttribute('id','restaurant-name');
    firsthalfName.classList.add('first-half-co-name');
    secondhalfName.classList.add('second-half-co-name');

    firsthalfName.innerText = 'Omu';
    secondhalfName.innerText = 'Life';
    restaurantName.appendChild(firsthalfName);
    restaurantName.appendChild(secondhalfName);
    mainContentDiv.appendChild(restaurantName);
}

function createCompanyLogo(mainContentDiv) {
    let companyLogoDiv = document.createElement('div');
    let companyLogoImg = document.createElement('img');
    
    companyLogoDiv.setAttribute('id','company-logo');
    companyLogoImg.src = "/src/images/omurice-clipart.png"
    companyLogoImg.alt = "omurice clipart";

    companyLogoDiv.appendChild(companyLogoImg);
    mainContentDiv.appendChild(companyLogoDiv);
}

function createRestaurantInfo(mainContentDiv) {
    createMissionStatement(mainContentDiv);
    createInterested(mainContentDiv);
    createLocationInfo(mainContentDiv);
    createHoursInfo(mainContentDiv);
}

function createMissionStatement (mainContentDiv) {
    let companyMissionDiv = document.createElement('div')
    let companyMissionHeader = document.createElement('h2');
    let companyMissionParagraph = document.createElement('p');

    companyMissionDiv.setAttribute('id','company-mission'); 
    companyMissionHeader.innerText = 'Company Mission';
    companyMissionDiv.appendChild(companyMissionHeader);
    
    companyMissionParagraph.innerText = 'In Japan, omurice is a staple food, found anywhere from the local mom and pop store to high rise luxury Michellin star ';
    companyMissionParagraph.innerText = companyMissionParagraph.innerText + 'restaurants. In America, omurice treated as something easy and fast -- something that anyone can ';
    companyMissionParagraph.innerText = companyMissionParagraph.innerText + 'make, given the proper ingredients at home. In Los Angeles, the owner GoldBeaver witnessed his '; 
    companyMissionParagraph.innerText = companyMissionParagraph.innerText + 'favorite omurice restaurants go bankrupt because of this preconception. At Omulife, we are trying to ';
    companyMissionParagraph.innerText = companyMissionParagraph.innerText + 'change the perception of omurice in America. We offer irreplicable omurice experience.'
    companyMissionDiv.appendChild(companyMissionParagraph);

    mainContentDiv.appendChild(companyMissionDiv);

}

function createInterested(mainContentDiv) {
    let interestedText = document.createElement('h2');
    let menuBtnContainer = document.createElement('div');
    let menuBtn = document.createElement('button');
    interestedText.innerText = 'Interested? Let\'s get started.'

    mainContentDiv.appendChild(interestedText);
    menuBtnContainer.appendChild(menuBtn);
    menuBtn.setAttribute('id','menu-btn');
    menuBtn.innerText = 'Check Out Our Menu';
    
    mainContentDiv.appendChild(interestedText);   
    mainContentDiv.appendChild(menuBtnContainer);
}

function createLocationInfo(mainContentDiv) {
    let locationInfoDiv = document.createElement('div');
    let locationText = document.createElement('h2');
    let addressText = document.createElement('p');
    locationInfoDiv.setAttribute('id','location-info');
    locationText.innerText = 'Location';
    addressText.innerText = '1600 Pennsylvania Avenue NW, Washington, DC 20500';

    locationInfoDiv.appendChild(locationText);
    locationInfoDiv.appendChild(addressText);
    
    mainContentDiv.appendChild(locationInfoDiv);
}

function createHoursInfo(mainContentDiv) {
    let hoursInfoDiv = document.createElement('div');
    let hoursHeader = document.createElement('h2');
    hoursHeader.innerText = 'Hours';
    const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const openTimesArray = ['Closed', '10am - 1am', '8am - 1am'];

    hoursInfoDiv.setAttribute('id','hours-info');
    hoursInfoDiv.appendChild(hoursHeader);

    for(let i = 0; i < daysArray.length; i++)
    {
        let currHoursDiv = document.createElement('div');
        if(i == 0)
        {
            currHoursDiv.innerText = daysArray[i] + ': ' + openTimesArray[0];
        }
        else if (i > 0 || i < daysArray.length - 1)
        {
            currHoursDiv.innerText = daysArray[i] + ': ' + openTimesArray[1];
        }
        else
        {
            currHoursDiv.innerText = daysArray[i] + ': ' + openTimesArray[2];
        }
        hoursInfoDiv.appendChild(currHoursDiv);
    }
    mainContentDiv.appendChild(hoursInfoDiv);
}

export {createHomePage};