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
    setfinalResult([]);
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

  console.log(finalResult);

  const style_color =(item_price)=>{
    if(item_price>finalResult[0][1]){
      return "lightgreen";
    }
    else if(item_price<finalResult[0][1]){
      return "indianred";
    }
    else{
      return "white";
    }
  }

  return (
    <>
      <div className="container col-xl-12 col-xxl-10 px-4 py-3">
        <div className="row lg-5 py-3">
          <div className="col-lg-5 text-center text-lg-start py-4 mb-3 sectionn sect1 align-middle">
            <h1 className="display-4 fw-bold lh-1 mb-3">Hello 😀..!</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <span className="input-group-text">Select Date</span>
                <input
                  className="form-control"
                  type="date"
                  value={InputStartDate}
                  name="inputStartDate"
                  aria-label="Username"
                  onChange={handleChange}
                  placeholder="2024-01-01"
                />
              </div>
              <div className="mb-3">
                <label for="json_input_id_21" class="form-label">
                  Paste your JSON data here
                </label>
                {/* <p>Paste your JSON data here:</p> */}
                <textarea
                  rows="9"
                  cols="40"
                  className="form-control"
                  id="json_input_id_21"
                  name="inputJson"
                  value={jsonInput}
                  onChange={handleChange}
                  placeholder='{"status": "success", "data": {"candles": [[...]]}}'
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Enter Start Time</span>
                <input
                  className="form-control"
                  // type="time"
                  value={InputStartTime}
                  name="inputStartTime"
                  onChange={handleChange}
                  placeholder="15:15"
                  // autocomplete="off"
                />
              </div>
              <div style={{ marginTop: "1em" }} className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button type="submit" className="btn btn-primary">
                  Process
                </button>
                <button
                  type="clear"
                  className="btn btn-danger"
                  onClick={handleclear}
                  // style={{ marginLeft: "1em" }}
                >
                  Clear
                </button>
              </div>
            </form>
          </div>

          {/* side section */}

          {finalResult && finalResult.length>0?
          <div className="pl-3 col-md-11 mx-auto col-lg-6 sectionn sidesection">
            {/* <table className="table  table-striped" > */}
            <table className="table ">
              <thead>
                <tr>
                  <th
                    style={{
                      border: "1px solid black",
                      borderCollapse: "collapse",
                    }}
                  >
                    Time
                  </th>
                  <th
                    style={{
                      border: "1px solid black",
                      borderCollapse: "collapse",
                    }}
                  >
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {finalResult.map((item, key) => (
                  
                  <tr key={key}>
                    <td
                      style={{
                        border: "1px solid black",
                        borderCollapse: "collapse",
                      }}
                    >
                      {item[0]}
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        borderCollapse: "collapse",
                        backgroundColor:style_color(item[1]) ,
                      }}
                    >
                      {item[1]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>:""}
        </div>
      </div>
    </>
  ); 
}

export default TimeCopy;
