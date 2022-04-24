import createMainContentDiv from "./createMainContentDiv";

function createContactUsPage() {
    let mainContentDiv = createMainContentDiv();
    changeStylesheet();
    createContactText(mainContentDiv);
    createForm(mainContentDiv);
}

function changeStylesheet() {
    const currLinkRel = document.getElementById('current-stylesheet');
    currLinkRel.href = '/src/cssFiles/contact.css';
}

function createContactText(mainContentDiv) {
    let contactUsHeader = document.createElement('h1');
    let alternativeContactText = document.createElement('h2');
    contactUsHeader.innerText = 'Contact Us';
    alternativeContactText.innerText = 'For To-Go and Delivery orders, please call 888-888-8888. If we do not pick up, please email us at goldbeaver@omulife.com or leave a message in the form.'

    mainContentDiv.appendChild(contactUsHeader);
    mainContentDiv.appendChild(alternativeContactText);
}

function createForm(mainContentDiv) {
    let contactForm = document.createElement('form');
    const labels = ['name','phoneNumber','email','message'];

    contactForm.setAttribute('id','contact-form');

    //for the appending fields
    for(let i = 0; i < labels.length; i++){
        let currLabelElem = document.createElement('label');
        let currLabelText = labels[i];
        
        if(labels[i] == 'phoneNumber'){
            currLabelElem.innerText = 'Phone Number';
        }
        else
        {
            currLabelElem.innerText = currLabelText.charAt(0).toUpperCase() + currLabelText.substring(1).toLowerCase();
        }
        currLabelElem.setAttribute('for', labels[i]);
        currLabelElem.setAttribute('name', labels[i]);

        let currInputElem = document.createElement('input');

        //depending on the label, create the appropriate input
        if(labels[i] == 'email'){
            currInputElem.setAttribute('type','email');
            currInputElem.setAttribute('name', labels[i]);
        }
        else if(labels[i] == 'message'){
            currInputElem = document.createElement('textarea');
            currInputElem.setAttribute('id','message');
        }
        else {
            currInputElem.setAttribute('type','text');
            currInputElem.setAttribute('name',labels[i]);
        }
        currInputElem.setAttribute('id',labels[i]);
        contactForm.appendChild(currLabelElem);
        contactForm.appendChild(currInputElem);
    }

    //for appending the submit button
    let submitFormBtn = document.createElement('button');
    submitFormBtn.setAttribute('type','submit');
    submitFormBtn.setAttribute('id','submit-form-btn');
    submitFormBtn.innerText = 'Submit';
    contactForm.appendChild(submitFormBtn);

    mainContentDiv.appendChild(contactForm);  
}

export {createContactUsPage};

