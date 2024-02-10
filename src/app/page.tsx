import BGImage from "./bg.jpg";
import CountdownTimer from "@/components/timer";
import dayjs from "dayjs";
import Confetti from "@/components/confetti";
import Link from "next/link";
import NextBgImage from "@/components/nextbg";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

const WEDDING_DATE = "2024-03-06T00:00:00+05:30";
const COUPLE_NAME = "Teja & VishnuPriya";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function Home() {
  const countdownDate = new Date(WEDDING_DATE).getTime();
  return (
    <main>
      <NextBgImage src={BGImage} className="flex min-h-screen">
        <Confetti />
        <div className="flex min-h-screen w-full mt-40 flex-col items-center animate-fade-in text-white">
          <p className="text-2xl  text-center">We Are getting married </p>
          <h1 className="text-6xl text-center font-bold mt-4  hover:text-7xl  hover:animate-pulse hover:cursor-pointer transition duration-800">
            {COUPLE_NAME}
          </h1>
          <time dateTime={WEDDING_DATE} className="text-3xl font-bold mt-12">
            {dayjs(WEDDING_DATE)
              .tz("Asia/Kolkata")
              .format("dddd, MMMM D, YYYY")}
          </time>
          <div className="flex flex-col items-center mt-12">
            <time dateTime={WEDDING_DATE} className="text-3xl font-bold">
              <CountdownTimer targetDate={countdownDate} />
            </time>
          </div>
          {/* 
            Venue:
          */}
          <div className="flex flex-col items-center mt-12 text-center">
            <Link href="https://maps.app.goo.gl/UjYCMPjxSfMsRYEf8">
              <p className="text-base font-bold mt-12">Venue:</p>
              <span className="text-3xl text-decoration-line hover:cursor-pointer">
                J S K Gardens
              </span>
            </Link>
          </div>
        </div>
      </NextBgImage>
    </main>
  );
}
