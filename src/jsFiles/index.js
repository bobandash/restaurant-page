import {createHomePage} from './homepage';
import {createMenu} from './menu';
import {createContactUsPage} from './contact';

const homeNavBtn = document.getElementById('home-nav-btn');
const menuNavBtn = document.getElementById('menu-nav-btn');
const contactNavBtn = document.getElementById('contact-nav-btn');
const contentDiv = document.getElementById('content');

createHomePage();

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click',function() {
    changeDisplay(menuBtn);
})


function clearContents() {
    contentDiv.removeChild(contentDiv.lastChild);
}

//for nav button functionality
function changeDisplay(currBtn) {
    if(!(currBtn.classList.contains('selected-nav'))){
        let allOtherButtons = [homeNavBtn, menuNavBtn, contactNavBtn];
        
        //delete the button that isn't the curr button
        for(let i = 0; i < allOtherButtons.length; i++)
        {
            if(currBtn == allOtherButtons[i]){
                allOtherButtons.splice(i,1);
                break;
            }
        }

        if(allOtherButtons[0].classList.contains('selected-nav')){
            allOtherButtons[0].classList.remove('selected-nav');
        }
        else if(allOtherButtons[1].classList.contains('selected-nav')){
            allOtherButtons[1].classList.remove('selected-nav');
        }
        
        currBtn.classList.add('selected-nav');
        clearContents();

        //display the appropriate screen
        switch(currBtn){
            case homeNavBtn:
                createHomePage();
                //home page has extra button that displays menu
                const menuBtn = document.getElementById('menu-btn');
                menuBtn.addEventListener('click',function() {
                    changeDisplay(menuNavBtn);
                })
                break;
            case menuNavBtn:
                createMenu();
                break;
            case contactNavBtn:
                createContactUsPage();
                break;
        }
    }
}

homeNavBtn.addEventListener('click', function () {
    changeDisplay(homeNavBtn);
})

menuNavBtn.addEventListener('click', function() {
    changeDisplay(menuNavBtn);
})

contactNavBtn.addEventListener('click', function() {
    changeDisplay(contactNavBtn);
})

