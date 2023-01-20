import Header from "./Header"

/**
Challenge: move the Footer and MainContent components
into their own files.
*/

import Footer from "./Footer"
import MainContent from "./MainContent"

function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))