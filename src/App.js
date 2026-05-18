import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";

function App() {
  let todo = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done1"
    },

    {
      sno: 1,
      title: "Go to the mall",
      desc: "You need to go to the market to get this job done2"
    },

    {
      sno: 1,
      title: "Go to the Hotel",
      desc: "You need to go to the market to get this job3 "
    },
  ]

  return (
    <>
      <Header title="My Todos list" searchBar={true} />
      <Todos todos={todo} />
      <Footer />
    </>
  );
}

export default App;
..