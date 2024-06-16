import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./Button";

export const Hero = () => {
  return (
    <Container
      className="flex flex-col gap-20 md:gap-28 py-10 
    lg:py-20 pb-32 xl:flex-row "
    >
      <div
        className="bg-[url('/pattern-bg.png')] absolute right-0 top-0
         h-screen w-screen bg-cover bg-center md:-right-28 xl:-top-60"
      />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] xl:top-[-40px] w-10 xl:w-[50px]"
        />
        <h1 className="text-[52px] font-[700] leading-[120%]">
          Putuk Truno Camp Area
        </h1>
        <p className="font-[400] text-[16px] text-gray-30 mt-6 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>

        <div className="flex items-center gap-5 flex-wrap my-11">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="font-[400] lg:font-[700] text-[16px] lg:text-[20px]">
            198k
            <span className="font-[400] lg:font-[700] text-[16px] lg:text-[20px] ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row">
          <Button
            type="button"
            title="Download App"
            variant="border-green-50 bg-green-50 text-white py-5 px-8"
          />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="border-white bg-white px-8 py-3 text-grey-90"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div
          className="px-7 py-8 bg-gray-90 flex flex-col relative z-20 w-[268px] gap-8
                rounded-3xl
            "
        >
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <p className="font-[400] text-[16px] text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="text-white font-[700] text-[20px]">Aguas Calientes</p>
          </div>

          <div className="flex justify-between flex-row">
            <div className="flex flex-col">
              <p className="text-[16px] font-[400] text-gray-20">Distance</p>
              <p className="text-white font-[700] text-[20px]">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[16px] font-[400] text-gray-20">Elevation</p>
              <p className="text-white font-[700] text-[20px]">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
