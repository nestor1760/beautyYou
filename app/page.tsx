import AboutPart from "./pages/AboutPart";
import GalleryPart from "./pages/GalleryPart";
import HomePart from "./pages/HomePart";
import PromotionsPart from "./pages/PromotionsPart";
import './styles/globals.css'

export default function Home() {
  return (
    <>
      <HomePart />
      <AboutPart />
      <GalleryPart />
      <PromotionsPart />
    </>
  );
}
