import getCurrentUser from "./actions/getCurrentUser";
import getFavoriteListings from "./actions/getFavoriteListings";
import BottomHero from "./components/home/BottomHero";
import FavoritesSlider from "./components/home/FavroitesSlider";
import Hero from "./components/home/Hero";
import SliderCards from "./components/home/SliderCards";
import TopSection from "./components/home/TopSection";

const Home = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  return (
    <main className="">
      <Hero />
      <TopSection />
      <SliderCards />
      {listings.length !== 0 && (
        <FavoritesSlider listings={listings} currentUser={currentUser} />
      )}
      <BottomHero currentUser={currentUser} />
    </main>
  );
};

export default Home;
