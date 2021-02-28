---
title: A (send) beacon of hope
date: 27 February 2021
tldr: If you want to use navigator.sendBeacon() to asynchronously POST data to a web server, be aware of the restricted content type. You probably want to use a Blob in the payload.
---

[Web Vitals](https://web.dev/vitals/) from Google allow developers to easily collect and observe important client-side metrics in their web app very easily. Even better, there is a widely supported [`navigator.sendBeacon`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) function which allows your to asynchronously `POST` data to an endpoint of your choosing. So for example, in [Next.js](https://nextjs.org/docs/advanced-features/measuring-performance) you can do:

```js
export function reportWebVitals(metric) {
  const body = JSON.stringify(metric);
  const url = "https://mywebsite.com/analytics";

  // Assuming you don't care about IE support, you can just do this
  navigator.sendBeacon(url, body);
}
```

The `reportWebVitals` function gets called every time a metric is generated and allows you to send metrics to an analytics service - giving you rich, real-user data for free!

But what's going on with `JSON.stringify`? If this is going to `POST` to a web server, why can't we just fire the data off with the content type `application/json` and do `const { name, value } = req.body` on the backend?

This is because `sendBeacon` uses the `text/plain` Content Type by default.

If you want to be able to do something like `const { name, value } = req.body` on the backend without `JSON.parse` then you need to override the default behaviour of `sendBeacon` by using a `Blob` as the payload. When we send a `Blob` the `sendBeacon` request uses the Content Type from the `Blob`, rather than forcing `text/plain`.

To get the desired effect, change your code to this:

```js
export function reportWebVitals(metric) {
  const body = JSON.stringify(metric);
  const url = "https://mywebsite.com/analytics";
  const blob = new Blob([body], { type: "application/json" });

  // Again, assuming you don't care about IE support
  navigator.sendBeacon(url, blob);
}
```
