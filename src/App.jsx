import { BrowserRouter as Router } from "react-router-dom"
import { Header, ScrollToTop } from "./components"
import AppRoutes from "./routes/AppRoutes"
function App() {

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div className="flex-grow">
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
