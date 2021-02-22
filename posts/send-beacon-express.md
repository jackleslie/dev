---
title: A (send) beacon of hope
date: 15 February 2021
tldr: If you want to use navigator.sendBeacon() to asynchronously POST data to a web server, be aware of the restricted content type. However, Express can help with this with built-in functions.
---

With the emergence of Web Vitals developers can now easily collect and observe important client-side metrics in their web app very easily. Even better, the `Navigation` API provides a `sendBeacon()` function which allows your to asynchronously `POST` data to an endpoint of your choosing. So for example, in Next.js you can do:

```js
export function reportWebVitals(metric) {
  const body = JSON.stringify(metric);
  const url = "https://mywebsite.com/analytics";

  // Assuming you don't care about IE support, you can just do this
  navigator.sendBeacon(url, body);
}
```

And you'll get rich real-user data for free!

But what's going on with `JSON.stringify`? If this is going to `POST` to a web server, why can't we just fire the data off with the content type `application/json` and do `const { name, value } = req.body` on the backend?

This is because `sendBeacon`, by default, uses the `text/plain` Content Type.
