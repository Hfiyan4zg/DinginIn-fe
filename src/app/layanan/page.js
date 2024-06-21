import Footer from "@/components/global-component/footer/Footer";
import ContactUs from "@/components/global-component/contact-us/ContactUs";
import LayananSection from "@/components/layanan/LayananSection";
export default function Layanan() {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between">
        <LayananSection />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}
