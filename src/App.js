import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";

function App() {
  return (
    <>
      <Header title="My Todos list" searchBar={true}/>
      <Todos/>
      <Footer/>


    </>
  );
}

export default App;

