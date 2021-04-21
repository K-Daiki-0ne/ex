import React, { useState } from 'react';

export const useParseBase64 = (base64String: string) => {
  const [decodeBase64, setDecodeBase64] = useState<string>('');

  const decodeFileBase64 = (base64String) => {
    // From Bytestream to Percent-encoding to Original string
    return decodeURIComponent(
      atob(base64String)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
  };

  setDecodeBase64(decodeFileBase64(
    base64String.substring(base64String.indexOf(",") + 1)
  ))

  return decodeBase64;
}