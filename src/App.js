import "./components/css/style.css";
import Header from "./components/Header";
import Routes1 from "./components/Routes1";
import { AuthProvider } from "./AuthProvider";
import { AccessibilityProvider } from "./components/AccessibilityContext";
import Footer from "./components/Footer";

function App() {
  return (
    <AccessibilityProvider>
      <AuthProvider>
        <Header />
        <Routes1 />
        <Footer />
      </AuthProvider>
    </AccessibilityProvider>
  );
}
export default App;
