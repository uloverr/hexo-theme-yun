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
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6eb1a5efdfb0b70aeb7b23e576058ff4"
  },
  {
    "url": "about.html",
    "revision": "b6c92c88e88b16c10869531ea0369a33"
  },
  {
    "url": "assets/css/0.styles.13924602.css",
    "revision": "2ea3e7ba4c7deed75dc47c526d6d4bef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.719304c1.js",
    "revision": "6dd648d2a10b4247ff5c6f7911d31dfc"
  },
  {
    "url": "assets/js/11.bbb583ed.js",
    "revision": "a1503cbb3224077d3ce214046c7761ba"
  },
  {
    "url": "assets/js/12.f3b86a9a.js",
    "revision": "9be095f598e50515ec2d4bd7600a7744"
  },
  {
    "url": "assets/js/13.0bb92ce8.js",
    "revision": "0a99d4bcb7d34910ae34d730d6d9dba5"
  },
  {
    "url": "assets/js/14.ca913b2d.js",
    "revision": "a9b593792b47fc637871ee12006ceadf"
  },
  {
    "url": "assets/js/15.caa9059b.js",
    "revision": "0a154761280f099a764c04e3f5156705"
  },
  {
    "url": "assets/js/16.77a43179.js",
    "revision": "979e6b62720d2bb1a0de329e336b195f"
  },
  {
    "url": "assets/js/17.250746f0.js",
    "revision": "1c191bed1a4b91641274278f61d11c84"
  },
  {
    "url": "assets/js/18.de2ce77a.js",
    "revision": "e44b8b50f27a8b47911bc6643d090b3c"
  },
  {
    "url": "assets/js/19.daaadeb6.js",
    "revision": "cca3bfddad326442fa8c62b34f82126e"
  },
  {
    "url": "assets/js/20.3e493a8d.js",
    "revision": "1174b878cf8f4203c98df2a06afbbcf1"
  },
  {
    "url": "assets/js/21.b1257a23.js",
    "revision": "d47213d7dec3d7163d20d0fc22049cec"
  },
  {
    "url": "assets/js/22.e8094df8.js",
    "revision": "4530c9044a45ecdf5e0af463a4c78f5a"
  },
  {
    "url": "assets/js/23.f1d378eb.js",
    "revision": "cdcb62efc665fe5ff8b74299055512dc"
  },
  {
    "url": "assets/js/24.529bf91a.js",
    "revision": "b8e10119eee1d375f344f31721dc2971"
  },
  {
    "url": "assets/js/25.29b67d3b.js",
    "revision": "3de93b217c0aac794a99e46600505653"
  },
  {
    "url": "assets/js/26.cdc48ad9.js",
    "revision": "c1f4b3426ff49cf65a03a421a1669070"
  },
  {
    "url": "assets/js/27.2d122fbd.js",
    "revision": "d4b47cd25633bdcb30d1db6e76178bcd"
  },
  {
    "url": "assets/js/28.27804323.js",
    "revision": "f64e0d4beff5e7d42cea07fde1a76ab8"
  },
  {
    "url": "assets/js/29.83a69cc0.js",
    "revision": "49833b2cb2c3ab62720e073eea6fe28e"
  },
  {
    "url": "assets/js/3.b316e861.js",
    "revision": "b5a5aafc9a12bbd66745ff6f77191cfd"
  },
  {
    "url": "assets/js/30.9a05e5f6.js",
    "revision": "9cb9cad030d2dcb78bfe571ce61b1a21"
  },
  {
    "url": "assets/js/31.6d01bf96.js",
    "revision": "acda7e1dea12d76e1ab7602e1acbcc2b"
  },
  {
    "url": "assets/js/32.fdcef6d6.js",
    "revision": "bb63ec213ba5d45d438e1055917b37f5"
  },
  {
    "url": "assets/js/4.335cf54b.js",
    "revision": "e3210b9fa6d87473b3030b735058e108"
  },
  {
    "url": "assets/js/5.155c6b16.js",
    "revision": "826aaa0eee8fae406e576631e54d56df"
  },
  {
    "url": "assets/js/6.f021cea4.js",
    "revision": "70d06f228785b6f95dadf3544526ea9f"
  },
  {
    "url": "assets/js/7.cd0b0220.js",
    "revision": "56437e57ab9961a17e1627de2bd9f545"
  },
  {
    "url": "assets/js/8.9c1b0eb8.js",
    "revision": "b4c96ccccf809c98bff335d788aaa26e"
  },
  {
    "url": "assets/js/9.35230b46.js",
    "revision": "ed71bebf6f152e3edae08161b82fe806"
  },
  {
    "url": "assets/js/app.56b54349.js",
    "revision": "73c0769285aef3bc15810d18455c6b21"
  },
  {
    "url": "assets/js/vendors~docsearch.a3c35701.js",
    "revision": "5d321dc41033da987689316aef193f9f"
  },
  {
    "url": "demo.html",
    "revision": "3e53702a50c873319ac1f9e1de1bf30b"
  },
  {
    "url": "en/about.html",
    "revision": "f9cfd2b12b98379705b7c32b8f1bd606"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "b62ed08778251a4a9af38f2847bc0e35"
  },
  {
    "url": "en/guide/config.html",
    "revision": "bba8965b488fee920a2a10e4d8addd02"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "eb09a4f8aa24d755f8c049d15e13b5d5"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "981058485c92ce251c99bd6a5450ffeb"
  },
  {
    "url": "en/guide/index.html",
    "revision": "31d0a3665a1ac772c322e8294419369c"
  },
  {
    "url": "en/guide/page.html",
    "revision": "762bbf8545c4fbed55313e4e9a5a1b5b"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "09d67715b0ba228c3bd19c3e82a29336"
  },
  {
    "url": "en/index.html",
    "revision": "331861228a3b42184d69910d468078c2"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "3869df3dad88cfba42d8278d1b3d66eb"
  },
  {
    "url": "guide/config.html",
    "revision": "10af944a53b1574bdd5997c6ce61c9f6"
  },
  {
    "url": "guide/faq.html",
    "revision": "d5c37f82d0bfbc164c4cfc6649d2cb01"
  },
  {
    "url": "guide/icon.html",
    "revision": "f0ad6d03d00669d5aae6353da80ef354"
  },
  {
    "url": "guide/index.html",
    "revision": "99b4693a98bc2b6be20fa6e967cc59b4"
  },
  {
    "url": "guide/migrate.html",
    "revision": "d23d47ac508f9a379eade6193d3b3722"
  },
  {
    "url": "guide/page.html",
    "revision": "f15f388abde04d7b26fc6bf326f4c7a0"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "3fe28f41b6a566500cbf4d7d63661414"
  },
  {
    "url": "index.html",
    "revision": "0e8f3081d8e7a3f179e3819459f92da4"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
