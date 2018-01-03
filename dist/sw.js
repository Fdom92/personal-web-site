importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
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
    "url": "assets/header.jpg",
    "revision": "713ae9e38fc9adbc4ee641a63b160385"
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
    "revision": "1388fbfdf187c0aa191cb6bb105daf13"
  },
  {
    "url": "build/app/app.07jca59v.js",
    "revision": "c05c386ec1a6d994867e77476d93f930"
  },
  {
    "url": "build/app/app.4mksua9n.js",
    "revision": "7a1eb6ccf88ed3644b31f6246868a61f"
  },
  {
    "url": "build/app/app.cztcwfin.js",
    "revision": "0344175d6dd5c9d9c1394b46aae92a92"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "f5fef1d952cbc94400c8502feae8f529"
  },
  {
    "url": "build/app/ebubsyau.js",
    "revision": "6af764af691b9065479b3ba284f1295e"
  },
  {
    "url": "build/app/eow5lcoo.js",
    "revision": "f24268830b1ccdf6f62a6e33e823061b"
  },
  {
    "url": "build/app/ftcx4qp9.js",
    "revision": "8d508b64445e2967b56a6a0fc6a335b7"
  },
  {
    "url": "build/app/ogpw3fyc.js",
    "revision": "43d743807b35ab13655f89d29f8c5624"
  },
  {
    "url": "build/app/qa7bwh1k.js",
    "revision": "b45a5e320bf3e3694aef51e1cc2888cc"
  },
  {
    "url": "build/app/vwqw6bmh.js",
    "revision": "c2a68a0692fe1e5e202aac8740669e7c"
  },
  {
    "url": "index.html",
    "revision": "c370dfea2207fea6be38ed2b684c2cb8"
  },
  {
    "url": "manifest.json",
    "revision": "ba52059eba040aa742b249ba82d6b5a5"
  },
  {
    "url": "workbox-sw.prod.v2.0.0.js",
    "revision": "7b6749c71e3ba8b786ce6cb65e248ac8"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
