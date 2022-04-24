function createMainContentDiv(){
    const contentDiv = document.getElementById('content');
    let mainContentDiv = document.createElement('div');
    contentDiv.appendChild(mainContentDiv)
    mainContentDiv.setAttribute('id','main-content');
    return mainContentDiv;
}

export default createMainContentDiv;