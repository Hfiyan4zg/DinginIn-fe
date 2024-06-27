import MainSection from "@/components/home/MainSection";
import Footer from "@/components/global-component/footer/Footer";
import ContactUs from "@/components/global-component/contact-us/ContactUs";
export default function Home() {
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
