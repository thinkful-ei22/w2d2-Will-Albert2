'use strict';

// const API_KEY = 'AIzaSyACN0l_E-msAX6aDli3ax4Ctr1WEcZNaok';
const API_KEY = 'AIzaSyBiu6JSRAXnUUKnObW03_-xQGq_dzwBLYI';
/*
  We want our store to hold a `videos` array of "decorated" objects - i.e. objects that
  have been transformed into just the necessary data to display on our page, compared to the large
  dataset Youtube will deliver to us.  Example object:

  {
    id: '98ds8fbsdy67',
    title: 'Cats dancing the Macarena',
    thumbnail: 'https://img.youtube.com/some/thumbnail.jpg'
  }
*/
const store = {
  videos: [

  ]
};

// TASK: Add the Youtube Search API Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=`;

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm, callback) {
  console.log(searchTerm);
  const query  = {
    part: 'snippet',
    key: API_KEY,
    q: searchTerm,
  };
  $.getJSON(BASE_URL, query, (response) => {
    console.log(response);
  });
};



const testMockData = {
  "kind": "youtube#searchListResponse",
  "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/sQ4QXJhFZSrhqhUAHVfSpmVC1yo\"",
  "nextPageToken": "CAUQAA",
  "regionCode": "US",
  "pageInfo": {
   "totalResults": 1000000,
   "resultsPerPage": 5
  },
  "items": [
   {
    "kind": "youtube#searchResult",
    "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/cx96QgLLWZH_JxHSfGIB_8-HdN0\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "aJOTlE1K90k"
    },
    "snippet": {
     "publishedAt": "2018-05-31T04:00:00.000Z",
     "channelId": "UCN1hnUccO4FD5WfM7ithXaw",
     "title": "Maroon 5 - Girls Like You ft. Cardi B",
     "description": "\"Girls Like You” is out now. http://smarturl.it/GLY For more, visit: https://www.facebook.com/maroon5 https://twitter.com/maroon5 ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/aJOTlE1K90k/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/aJOTlE1K90k/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/aJOTlE1K90k/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Maroon5VEVO",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/ulL-tpAufZnNIZL4PSN_KeE1H_c\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "Y7ix6RITXM0"
    },
    "snippet": {
     "publishedAt": "2014-06-24T04:00:01.000Z",
     "channelId": "UCN1hnUccO4FD5WfM7ithXaw",
     "title": "Maroon 5 - Maps (Lyric Video)",
     "description": "Maroon 5 - Maps (Lyric) Buy Now! http://smarturl.it/M5Maps Sign up for updates: http://smarturl.it/Maroon5.News Best of Maroon 5: https://goo.gl/8n9iCm ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/Y7ix6RITXM0/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/Y7ix6RITXM0/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/Y7ix6RITXM0/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Maroon5VEVO",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/0qCcVsRBFkaTaurWmbcpzgeay04\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "60ItHLz5WEA"
    },
    "snippet": {
     "publishedAt": "2015-12-04T07:00:30.000Z",
     "channelId": "UCJrOtniJ0-NWz37R30urifQ",
     "title": "Alan Walker - Faded",
     "description": "Listen to ”Faded” on Spotify: http://bit.ly/faded_spotify Listen to ”Faded” via other plattforms: https://AlanWalker.lnk.to/faded Merch available at ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/60ItHLz5WEA/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/60ItHLz5WEA/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/60ItHLz5WEA/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Alan Walker",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/dKkxepWFurm5rlz-coG8BOdUFcA\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "IHNzOHi8sJs"
    },
    "snippet": {
     "publishedAt": "2018-06-15T09:00:05.000Z",
     "channelId": "UCOmHUn--16B90oW2L6FRR3A",
     "title": "BLACKPINK - ‘뚜두뚜두 (DDU-DU DDU-DU)’ M/V",
     "description": "Download on iTunes @ http://smarturl.it/BP_SquareUp/itunes Download on AppleMusic @ http://smarturl.it/BP_SquareUp/applemusic Available on Spotify ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/IHNzOHi8sJs/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/IHNzOHi8sJs/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/IHNzOHi8sJs/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "BLACKPINK",
     "liveBroadcastContent": "none"
    }
   },
   {
    "kind": "youtube#searchResult",
    "etag": "\"DuHzAJ-eQIiCIp7p4ldoVcVAOeY/1szGxIC2JpHOZayLDDyWY1wRMRg\"",
    "id": {
     "kind": "youtube#video",
     "videoId": "VRJmcxCrAOA"
    },
    "snippet": {
     "publishedAt": "2018-01-22T22:55:24.000Z",
     "channelId": "UCRijo3ddMTht_IHyNSNXpNQ",
     "title": "Real Life Trick Shots 2 | Dude Perfect",
     "description": "Trick shots should be an everyday thing! Thanks to Kay Jewelers for sponsoring this video! Win Valentine's Day by going to http://dudeperfect.com/KayJewelers ...",
     "thumbnails": {
      "default": {
       "url": "https://i.ytimg.com/vi/VRJmcxCrAOA/default.jpg",
       "width": 120,
       "height": 90
      },
      "medium": {
       "url": "https://i.ytimg.com/vi/VRJmcxCrAOA/mqdefault.jpg",
       "width": 320,
       "height": 180
      },
      "high": {
       "url": "https://i.ytimg.com/vi/VRJmcxCrAOA/hqdefault.jpg",
       "width": 480,
       "height": 360
      }
     },
     "channelTitle": "Dude Perfect",
     "liveBroadcastContent": "none"
    }
   }
  ]
 }






// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`,
// `thumbnail` which each hold the appropriate values from the API item object. You
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(response) {
  const results = response.items.map( item => ({
    id: item.id.videoId ,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.medium.url,

  }));
};

decorateResponse(testMockData);


// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function(video) {

};

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video
// objects and sets the array as the value held in store.videos
// TEST IT!
const addVideosToStore = function(videos) {

};

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {

};

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function
// TEST IT!
const handleFormSubmit = function() {

};

// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
});