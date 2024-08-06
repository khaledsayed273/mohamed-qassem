import About from "@/components/Home/About";
import Header from "@/components/Home/Header";
import Sections from "@/components/Home/Sections";
import SaleSlider from "@/components/slider/SaleSlider";
import img1 from "../../public/images/sale/1.png"
import Link from "next/link";
import Image from "next/image";
import LatestProducts from "@/components/Home/LatesProducts";
import Clients from "@/components/Home/Clients";
import Contact from "@/components/Home/Contact";


const getOffers = async () => {
  const baseUrl = process.env.baseUrl
  try {
    const req = await fetch(`${baseUrl}/offers`, { next: { revalidate: 3600 } })

  } catch (e) {
    return e
  }

}

export default async function Home() {

  const images = [
    {
      image: img1
    },
    {
      image: img1
    },
  ]


  return (
    <main className="bg-[#FAF7EF]">
      <Header />
      <About />
      <Sections />
      <SaleSlider>
        {images.map((item, index) => (
          <Link className="relative h-[250px] sm:h-[300px] md:h-[450px]" key={index} href={"/"}>
            <Image  src={item.image} fill alt="" />
          </Link>
        ))}
      </SaleSlider>
      <LatestProducts />
      <Clients />
      <Contact />

    </main>
  );
}
