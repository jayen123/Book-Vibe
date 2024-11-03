import BannerImg from "../../assets/Banner.png";
import Button from "../Button/Button";
export default function Banner() {
  return (
    <div className="hero bg-base-200 min-h-screen rounded-3xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={BannerImg} />
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
            Books to freshen up <br className="hidden lg:block" /> your bookshelf
          </h1>
          <Button isPrimary={true}>View The List</Button>
        </div>
      </div>
    </div>
  );
}
