"use client"

import ReservationCard from "./ReservationCard";
import { useOptimistic } from "react";

export default function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDeleteBookings] = useOptimistic(
    bookings,
    (state, bookingId) => state.filter(booking => booking.id !== bookingId)
  );

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard optimisticDeleteBookings={optimisticDeleteBookings} booking={booking} key={booking.id} />
      ))}
    </ul>
  )
}
