importScripts('workbox-sw.prod.v2.0.0.js');

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
    "url": "assets/docs/Resume.pdf",
    "revision": "63037a81ee5577f043ed96ef1e3b73bc"
  },
  {
    "url": "assets/download.svg",
    "revision": "182f7681341f2cecd070e87e470510c8"
  },
  {
    "url": "assets/films.svg",
    "revision": "63bda8f46cf831cc63701e8cff08f08d"
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
    "url": "components/my-cv/my-cv.scss",
    "revision": "9ed6daa168259f79b9a94152d97cf331"
  },
  {
    "url": "components/my-cv/my-cv.tsx",
    "revision": "5ee66eb9b3f5f2aef30a49c02a69e81f"
  },
  {
    "url": "components/my-experience/my-experience.scss",
    "revision": "34b733531bfdbf3cfbbe1559d85c4625"
  },
  {
    "url": "components/my-experience/my-experience.tsx",
    "revision": "4fa80d6644f28e6b3bb13382b73210f6"
  },
  {
    "url": "components/my-hobbies/my-hobbies.scss",
    "revision": "9f8694b490c9fdcfd358343da9e0c0ff"
  },
  {
    "url": "components/my-hobbies/my-hobbies.tsx",
    "revision": "d42f47029367febf4320659fb2d51953"
  },
  {
    "url": "components/my-info/my-info.scss",
    "revision": "35f87a6c0ee8c80701ff192419ada72d"
  },
  {
    "url": "components/my-info/my-info.tsx",
    "revision": "7caef22ccf63089a11e6d7e015554c13"
  },
  {
    "url": "components/my-projects/my-projects.scss",
    "revision": "4b17765c911ea1429adcdd5e9472341c"
  },
  {
    "url": "components/my-projects/my-projects.tsx",
    "revision": "27edeb0df5c261054c71ef5366daf83c"
  },
  {
    "url": "components/my-projects/single-project/single-project.scss",
    "revision": "3e248ad4184b573c8245e99af8224b8f"
  },
  {
    "url": "components/my-projects/single-project/single-project.tsx",
    "revision": "187c690ac04f2da339d5cdd2203b0598"
  },
  {
    "url": "components/my-projects/tech-chip/tech-chip.scss",
    "revision": "e496d8281bb4c0604cdc4cb5973973ef"
  },
  {
    "url": "components/my-projects/tech-chip/tech-chip.tsx",
    "revision": "a85eabcff4993594012a74f9985a5729"
  },
  {
    "url": "components/web-footer/web-footer.scss",
    "revision": "33baedc41555d5426d2f64fc8b8d1654"
  },
  {
    "url": "components/web-footer/web-footer.tsx",
    "revision": "fc2551c3eb584d89c6783e734ee0c9c1"
  },
  {
    "url": "components/web-header/web-header.scss",
    "revision": "7464a670438cf6f6f35643611d0074ea"
  },
  {
    "url": "components/web-header/web-header.tsx",
    "revision": "5a3471dc1b6f858a6611c6ce938e4e59"
  },
  {
    "url": "components/web-site/web-site.scss",
    "revision": "318aa49f756a09fa0cd74f96af2daebf"
  },
  {
    "url": "components/web-site/web-site.tsx",
    "revision": "e67c8f7a8cb24eda4c9fb5f1e21c4b58"
  },
  {
    "url": "index.html",
    "revision": "67f061ec75075cace3f7f6d04cb9420b"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
