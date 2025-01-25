'use client'
import "bootstrap/dist/css/bootstrap.css";
import "../ex-dio/style.css";
import React, { useEffect, useState } from "react";
import TimeCopy from "./TimeCopy";

function Index_ex() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const indiaTime = new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      hour12: false,
    }).format(new Date());

    const hours = parseInt(indiaTime, 10);

    if (hours >= 15 && hours < 16) {
      setMessage("Code open");
    } else {
      setMessage("No resources available");
    }
  }, []);

  return (
    <div>{message === "Code open" ? <TimeCopy /> : <h1>{message}</h1>}</div>
  );
}

export default Index_ex;
