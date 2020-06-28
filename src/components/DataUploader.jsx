import React from "react";
import { CSVReader } from "react-papaparse";

function DataUploader(props) {
  const handleOnDrop = (data) => {
    console.log(data)
  }

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log(data);
  };

  return (
    <div className="parse">
    <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton
        onRemoveFile={handleOnRemoveFile}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
      </div>
  );
}
export default DataUploader;
