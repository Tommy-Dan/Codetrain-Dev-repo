import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Plans from "./Components/Plans";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar about="ABOUT US" />
      <Hero />
      <Plans name="PLANS" />
      <Footer />
    </>
  );
}
export default App;
