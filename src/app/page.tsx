"use client";
import BGImage from "./bg.jpg";
import CountdownTimer from "@/components/timer";
import dayjs from "dayjs";
import Confetti from "@/components/confetti";
import Link from "next/link";
import NextBgImage, { bgColor } from "@/components/nextbg";
import Lottie from "react-lottie";
import * as couple from "./couple.json";
import * as save from "./save.json";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const WEDDING_DATE = "2024-03-06T00:00:00+05:30";
const COUPLE_NAME = "Teja & Vishnupriya";

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
      <div className="flex min-h-screen w-full mt-20 flex-col items-center animate-fade-in ">
        <div>
          {" "}
          <Image src={"/date.png"} alt="date" width={150} height={150} />
        </div>
        <p className="text-3xl  text-center">We Are getting married </p>
        <h1 className="text-5xl mt-10 md:text-7xl text-center font-bold mt-4 hover:text-7xl  hover:animate-pulse hover:cursor-pointer transition duration-800 font-inter max-w-sm text-red-400	">
          {COUPLE_NAME}
        </h1>
        <p className="text-2xl mt-10 text-center font-inter max-w-sm p-3">
          We are embarking on a lifetime journey of happiness and adventure
          together in marriage. So, make sure you join us on this special day.
        </p>

        <time
          dateTime={WEDDING_DATE}
          className="text-2xl font-bold mt-12 font-inter"
        >
          {dayjs(WEDDING_DATE).tz("Asia/Kolkata").format("ddd - DD MMM YYYY")}
        </time>
        <time className="text-3xl mt-2 font-bold">
          from{" "}
          {dayjs(WEDDING_DATE)
            .add(10, "hours")
            .tz("Asia/Kolkata")
            .format("hh:mm a")}{" "}
        </time>
        <Image
          src={"/couple.png"}
          alt="couple"
          width={150}
          height={150}
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
          <p className="text-base font-bold mt-12 text-decoration-line hover:cursor-pointer font-inter">
            Venue:
          </p>
          <span className="text-3xl text-decoration-line hover:cursor-pointer">
            J S K Gardens
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
        <div className="flex flex-col items-center mt-12 text-center gap-4">
          <Button
            onClick={(e) => {
              e.preventDefault();
              window.open("https://maps.app.goo.gl/UjYCMPjxSfMsRYEf8");
            }}
            className="text-2xl"
          >
            {"Directions ⤴"}
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
