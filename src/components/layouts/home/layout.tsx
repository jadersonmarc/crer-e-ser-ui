import Layout from "../baseLayout";
import Carousel from "@/components/organisms/content/home/carrocel";
const HomeLayout: React.FC = () => {

  return (
    <div>
        <Layout>
            <Carousel />
        </Layout>
    </div>
  );
};

export default HomeLayout;