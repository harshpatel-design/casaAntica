
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import NewPrice from "./components/NewPrice";
import Categoty from "./components/Categoty";
import Toggle from "./components/Toggle";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <NewPrice />
      <Categoty />
      <Toggle />
    </>
  );
}
