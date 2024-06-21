import Image from "next/image";
import MainSection from "@/components/home/MainSection";
import Navbar from "@/components/global-component/navbar/Navbar";
import Footer from "@/components/global-component/footer/Footer";
import ContactUs from "@/components/global-component/contact-us/ContactUs";
export default function Home() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col justify-between">
        <MainSection />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}
