"use client";
import BGImage from "./bg.jpg";
import CountdownTimer from "@/components/timer";
import dayjs from "dayjs";
import NextBgImage, { bgColor } from "@/components/nextbg";
import Lottie from "react-lottie";
import * as save from "./save.json";
import * as frame from "./frame.json";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const WEDDING_DATE = "2024-03-06T00:00:00+05:30";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function Home() {
  const countdownDate = new Date(WEDDING_DATE).getTime();
  return (
    <NextBgImage
      src={[bgColor("rgb(0 0 0 / 0.1)"), BGImage]}
      className="flex min-h-screen fill"
      size={{
        base: "cover",
      }}
      position={{
        base: "center",
      }}
    >
      <div className="flex min-h-screen w-full mt-20 flex-col items-center animate-fade-in text-gray-700 mb-8">
        <div className="flex flex-col items-center text-cyan-900 relative">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: frame,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={400}
            width={400}
          />
          <p className="text-5xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold animate-pulse hover:cursor-pointer transition duration-5000">
            Save the Date
          </p>
        </div>
        <p className="text-6xl mt-3 mb-5 text-center text-amber-600 ">
          We Are getting married{" "}
        </p>
        <h1 className="text-7xl mt-10 text-center font-bold  hover:animate-pulse hover:cursor-pointer transition duration-800 font-inter max-w-sm text-red-800 leading-8">
          {process.env.NAME_ONE} <br /> <br /> <p className="text-5xl">&</p>{" "}
          <br /> {process.env.NAME_TWO}
        </h1>
        <div className="flex flex-col items-center text-cyan-900	">
          <p className="text-xl mt-10 font-bold font-pop text-center max-w-md p-3 ">
            We are Upgrading to a lifetime partnership of Happiness & Adventure{" "}
            {"\n"} <br />- Always & Forever
          </p>

          <p className="text-xl mt-1 font-pop text-center max-w-sm">
            We take Immense pleasure to Invite you for Wedding Ceremony
            <br />
            &quot;CELEBRATE OUR BIG DAY WITH US!&quot;
          </p>
        </div>
        <time
          dateTime={WEDDING_DATE}
          className="text-5xl font-bold mt-12  text-red-500"
        >
          {dayjs(WEDDING_DATE)
            .tz("Asia/Kolkata")
            .format("dddd - DD  MMM  YYYY ")}
        </time>
        <time className="text-4xl mt-2 font-bold  text-red-500">
          from{" "}
          {dayjs(WEDDING_DATE)
            .add(10, "hours")
            .tz("Asia/Kolkata")
            .format("hh:mm a")}{" "}
        </time>
        <Image
          src={"/couple.png"}
          alt="couple"
          width={200}
          height={200}
          className="animate-pulse hover:cursor-pointer transition duration-800 hover:scale-110 mt-12"
        />

        <div className="flex flex-col items-center mt-12">
          <time dateTime={WEDDING_DATE} className="text-2xl font-bold">
            <CountdownTimer targetDate={countdownDate} />
          </time>
        </div>

        {/* <AddSound /> */}
        {/* 
            Venue:  
          */}
        <div className="flex flex-col items-center mt-8 text-center mb-10">
          <p className="text-xl mt-8 text-decoration-line hover:cursor-pointer font-inter">
            Venue:
          </p>
          <span className="text-4xl mt-2 font-bold text-decoration-line hover:cursor-pointer text-red-600">
            J S K Gardens, Ganganagudem <br />
            Eluru
          </span>
        </div>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: save,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice",
            },
          }}
          height={200}
          width={200}
        />
        <div className="flex flex-col items-center mt-4 text-center gap-4">
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://maps.app.goo.gl/UjYCMPjxSfMsRYEf8");
            }}
            className="text-xl font-pop"
          >
            {"Click me for Directions ⤴"}
          </Button>
          <Image
            src={"/location.png"}
            alt="location"
            width={120}
            height={120}
          />
        </div>
      </div>
    </NextBgImage>
  );
}
