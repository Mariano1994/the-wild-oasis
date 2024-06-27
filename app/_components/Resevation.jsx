import React from "react";
import ReservationForm from "./ReservationForm";
import DateSelector from "./DateSelector";
import LoginMessage from "../_components/LoginMessage";
import { getBookedDatesByCabinId, getSettings } from "../_libs/data-service";
import { auth } from "../_libs/auth";

async function Resevation({ cabin }) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const session = await auth();

  return (
    <div className=" grid grid-cols-2 border border-primary-800 min-h-[400px] mt-8">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm user={session.user} cabin={cabin} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Resevation;
