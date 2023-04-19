import React, { useEffect } from "react";
import CryptoJS from "crypto-js";

import { Decrypt, Encrypt, HashingKey } from "../encryptDecrypt";
import Test from "./Test";

const SessionEncrypt = () => {
  const schema = {
    name: "md ejaz alam",
    age: 22,
    location: "lucknow",
  };

  useEffect(() => {
    sessionStorage.setItem(HashingKey("user_id"), Encrypt("ejaz123"));
  }, []);

  // decryptingfun :-
  const getdeCryptkeys = () => {
    const user_id = Decrypt(sessionStorage.getItem(HashingKey("user_id")));
    console.log("decrypted: ", user_id);
  };
  return (
    <div>
      <h1>How to Encrypt and decrypt sessionStorage values ??? </h1>
      <button onClick={() => getdeCryptkeys()}>decrypt userid </button>
      <button
        onClick={() => sessionStorage.setItem("schemas", Encrypt(schema))}
      >
        encrypt schema
      </button>
      <button
        onClick={() =>
          console.log("test2: ", CryptoJS.MD5("abc", "asdf").toString())
        }
      >
        click
      </button>
      <Test />
    </div>
  );
};

export default SessionEncrypt;
