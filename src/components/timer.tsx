"use client";
import React from "react";
import { useCountdown } from "@/hooks/useCountdown";

const DateTimeDisplay = ({
  value,
  type,
  isDanger,
}: {
  value: number;
  type: string;
  isDanger: boolean;
}) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <div className="value text-base flex row items-end mr-2">
        <p className="text-2xl font-bold mr-1 hover:text-4xl animate-pulse hover:cursor-pointer transition duration-800">
          {value}
        </p>{" "}
        {type === "Days" ? "Days" : type}
      </div>
    </div>
  );
};

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>
        We are Together <span className="text-orange-500">Forever</span>
      </span>
    </div>
  );
};

const ShowCounter = ({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) => {
  return (
    <div className="flex row items-center justify-center">
      <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </div>
  );
};

const CountdownTimer = ({
  targetDate,
}: {
  targetDate: string | number | Date;
}) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  // Wedding date is 06/03/2024
  if (days < -1 && hours < 0 && minutes < 0 && seconds < 0) {
    return <ExpiredNotice />;
  } else if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
    return (
      <div className="text-6xl font-bold text-orange-500">
        It&apos;s weddings day today 🎉
      </div>
    );
  }
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
