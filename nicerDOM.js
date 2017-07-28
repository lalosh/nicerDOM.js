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