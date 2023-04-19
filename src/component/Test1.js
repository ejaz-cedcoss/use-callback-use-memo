import React from "react";
import CryptoJS from "crypto-js";

const Test1 = () => {
  // encrypt:-
  const encrypted = CryptoJS.AES.encrypt("Hello", "Secret Passphrase");
  console.log("encr: ", encrypted.toString());
  console.log("iv: ", encrypted.iv.toString());

  // decrypt :-
  const ciphertext = encrypted.toString();
  const decrypted = CryptoJS.AES.decrypt(
    ciphertext,
    "Secret Passphrase"
  ).toString(CryptoJS.enc.Utf8);
  console.log("decr: ", decrypted);
  return (
    <div>
      <h1> Testing cryptojs </h1>
    </div>
  );
};

export default Test1;
