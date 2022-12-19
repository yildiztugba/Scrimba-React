// ReactDOM.render(<h1>hello</h1>,document.getElementById("root"));


//CHALLENGE #1
/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/

//ReactDOM.render(<ul><li>one</li><li>two</li></ul>, document.getElementById("root"));






//CHALLENGE #2
// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

/*
function MainContent () {
    return <h1>I'm learning React!</h1>
} 

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
        
    </div>,
    document.getElementById("root")
)
*/

    // CHALLANGE #3"
    /*Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))