importScripts('workbox-v3.0.0-alpha.3/workbox-sw.js')

self.workbox.skipWaiting();
self.workbox.clientsClaim();

/*
  This is our code to handle push events.
*/
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Notification';
  const options = {
    body: `${event.data.text()}`,
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

self.workbox.precaching.precacheAndRoute([
  {
    "url": "assets/coding.svg",
    "revision": "13a300397432b420301962aa127c4744"
  },
  {
    "url": "assets/download.svg",
    "revision": "4f2db87e70849e4cfb0bbcc7e1d0b931"
  },
  {
    "url": "assets/films.svg",
    "revision": "63bda8f46cf831cc63701e8cff08f08d"
  },
  {
    "url": "assets/logos/logo-github-2.svg",
    "revision": "9a5bc9c9270ce1527128a56ff826893c"
  },
  {
    "url": "assets/logos/logo-github.svg",
    "revision": "dec21930a1a4f59520b5c55bff21dc6f"
  },
  {
    "url": "assets/logos/logo-linkedin.svg",
    "revision": "ead617bce8a131dfcc0af005ee2d1360"
  },
  {
    "url": "assets/logos/logo-stackoverflow.svg",
    "revision": "ff6506d6e113714443bb226772461602"
  },
  {
    "url": "assets/logos/logo-twitter.svg",
    "revision": "0821bcb236d51acdb29d544d82fd95f8"
  },
  {
    "url": "assets/snowboard.svg",
    "revision": "31f576979636b4f89ea25fac8ec2bc02"
  },
  {
    "url": "assets/travel.svg",
    "revision": "22e7ec9e46c1a7964131c03db7a53df1"
  },
  {
    "url": "assets/water-activities.svg",
    "revision": "3d748a9e07961cb1fbf9bdf91fea31ae"
  },
  {
    "url": "build/app.js",
    "revision": "ca68e3aa6a479293e36acbdfae3197e2"
  },
  {
    "url": "build/app/1ysowcog.es5.js",
    "revision": "b02da5dc5d62d3f6d708b9c8c665f24c"
  },
  {
    "url": "build/app/1ysowcog.js",
    "revision": "cba0dc5b2d7eb005fbca17ae9e2f86a9"
  },
  {
    "url": "build/app/8jkmuhvn.es5.js",
    "revision": "f9f2798a8d0515cab5592ab5da5ef3c1"
  },
  {
    "url": "build/app/8jkmuhvn.js",
    "revision": "6d62374e1dafb39b8629f51126f0158e"
  },
  {
    "url": "build/app/app.05sflprh.js",
    "revision": "27481c29ff583123d90a75b2a69ef0ac"
  },
  {
    "url": "build/app/app.imsx6h7z.js",
    "revision": "602dc2fa388f63ac6e6cc15cd553420a"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "561ce90c6afd725dd42dba336de0002b"
  },
  {
    "url": "build/app/bsr4ofe1.es5.js",
    "revision": "c9d616ca4692cd9aa0f363e49a8b1af8"
  },
  {
    "url": "build/app/bsr4ofe1.js",
    "revision": "434524aa964cb1cb45604d6aa1ec84fd"
  },
  {
    "url": "build/app/bsr4ofe1.sc.es5.js",
    "revision": "c9d616ca4692cd9aa0f363e49a8b1af8"
  },
  {
    "url": "build/app/bsr4ofe1.sc.js",
    "revision": "dd5c5dd97844c1383509bbb23bca5976"
  },
  {
    "url": "build/app/u9njwtv9.es5.js",
    "revision": "873afac8e65f030535f680cc894f87b9"
  },
  {
    "url": "build/app/u9njwtv9.js",
    "revision": "2c183d0748f6f22a9dbbc17f4caa1b62"
  },
  {
    "url": "index.html",
    "revision": "a9eb1b738a0f4a3674dcdcf7a281766b"
  },
  {
    "url": "manifest.json",
    "revision": "ba52059eba040aa742b249ba82d6b5a5"
  }
]);