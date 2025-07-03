function renderComponent(element,root){
    // const ele=document.createElement(element.type);
    // ele.innerHTML=element.children;
    // ele.setAttribute('href',element.prop.href);
    // ele.setAttribute('target',element.prop.target)
    // root.appendChild(ele);


    // better approch

    const ele=document.createElement(element.type);
    ele.innerHTML=element.children;

    for (const prop in element.props) {    // if we pass this code in vite or create react then it will not run or render the object becaucse there are some name conventions available for making for the objects.
        if(prop === 'children') continue;
        ele.setAttribute(prop,element.props[prop])
    }
    root.append(ele);
}


const element={
    type:'a',
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    children:'click on me to redirect'
}

const root=document.getElementById('root');

renderComponent(element,root)