import Layout from "../baseLayout";
import Carousel from "@/components/organisms/home/carrocel";
import Statistics from "@/components/organisms/home/statistics";

const HomeLayout: React.FC = () => {

  return (
        <Layout>
            <Carousel />
            <Statistics />  
        </Layout>
  );
};

export default HomeLayout;