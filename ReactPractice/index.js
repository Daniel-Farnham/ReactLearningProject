
// ### Lesson 1 ### 

/* function MainContent() {
    return (
        <h1>Hello</h1>
    )
    
}

ReactDOM.render(
    <div>
        <NavBar />
        <MainContent />
    </div>, 
    document.getElementById("root")
);  */

// ### Lesson 2 ### 
// Vanilla JS 

/* const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "header"
const textstuff = document.getElementById("root").append(h1); 


// React code 

const page = (
    <div>
    <h1 className="header2"> Hello, React!</h1>
    <p>This is a paragraph</p>
    </div>
)
   
ReactDOM.render(
        page, 
        document.getElementById("root")
);  */

// ### Lesson 3 ### 
// Using react

/*
Create a navbar in JSX: 
    - Use semantic 'nav' element as the parent wrapper
    - Have an h1 element with the name of the website
    - Insert an unordered list for the other nav elements
        - Inside the 'ul', have three 'li's' for 'Pricing', 'About' and 'Contact'
    - Don't worry about styling yet 

*/

import React from "react"

const navbar = (
      <div>
        <h1>Daniels Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>

)

ReactDOM.render(
    navbar,
    document.getElementById('root')
) 

 

