import BookList from "./components/booklist";
import Navbar from "./components/Navbar";
import ThemeContextProvider from "./contexts/ThemeContext";
// context import
 
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
         <Navbar/>
        <BookList/>
       </ThemeContextProvider>
    </div>
  );
}

export default App;
