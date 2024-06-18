import Image from "next/image";
import { Container } from "./Container";

export const Guide = () => {
  return (
    <section className="flex items-center flex-col justify-center">
      <Container className="pb-24 w-full">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="font-[400] text-[18px] text-green-50 uppercase -mt-1 mb-2">
          We are here for you
        </p>
        <div className="flex justify-between flex-wrap gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </Container>

      <div
        className="mx-auto max-w-[1440px] w-full
       relative flex items-center justify-center"
      >
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div
          className="absolute bg-white py-8 pl-5 pr-7
        flex gap-3 border rounded-3xl shadow-md md:left-[5%]
        lg:top-20
        "
        >
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex flex-col w-full">
              <div className="flexBetween w-full">
                <p className="text-gray-20 regular-16">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="mt-2 bold-20">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
