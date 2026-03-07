import { HashRouter } from "react-router-dom"
import WebRoutes from "./routes/WebRoutes"
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);
  return (
    <HashRouter>
      <WebRoutes />
    </HashRouter>
  );
}

export default App;
