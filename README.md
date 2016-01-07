# Hi
Here's Facematch, a wrapper for the Facebook Face Recognition feature. I coded it super quickly to recognize my friends when they ring at the door. This is very simple at the moment and there's much to improve (almost no error handlers).

## How does it work?
When you upload a picture on Facebook, the ```/photos/tagging/recognition``` endpoint is called. This program **uploads a private picture** (using Facebook API) + **calls the recognition endpoint** (by simulating a browser using the user's information).

# Requirements

  - Facebook App ID / App Secret (register a new app here: https://developers.facebook.com/apps) 
  - An active Facebook Account with friends (Facebook only recognizes your friends)


# Getting Started
##### I) Install

```sh
$ git clone https://github.com/louisondumont/facematch
$ cd facematch
$ npm install
```

##### II) Edit config.js
**1) Insert** your App ID and Secret

**2) Go to [Facebook](https://www.facebook.com),** open DevTools > Network.

**3) Upload any picture** but don't press "Post".

**4) Look for the "recognition"** endpoint.
![Network screenshot](https://louison.me/facematch/network.png)

**5) "Request"** > copy-paste the entire "cookie" string in config.js

![Cookie screenshot](https://louison.me/facematch/cookie.png)

**6) "Form"** (raw source) > copy-paste everything from "__user=" in config.js (req_params)
![Req screenshot](https://louison.me/facematch/req.png)


##### III) Start the server
*You can change the http port in config.js* 
```
$ node index.js
```

##### IV) Get your access token
Navigate to http://localhost:3000/getAccessToken and give access to your Facebook account.

##### V) Recognize people
POST http://localhost:3000/recognize (accessToken = YOUR_ACCESS_TOKEN, url = YOUR_IMG_URL)

![Screenshot query](https://louison.me/facematch/stephane.png)

##### YAY! Now you can do like Mark and build your intelligent house.