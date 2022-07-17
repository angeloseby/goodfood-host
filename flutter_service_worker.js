'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4743738df240b6292f45338402c8cf8d",
".git/config": "beaf5f1ad17e6aaf3a9dc44b972631bc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7894f43d07405f53ed931bf374a9c72b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f66e3eb6852bfa046e9dc9e9ad3d52db",
".git/logs/refs/heads/main": "a6abc623b99eb30fa5f72eb22fa0a05f",
".git/logs/refs/remotes/origin/main": "09e83af598b924ee96688f91688d9c8e",
".git/objects/03/7ad47f870a001b44b4477cab3525ef08cc5cb3": "e24921a042544fdcf3d9f373db0130b8",
".git/objects/05/2855d1622b335451033bfa77289e540a911007": "4d2a9d84c12afbefce024eb653a755b1",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/4e37047fcff27cdc0773eb6af2b15b767619fa": "65196fa302b5a39d2c737c7d52eca571",
".git/objects/14/c2020fdcde2bdc84a04523942d47fc309b4c14": "804e6413739745d6644aadcae191ef23",
".git/objects/1a/d1af214eca715fbcd2666c76ddd8bd87e97072": "bb6cfbcddddf7279dc944cf0eb2ba888",
".git/objects/1c/c6743693b4c59ff794bb66d7a26a645554f7bc": "08a59ec472ec3e4287397e25c875e0cb",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/d97b2f2b3f6b59a08114211a8ac781a47af341": "f96c03c4cd2135f8a2587ef32fad8b4a",
".git/objects/51/f05b293662d36dac7f9cd18e026801a1ed0edb": "c8ba4f3bd4e68ebb8628715f4704afd3",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/5b/e4b02999363e962a70379e38d1a46521f89f91": "d457ccaeb13b5beb421242c27ce7774a",
".git/objects/5e/1aadcec8087a3f075e4b21a20e2356c81e7971": "726282c16a2fd4201e1cf29462ccf9f2",
".git/objects/61/e82d5b02d56f682252b4d2454a064f1caee8ed": "29649e9c7b7937089b1e5b524d343154",
".git/objects/69/2f311fa9f4fa1bc195061ba2171652b8bfa007": "4c984b81c80274af6560f9cb92a5e22a",
".git/objects/70/28fb2cea3ea96ab371ece791061919eee73a16": "2e9a0ac9b24247db92044e76880457fa",
".git/objects/73/5044faeb5633cafa8973ce792cff6f8a38646a": "43c44f57c8a0d2d1c4ec23bdda6e8234",
".git/objects/75/884adc43eadcf2586ec126e419430150c1f50d": "8aeb9a27eb7b027d8e43a4e59a96edb3",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/b270b97e41e1484671b2098ef2471d1c410cf2": "00b9f2681a90e57f70cbdc586b537204",
".git/objects/81/a119bada32560285344642277f704162d53340": "717215493819d6543d227aca3b69ae1b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/97/66e1a70874b4bf019350bde1f3d04368809350": "7aad7c4a9d85556cd5759e36690df6a5",
".git/objects/a0/c7711f2f16e7f8021ae443fbd250446279d664": "8a1a83144779c4fe9e5cf3e50f6365f6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b4/f2f15979bdcc75129bab8a0b2530abce82776c": "5b50365d7570cbd26ec70f08c6762c8f",
".git/objects/b5/3942edb9e77dd89578ccf016a367b5689e4381": "51bfbc7b4e61d9a49f19f18e84f4a8fc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/95902e94d99f58dd8ee14cce668aa3c5086d50": "f7887dca74a5df6785d4437f984c8738",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c5/8a7b136be13354c284bbb480daee4fdd2a2dbe": "cf2813ea59a1610f626f3217c9b11ca9",
".git/objects/d3/19726ef8a9ffaf78162dd3731846391cc9db5b": "eaf25d7bfb5e94233a72222de09b9940",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/2b9a34f33a102e8679eeb84a88e7fe90fe4b2d": "7b1877fad82ec8a1d26df1823373a8de",
".git/objects/df/8c417ae1be234eb8d4c543b6e1637c5c47161b": "dfb698dd615877a057c1b4dd5824ff48",
".git/objects/e0/a8933660e87b89114a416361e67364336c5fad": "289ef8ecdd52e0e623fb331d36221ef6",
".git/objects/e3/ca54da2cefdc87bb17481cf249158f98b1969f": "77baf522f04a753cc174021328f0ef30",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8aad3206f1167ad275440badec91e6aa6dc6ef": "e4d7ae84acf004e0bc3a61a2de665eb9",
".git/refs/heads/main": "64a950cd00a81170bac24bd6bda6da86",
".git/refs/remotes/origin/main": "64a950cd00a81170bac24bd6bda6da86",
"assets/AssetManifest.json": "ac8ee7d59b40b8677cc2b79e05269745",
"assets/assets/fonts/GoogleSansDisplay-Bold.ttf": "1c74364382611d0847cb409be8922169",
"assets/assets/fonts/GoogleSansDisplay-Medium.ttf": "d4373a4426bc10a849be7f89a843a007",
"assets/assets/fonts/GoogleSansDisplay-Regular.ttf": "e4ea236b3ef749fa293905025b92365f",
"assets/assets/images/bg.jpg": "5554722b18c372d27b58533745f05989",
"assets/assets/images/logo.png": "1cf573c5c7d6928fa51c9bf1677ff73d",
"assets/FontManifest.json": "08b7c6841c0f85c4754f459af3f90f4d",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "2ceedb153a9ddf191c47e7cb8b46fda6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "5db2513d8ca822f5fb6d30cabdeca474",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f26468495149c67b1600a0f6eb9ca1f4",
"/": "f26468495149c67b1600a0f6eb9ca1f4",
"index.php": "f45006f6f768842473d23fcf54a2d80f",
"main.dart.js": "20aca497587d6b9bfbd2a834f439f0c4",
"manifest.json": "6a54128c8f78c72e2f07e5c17d942321",
"version.json": "04a265a34776b80c11723f26a788a07c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
