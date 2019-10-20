# Chrome-Extension

## Getting Started

```sh
brew install yarn
mv manifest.template.js manifest.json
vim manifest.json
yarn
yarn start
```

Once packages are installed, follow [Firebase Auth w/ Google Sign-In in Chrome Extensions](https://github.com/firebase/quickstart-js/tree/master/auth/chromextension#firebase-auth-w-google-sign-in-in-chrome-extensions) and update corresponding variables in [firebaseConfig.template.js](https://github.com/hiiamyes/paiyun-auto-apply/blob/master/setting-page/src/configs/firebaseConfig.template.js)

and [manifest.template.js](https://github.com/hiiamyes/paiyun-auto-apply/blob/master/setting-page/manifest.template.js)

```
"oauth2": {
    "client_id": "<YOUR_CLIENT_ID>",
  },
  "key": "<YOUR_EXTENSION_PUBLIC_KEY>",
```

Then, rename the firebase config file and manifest.

[Manage Extensions](chrome://extensions/) > [Load unpacked extension](https://developer.chrome.com/extensions/getstarted#unpacked)
