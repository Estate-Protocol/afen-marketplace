import React from "react";
import ReactMoment from "react-moment";

export interface DateTimeProps {
  date: Date | string;
}

export default function DateTime({ date }: DateTimeProps) {
  return (
    <ReactMoment fromNow>
      {date}
    </ReactMoment>
  );
}
