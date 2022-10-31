
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
ReactDOM.render(<h1 className="header2"> Hello, React!</h1>, document.getElementById("root")); 