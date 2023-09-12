import "../src/styles/app.css";
import "../src/styles/homepage.css";
import "../src/styles/navBar.css";
import "../src/styles/footer.css";
import "../src/styles/players.css";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/navBar";
import PageContainer from "./components/pagesContainer";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div id="container">
        <PageContainer />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
