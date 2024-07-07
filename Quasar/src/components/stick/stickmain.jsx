import { Carousel } from "@material-tailwind/react";
import Stick from "./Stick";
import './stick.css'

export function CarouselDefault() {
  return (
    <Carousel className="rounded-md carousel  ">

        <Stick />
        <Stick />
        <Stick />
        <Stick />

    </Carousel>
  );
}
