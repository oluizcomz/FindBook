import { BooksProvider } from "./context/books"
import { AppRoutes } from "./routes"
function App() {

  return (
  <BooksProvider>
    <AppRoutes/>
  </BooksProvider>)
}

export default App
