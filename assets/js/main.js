const menuItems = document.querySelectorAll(".menu-item");
const headerLogo = document.getElementById("menu-logo");

/* PADDING HEADER */

function PaddingHeader(){
    let valueType = document.getElementById('padding-format').value;
    const paddingHeader = document.getElementById('padding-header-input').value;

    switch(valueType){
        case 'percentage':
            valueType = '%'
            break;
        case 'pixels':
            valueType = 'px'
            break;
        case 'visual-width':
            valueType = 'vw'
            break;
    }
    menuItems.forEach(item => {
        item.style.paddingRight = Math.floor(paddingHeader/2) + valueType;
        item.style.paddingLeft = Math.floor(paddingHeader/2) + valueType;
    });
}


/* COLOR */

const colorValue = document.getElementById('color-value');
const textColor = document.getElementById('color-value');
const buttonColor = document.getElementById('color-value');
const overlayColor = document.getElementById('color-value');

function ColorPicker(element){
    colorValue.value = element.value;
}

function CopyClipboard(element){
    let selection = document.getSelection();
    let range = document.createRange();
    range.selectNode(element);
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');
}

function ChangeTextColor(element){
    const titles = document.querySelectorAll('.title');

    titles.forEach(item => {
        item.style.color = element.value;
    });

    menuItems.forEach(item => {
        item.style.color = element.value;
    });
}

function ChangeCtaColor(element){
    const ctaBtn = document.getElementById('hero-cta');

    ctaBtn.style.color = element.value;
    ctaBtn.style.borderColor = ctaBtn.style.color;
}

function OverlayColor(element){
    const heroOverlay = document.getElementById('hero-overlay');

    heroOverlay.style.backgroundColor = element.value;   
}


/* IMAGES */


/* DEVICE SELECTOR */

function DeviceSelector(element){
    const deviceSelected = document.querySelectorAll(".btn-device.btn-selected");

    deviceSelected.forEach(item => {
        console.log("item");
        item.classList.remove("btn-selected");
    });

    element.classList.add("btn-selected");

}