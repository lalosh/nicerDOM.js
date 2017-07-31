//addElement(<tag name>).innerText(<string>).before(<css selector>);

//example:

//addElement('li').innerText('amazing text').before('ul li#blah');
//addElement('li').innerText('amazing text').after('ul li#blah');
//addElement('li').innerText('amazing text').replaceWith('ul li#blah');

function addElement(type){

    if(!(typeof type === 'string')) return null;

    let element = document.createElement(type);

    return {
        innerText: innerText
    };

    function innerText(someText){

        if(!(typeof someText === 'string')) return null;

        let textElement = document.createTextNode(someText);
        element.appendChild(textElement);

        return {
            before: before,
            after: after,
            replaceWith: replaceWith
        };
    }

    function before(selectorString){
        let query = document.querySelector(selectorString);

        if(query != null)
             query.insertAdjacentHTML('beforebegin', element.outerHTML);

    }

    function after(selectorString){
        let query = document.querySelector(selectorString);

        if(query != null)
            query.insertAdjacentHTML('afterend', element.outerHTML);
    }

    function replaceWith(selectorString){
        let query = document.querySelector(selectorString);

        if(query != null)
            query.parentNode.replaceChild(element, query);

    }
}

//removeElement(<css selector>);

//example:
//removeElement('#myButton');

function removeElement(selectorString){

    if(!(typeof selectorString === 'string')) return null;

    let element = document.querySelector(selectorString);

    if(element != null)
        element.parentNode.removeChild(element);
}


//duplicateElement(<css selector>)

//example
//let newDuplicatedNode = duplicateElement('#some');

function duplicateElement(selectorString){

    let duplicated = document.querySelector(selectorString).cloneNode(true);
    return duplicated;
}


//contain function

//example:
//console.log(isThe('#head').containedInside('#divv'));

function isThe(selectorString){

    let innerElement = document.querySelector(selectorString);

    return {
        containedInside: containedInside
    };

    function containedInside(anotherSelecorString){

        let outerElement = document.querySelector(anotherSelecorString);

        return outerElement.contains(innerElement);
    }
}

//focus('#my_input')
function focus(selectorString){

    document.querySelector('#some_input_id').focus();
}

//isFocused('#my_input')
function isFocused(selectorString){

    return (document.querySelector(selectorString) === document.activeElement);
}

//getFocusedElement()
function getFocuesdElement(){

    return document.activeElement;
}

function getOffsetInfo(selectorString){

    let element = document.querySelector(selectorString);


    console.log("offet Left",element.offsetLeft);
    console.log("offset Top", element.offsetTop);
    console.log("Parent:", element.offsetParent);
}

function getAllPositionsInfo(selectorString){

    let element = document.querySelector(selectorString);
    let info = element.getBoundingClientRect();

    console.log("top", info.top);
    console.log("right", info.right);
    console.log("bottom", info.bottom);
    console.log("left", info.left);
}

function getWidth(selectorString){

    let element = document.querySelector(selectorString);
    let info = element.getBoundingClientRect();
    return info.width;
}

function getHeight(selectorString){

    let element = document.querySelector(selectorString);
    let info = element.getBoundingClientRect();
    return info.height;
}

function getWidthWithoutMargin(selectorString){

  let element = document.querySelector(selectorString);
  return element.clientWidth;
}

function getHeightWithoutMargin(selectorString){

  let element = document.querySelector(selectorString);
  return element.clientHeight;
}

function getElementAtPoint(x,y){
    return (document.elementFromPoint(x,y));
}

//how much tall is the scroll bar
function getScrollHeight(selectorString){
    
    let element = document.querySelector(selectorString);
    return element.scrollHeight;
}

function getScrollWidth(selectorString){
    
    let element = document.querySelector(selectorString);
    return element.scrollWidth;
}


//position of scrolling
//position of current scroll bar
function getScrollPositionFromTop(selectorString){
    
    let element = document.querySelector(selectorString);
    return element.scrollTop;
}

function getScrollPositionFromLeft(selectorString){
    
    let element = document.querySelector(selectorString);
    return element.scrollLeft;
}

function setScrollPositionFromTop(selectorString, newValue){
    
    let element = document.querySelector(selectorString);
    element.scrollTop = newValue;
}

function setScrollPositionFromLeft(selectorString, newValue){
    
    let element = document.querySelector(selectorString);
    element.scrollLeft = newValue;
}

function scrollInto(selectorString, childNumber){

    let element = document.querySelector(selectorString).children[childNumber];
    element.scrollIntoView(true);
}

function addInlineStyle(selectorString){

    if( !(typeof selectorString === "string") ) return null;

    let element = document.querySelector(selectorString);
    let style = element.style;

    return function (property){

        if( !(typeof property === "string") ) return null;
        
        return function (value){
    
            if( !(typeof value === "string") ) return null;
            style.setProperty(property, value);
        }
    }
}

function addInlineStyleString(selectorString){

    if( !(typeof selectorString === "string") ) return null;

    let element = document.querySelector(selectorString);
    let style = element.style;

    return function(cssString){
        style.cssText = cssString;
    }
}
function getInlineStyle(selectorString){

    if( !(typeof selectorString === "string") ) return null;
    
    let element = document.querySelector(selectorString);
    let style = element.style;

    return function(property){

        if( !(typeof property === "string") ) return null;        
        return style.getPropertyValue(property);
    }
}

function removeInlineStyle(selectorString){

    if( !(typeof selectorString === "string") ) return null;
       
    let element = document.querySelector(selectorString);
    let style = element.style;

    return function(property){
        style.removeProperty(property);
    }
}

function removeAllInlineStyle(selectorString){

    if( !(typeof selectorString === "string") ) return null;
       
    let element = document.querySelector(selectorString);
    element.removeAttribute("style");
}

function getStyleValue(selectorString){
    
    if( !(typeof selectorString === "string") ) return null;
       
    let element = document.querySelector(selectorString);
    let style = window.getComputedStyle(element);

    return function(property){

        if( !(typeof property === "string") ) return null;        
        return style[property];
    }
}

//to make a style by setting class or id
function setClass(selectorString){
   
    if( !(typeof selectorString === "string") ) return null;
    let element = document.querySelector(selectorString);

    return function(className){
        element.classList.add(className);
    }
}

function setId(selectorString){

    if( !(typeof selectorString === "string") ) return null;
    let element = document.querySelector(selectorString);
    
    return function(newId){
        element.setAttribute('id',newId);
    }
}