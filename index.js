// two types of dependices dev and normal 
import React from "react";
import ReactDom from "react-dom/client";
//react element is not html element it only creates an object , 
//when rendered it becomes html element that is using reactdom


//this is jsx , html/xml like syntax but not html.

const jsxheading = <p> this is jsx</p>
//parcel(babel) transpiled b4 js engine gets it -> React element  -> html elemnt


const root = ReactDom.createRoot(document.getElementById("root"));



//React components 
// class based components && functional components (FC are new based)


// functional component normal javascript function which  return some jsx 

const HeadingComp = () =>{
    return <h1> hi from ankit</h1>
}
const num = 1000;
// also called component composition (one into another)
const HeadingComp2 = () => (
    <div>
        <h1> hi from anki 2</h1>
        <p>{
            //inside curly braces you can write any js code 
            //u can also use functional component inside it 
            //becuase at the end of the day they arre fucntions of javasctipt
            jsxheading
        }</p>

        <HeadingComp/>
    </div>
);

root.render(<HeadingComp2/>);