/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */


importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.3/workbox-sw.js");









/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
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
    "url": "index.html",
    "revision": "511fd6501eba394b062ea15729dcde54"
  },
  {
    "url": "manifest.json",
    "revision": "ba52059eba040aa742b249ba82d6b5a5"
  }
].concat(self.__precacheManifest || []);

if (Array.isArray(self.__precacheManifest)) {
  workbox.precaching.suppressWarnings();
  workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
}
