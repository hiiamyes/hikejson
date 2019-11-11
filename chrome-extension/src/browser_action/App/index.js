import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      console.log("get message");
    });
  });
  return <div>hi</div>;
};

export default App;
