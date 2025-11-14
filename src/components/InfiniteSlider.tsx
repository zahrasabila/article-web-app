import { InfiniteSlider } from "./ui/infinite-slider";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/a-woman-sits-on-a-rocky-cliff.jpg";
import img11 from "../assets/img11.jpg";
import img10 from "../assets/img10.jpg";
import img9 from "../assets/img9.jpg";
import img8 from "../assets/img8.jpg";
import img7 from "../assets/img7.jpg";
import img12 from "../assets/img12.jpg";
import img6 from "../assets/img6.jpg";

export function InfiniteSliderVertical() {
  return (
    <div className="flex h-[350px] space-x-4 items-center justify-end mr-0">
      <InfiniteSlider direction="vertical">
        <img
          src={img1}
          alt="Dean blunt - Black Metal 2"
          className="aspect-square w-[180px] object-cover rounded-[4px]"
        />
        <img
          src={img2}
          alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
          className="aspect-square w-[180px] object-cover rounded-[4px]"
        />
        <img
          src={img3}
          alt="Yung Lean - Stardust"
          className="aspect-square w-[180px] object-cover rounded-[4px]"
        />
        <img
          src={img4}
          alt="Lana Del Rey - Ultraviolence"
          className="aspect-square w-[180px] object-cover rounded-[4px]"
        />
        <img
          src={img5}
          alt="A$AP Rocky - Tailor Swif"
          className="aspect-square w-[180px] object-cover rounded-[4px]"
        />
        <img
          src={img6}
          alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
          className="aspect-square w-[180px] object-cover rounded-[4px]"
        />
      </InfiniteSlider>
      <InfiniteSlider direction="vertical" reverse>
        <img
          src={img7}
          alt="DAYS BEFORE RODEO - Travis Scott"
          className="aspect-square w-[180px] object-cover rounded-[4px]"
        />
        <img
          src={img8}
          alt="You're in My System - TORYONTHEBEAT"
          className="aspect-square w-[180px] object-cover rounded-[4px]"
        />
        <img
          src={img9}
          alt="You can't tell me - People Make the World Go Round"
          className="aspect-square w-[180px] object-cover rounded-[4px]"
        />
        <img
          src={img10}
          alt="ye - Kanye West"
          className="aspect-square w-[180px] object-cover rounded-[4px]"
        />
        <img
          src={img11}
          alt="Slime Season 3 - Young Thug"
          className="aspect-square w-[180px] object-cover rounded-[4px]"
        />
        <img
          src={img12}
          alt="SWAG - 8ruki"
          className="aspect-square w-[180px] object-cover rounded-[4px]"
        />
      </InfiniteSlider>
    </div>
  );
}
