import NextBgImage from "next-bg-image";
import BGImage from "./bg.jpg";
import CountdownTimer from "@/components/timer";
import dayjs from "dayjs";

const WEDDING_DATE = "2024-03-06T00:00:00+05:30";
const COUPLE_NAME = "Teja & Vishnu Priya";

export default function Home() {
  const countdownDate = new Date(WEDDING_DATE).getTime();
  return (
    <main>
      <NextBgImage src={BGImage} className="flex min-h-screen">
        <div className="flex min-h-screen w-full mt-40 flex-col items-center animate-fade-in ">
          <p className="text-2xl text-orange-500 text-center">
            We Are getting married{" "}
          </p>
          <h1 className="text-6xl text-center font-bold mt-4 text-orange-600 hover:text-7xl hover:text-orange-500 hover:animate-pulse hover:cursor-pointer transition duration-800">
            {COUPLE_NAME}
          </h1>
          <time
            dateTime={WEDDING_DATE}
            className="text-3xl font-bold mt-12 text-orange-500"
          >
            {dayjs(WEDDING_DATE).format("dddd, MMMM D, YYYY")}
          </time>
          <div className="flex flex-col items-center mt-12">
            <time dateTime={WEDDING_DATE} className="text-3xl font-bold">
              <CountdownTimer targetDate={countdownDate} />
            </time>
          </div>
        </div>
      </NextBgImage>
    </main>
  );
}
