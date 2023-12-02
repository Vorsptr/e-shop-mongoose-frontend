import CarouselItems from "../../components/carousel/Carousel";
import FixedComponent from "../../components/fixedCards/FixedComponent";
import Periferia from "../../components/periferia/Periferia";
import Separator from "../../components/separator/Separator";
import Category from "../Category/Category";

export default function HomePage() {
  return (
    <>
      <div className="">
        <CarouselItems />
        <FixedComponent />
        <Separator />
        <Category />
        <Separator />
        <Periferia />
        <Separator />
      </div>
    </>
  );
}
