import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  className: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ className, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${className} bg-cover bg-no-repeat
    lg:rounded-r-5xl 2xl:rounded-5xl
    `}
    >
      <div
        className="h-full flex flex-col justify-between items-start p-6 lg:px-20 lg:py-10
      border-2 border-blue-300
      "
      >
        <div className="flex flex-row items-center gap-4">
          <div className="p-4 bg-green-50 rounded-full">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-[18px] font-[700] text-white">{title}</h4>
            <p className="font-[14px] text-[400] text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flex flex-row gap-6 items-center">
          <span className="flex flex-row -space-x-4">
            {PEOPLE_URL.map((url) => (
              <Image
                className="rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="font-[700] text-white text-[16px] md:text-[20px]">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

export const Camp = () => {
  return (
    <div
      className="relative border-2 border-green-600 2xl:mx-auto 2xl:max-w-[1440px]
    flex flex-col py-10 lg:py-20 lg:mb-10 xl:mb:20
    "
    >
      <div
        className="hide-scrollbar flex w-full items-start justify-start
       gap-8 h-[340px] lg:h-[400px] xl:h-[640px]
       overflow-x-auto
       "
      >
        <CampSite
          className="bg-[url('/img-1.png')]"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          peopleJoined="50+ Joined"
        />
        <CampSite
          className="bg-[url('/img-2.png')]"
          title="Mountain View Camp"
          subtitle="Somewhere in the Wilderness"
          peopleJoined="50+ Joined"
        />
      </div>



      <div className=" flex items-center justify-end
       px-6 mt-10 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[700px]
        xl:rounded-5xl xl:px-16 xl:py-20 w-full relative rounded-3xl overflow-hidden
        ">
           <h2 className="text-white regular-24 md:regular-32 2xl:regular-64">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="text-white regular-14 mt-5 xl:regular-16">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
          </p>
         <Image 
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </div>
  );
};
