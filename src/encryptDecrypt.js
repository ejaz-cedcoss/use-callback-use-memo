import CryptoJS from "crypto-js";
const encryptionKey = "Hjb@FZCXkuCRfj4";
// const encryptionKey = process.env.REACT_APP_ENCRYPTION_KEY;

export const HashingKey = (key) => {
  const HashedKey = CryptoJS.MD5(key);
  return HashedKey;
};
export const Encrypt = (key) => {
  if (typeof key == "string") {
    const encrypted = CryptoJS.AES.encrypt(key, encryptionKey).toString();
    return encrypted;
  } else {
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(key),
      encryptionKey
    ).toString();
    return encrypted;
  }
};

export const Decrypt = (ciphertext) => {
  try {
    if (ciphertext === null) {
      throw new Error("key is not defined...");
    } else {
      const decrypted = CryptoJS.AES.decrypt(
        ciphertext,
        encryptionKey
      ).toString(CryptoJS.enc.Utf8);
      if (decrypted) {
        return decrypted;
      } else {
        return "undefined......";
      }
    }
  } catch (err) {
    console.log("err: ", err);
  }
};
