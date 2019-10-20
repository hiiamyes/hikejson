import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      //   console.log(
      //     sender.tab
      //       ? "from a content script:" + sender.tab.url
      //       : "from the extension"
      //   );
      //   if (request.greeting == "hello") sendResponse({ farewell: "goodbye" });
      console.log("get message");
    });
  });
  return <div>hi</div>;
};

export default App;
