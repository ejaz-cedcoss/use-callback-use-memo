import React from "react";
import { Decrypt } from "../encryptDecrypt";

function fetchSchema() {
  let data = JSON.parse(Decrypt(sessionStorage.getItem("schemas")));
  // console.log("data, ", JSON.parse(data));
}

const Test = () => {
  return (
    <div>
      <button onClick={() => fetchSchema()}>decrypt schema</button>
    </div>
  );
};

export default Test;
