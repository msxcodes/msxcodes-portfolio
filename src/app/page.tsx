import ContentWrapper from "@/components/common/content-wrapper";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HomePage from "@/pages/home-page";

export default function Home() {
  return (
    <main className="">
      <Header />
      <ContentWrapper>
        <HomePage />
      </ContentWrapper>
      <Footer />
    </main>
  );
}
