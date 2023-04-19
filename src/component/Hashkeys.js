import React, { useEffect } from "react";
const md5 = require("md5");
const Hashkeys = () => {
  const token = "india is great ...";
  const encryptedkey = md5("key1");
  const encryptedvalue = md5(token);
  useEffect(() => {
    sessionStorage.setItem(encryptedkey, encryptedvalue);
  }, []);

  function getdeCryptkeys() {
    const encrypted = sessionStorage.getItem(encryptedkey);
    const decrypted = md5("key1");
    console.log(decrypted);
    // console.log("decrypted: ", decrypted);
  }
  return (
    <div>
      <h1>How to Encrypt and decrypt session keys ??? </h1>
      <button onClick={() => getdeCryptkeys()}>get decrypt</button>
    </div>
  );
};

export default Hashkeys;
