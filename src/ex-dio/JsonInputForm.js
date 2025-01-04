import React, { useState } from "react";

const JsonInputForm = () => {
  // State to hold the raw JSON string
  const [jsonInput, setJsonInput] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setJsonInput(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const parsedData = JSON.parse(jsonInput); // Parse the JSON string
      // console.log(parsedData); // Log the parsed JSON object to the console
    } catch (error) {
      console.error("Invalid JSON:", error); // Handle JSON parsing errors
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Paste your JSON data here:
          <textarea
            rows="10"
            cols="50"
            value={jsonInput}
            onChange={handleChange}
            placeholder='{"status": "success", "data": {"candles": [[...]]}}'
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default JsonInputForm;
