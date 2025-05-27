import Header from "./components/Header";
import Glance from "./components/Glance";
import MiniGallery from "./components/MiniGallery";



const Home = () => {
  return (
    <div className="not-first:px-4">
      <Header/>
      <Glance/>
      <MiniGallery/>
    </div>
  );
};

export default Home;
