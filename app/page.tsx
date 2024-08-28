import MainLayout from "./layouts/MainLayout";
import HomePart from "./pages/HomePart";
import './styles/globals.css'

export default function Home() {
  return (
    <MainLayout>
      <HomePart />
    </MainLayout>
  );
}
