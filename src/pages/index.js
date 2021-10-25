import Head from 'next/head'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Services from '../components/Services';
import AppScreenShots from '../components/AppScreenShots'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Wave3 from '../components/Wave3';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>Torg</title>
      </Head>
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <Header />
        <Banner />
        <div className="mt-24">
          <Services />
        </div>
        <p className="flex flex-grow items-center justify-center text-3xl font-semibold">Our Amazing App</p>
        <p className="flex flex-grow items-center justify-center text-md font-extralight mt-5 pt-2 mb-5 pt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>

        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div className="flex flex-grow justify-evenly mr-5 ml-5 mb-15 pb-10">
            <AppScreenShots img="images/iphone.png" />
          </div>
          <div className="flex flex-grow justify-evenly mr-5 ml-5 mb-15 pb-10">
            <AppScreenShots img="images/iphone.png" />
          </div>
          <div className="flex flex-grow justify-evenly mr-5 ml-5 mb-15 pb-10">
            <AppScreenShots img="images/iphone.png" />
          </div>
          <div className="flex flex-grow justify-evenly mr-5 ml-5 mb-15 pb-10">
            <AppScreenShots img="images/iphone.png" />
          </div>


        </Carousel >
        <Footer />


      </main>

    </div>
  );
}
