import Header from "../components/header";
import Menu from "../components/navigation/menu";
import TextBlock from "../components/text-block";
import ImageContainer from "../components/image-container";
import Contact from "../components/contact";
import Footer from "../components/footer";
import DesktopLayout from "../components/desktop-layout";
import menuList from "../data/menuList.json";
import Head from "next/head";

export default function App() {
  return (
    <>
      <Head>
        <title>GRACE - Garden Route Aesthetic Centre of Excellence</title>
        <meta
          name="description"
          content="Garden Route Aesthetic Centre of Excellence was formed as a platform to provide for people's aesthetic needs from Plettenberg Bay and the greater Garden Route."
        ></meta>
      </Head>
      <div id="home"></div>
      <Menu classes="sticky w-full" menuList={menuList} />
      <Header />
      <div id="background"></div>
      <DesktopLayout>
        <TextBlock
          heading="Background"
          paragraph="Established in December 2017, Garden Route Aesthetic Centre of Excellence, hereafter referred to as GRACE,  was formed as a platform to provide for people's aesthetic needs from Plettenberg Bay and the greater Garden Route. GRACE is located in the Medico Baia Formosa Building, Muller street, Plettenberg Bay  – within DR J Donald and partners."
        />
        <ImageContainer
          src="/images/grace-2.jpg"
          alt="Young woman with beautiful skin"
          childrenClasses="py-6 bg-lightPeach xl:bg-white/0 xl:-mb-[305px]"
        >
          <p className="text-lg text-darkGrey text-justify xl:relative -z-10 xl:w-[400px] xl:text-xl font-light xl:-translate-y-[648px] xl:translate-x-5 xl:text-left xl:mb-8">
            Aesthetic needs can broadly be defined as those physical features
            which require minor enhancement without the use of traditional
            surgical means. At GRACE we believe in enhancing your natural beauty
            by using the minimal dose of intervention necessary in a safe,
            sterile and discreet manner, with your safety and privacy in mind.
          </p>
        </ImageContainer>
        <div id="ownership"></div>
        <TextBlock
          heading="Ownership"
          paragraph="GRACE is jointly owned and managed by Dr S.J Botha and Dr P Vollgraaff who are registered with the HPCSA and have completed the recognised training in 'Botulinum Toxin A' administration.  Additionally, Dr Vollgraaff is currently studying for his diploma in aesthetic medicine."
        />
        <div className="-translate-y-12" id="services"></div>

        <TextBlock
          heading="Services"
          paragraph="Established modalities include botulinum toxin injections which is an internationally recognised entity and fillers. At GRACE we intend to stay at the forefront of new developments in the field by attending courses and congresses, which translates to a better experience for our clients."
        >
          <div className="md:flex md:gap-16 lg:gap-12">
            <div>
              <h4 className="text-[1.65rem] mb-2">
                Botulinum Toxin Treatments:
              </h4>
              <ul className="list-disc ml-8 text-lg mb-6">
                <li>Frown lines</li>
                <li>Crows feet</li>
                <li>Forehead lines</li>
                <li>Brow lines</li>
                <li>Bunny lines</li>
                <li>Smile lift</li>
                <li>Dimple chin</li>
                <li>Hyperhidrosis</li>
              </ul>
            </div>
            <div className="hidden md:block w-px h-auto bg-grey/50"></div>
            <div>
              <h4 className="text-[1.65rem] mb-2">Fillers:</h4>
              <ul className="list-disc ml-8 text-lg mb-12">
                <li>Lip fillers</li>
                <li>Facial fillers</li>
              </ul>
            </div>
          </div>
        </TextBlock>
        <ImageContainer
          src="/images/grace-3.jpg"
          alt="Woman lying down holding her face"
          imageClasses="mb-12"
        />
        <div className="-translate-y-12" id="pricing"></div>
        <TextBlock
          heading="Pricing"
          paragraph="We are aiming to keep our prices competitive in order to ensure a sustainable service to the local community. We offer free initial assessments with a 2 week follow up consultation. Once an initial assessment has been done including examination, treatment plan and consent the quote will be tailored to fit each patients individual and specific needs."
        >
          <p className="text-lg">
            <a
              className="text-blue"
              href="https://gardenroutebotox.com/index.html#contact"
            >
              Contact
            </a>{" "}
            us today for our full price list.
          </p>
        </TextBlock>
      </DesktopLayout>
      <div className="-translate-y-12" id="contact"></div>
      <Contact />
      <Footer />
    </>
  );
}
