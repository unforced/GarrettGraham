
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Introduction from "@/components/home/Introduction";
import ServiceOverview from "@/components/home/ServiceOverview";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Introduction />
      <ServiceOverview />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
};

export default Index;
