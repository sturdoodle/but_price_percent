"use client";
import React, { useState } from "react";
import { generateTimeIntervals } from "./generate_time";

function TimeCopy() {
  const [jsonInput, setJsonInput] = useState("");
  const [InputStartTime, setInputStartTime] = useState("");
  const [InputStartDate, setInputStartDate] = useState("");
  const [finalResult, setfinalResult] = useState([]);

  // let startTime = "15:27"; // Starting time
  // let starteDate = "2025-01-02"; // starte Date
  // let timeIntervals = generateTimeIntervals(starteDate, startTime);
  let timeIntervals = generateTimeIntervals(InputStartDate, InputStartTime);

  const handleChange = (e) => {
    // console.log(e)
    if (e.target.name === "inputJson") {
      setJsonInput(e.target.value);
    } else if (e.target.name === "inputStartTime") {
      setInputStartTime(e.target.value);
    } else if (e.target.name === "inputStartDate") {
      setInputStartDate(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // const parsedData = JSON.parse(jsonInput); // Parse the JSON string
      // console.log(parsedData); // Log the parsed JSON object to the console
      processJsonData_time();
    } catch (error) {
      console.error("Invalid JSON:", error); // Handle JSON parsing errors
    }
  };
  const handleclear = (e) => {
    e.preventDefault();
    setJsonInput("");
    setInputStartTime("");
    setfinalResult([])
  };

  // let finalResult = [];

  function processJsonData_time() {
    let TempfinalResult = [];
    let tempraw = JSON.parse(jsonInput);
    tempraw.candles.forEach((candle) => {
      let date = new Date(candle[0]);

      const parsedDate = new Date(String(date));

      const formattedDate = parsedDate.toISOString().split("T")[0];

      if (formattedDate === InputStartDate) {
        let hours = String(date.getHours()).padStart(2, "0"); // Get local hours in 2-digit format
        let minutes = String(date.getMinutes()).padStart(2, "0"); // Get local minutes in 2-digit format

        let formattedTime = `${hours}:${minutes}`;
        if (timeIntervals.includes(formattedTime)) {
          TempfinalResult.push([formattedTime, candle[4]]);
        }
        //  console.log("The dates match.");
      } else {
        // console.log("The dates do not match.");
      }
      setfinalResult(TempfinalResult);
    });
  }

  // console.log(finalResult);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Enter Start Date:
            <input
              type="date"
              value={InputStartDate}
              name="inputStartDate"
              onChange={handleChange}
              placeholder="2024-01-01"
            />
          </label>
        </div>
        <div>
          <p>Paste your JSON data here:</p>
          <textarea
            rows="6"
            cols="40"
            name="inputJson"
            value={jsonInput}
            onChange={handleChange}
            placeholder='{"status": "success", "data": {"candles": [[...]]}}'
          />
        </div>

        <div>
          <label>
            Enter Start Time:
            <input
              // type="time"
              value={InputStartTime}
              name="inputStartTime"
              onChange={handleChange}
              placeholder="15:15"
              // autocomplete="off"
            />
          </label>
        </div>
        <div style={{marginTop:"1em"}}>
        <button type="submit">Process</button>
        <button type="clear" onClick={handleclear} style={{marginLeft:"1em"}}>Clear</button>
        </div>
      </form>
      <br/>
      <table style={{border:"1px solid black",borderCollapse:'collapse' ,marginLeft:"1.5rem",borderRadius:"20px"}}>
        <thead>
          <tr>
            <th style={{border:"1px solid black",borderCollapse:'collapse'}}>Time</th>
            <th style={{border:"1px solid black",borderCollapse:'collapse'}}>Price</th>
          </tr>
        </thead>
        <tbody>
          {finalResult.map((item, key) => (
            <tr key={key}>
              <td style={{border:"1px solid black",borderCollapse:'collapse'}}>{item[0]}</td>
              <td style={{border:"1px solid black",borderCollapse:'collapse'}}>{item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TimeCopy;
