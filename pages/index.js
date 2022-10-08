import Banner from "../components/Banner"
import Ad1 from "../components/Ad1";
import Meeting from "../components/Meeting";
import NewsEvent from "../components/NewsEvent";
import Ad2 from "../components/Ad2";
import Customer from "../components/Customer";
import Reason from "../components/Reason"
import PartnerCustomer from "../components/PartnerCustomer";
import Product_Special from "../components/Intro_Home_Product_4";
export default function Home() {

  return (
    <div>
      <Banner />
      <Product_Special/>
      <Ad1/>
      <Reason></Reason>
      <Meeting />
      <NewsEvent />
      <Ad2/>
      <Customer />
      <PartnerCustomer />
    </div>

  );
}
