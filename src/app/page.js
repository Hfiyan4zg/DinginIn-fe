import Image from "next/image";
import MainSection from "@/components/home/MainSection";
import Navbar from "@/components/global-component/navbar/Navbar";
export default function Home() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <div className="flex bg-black-500 min-h-screen flex-col items-center justify-between p-24">
        <MainSection />
      </div>
    </div>
  );
}
