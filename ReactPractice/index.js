
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


// Vanilla JS 
const h1 = document.createElement("h1")
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
); 

/*
Create a navbar in JSX: 
    - Use semantic 'nav' element as the parent wrapper
    - Have an h1 element with the name of the website
    - Insert an unordered list for the other nav elements
        - Inside the 'ul', have three 'li's' for 'Pricing', 'About' and 'Contact'
    - Don't worry about styling yet 

*/