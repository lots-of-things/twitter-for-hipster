// Removing popular tweets
function scrollStop(callback) {
  // Make sure a valid callback was provided
  if (!callback || typeof callback !== "function") return;

  // Setup scrolling variable
  var isScrolling;

  // Listen for scroll events
  window.addEventListener(
    "scroll",
    function(event) {
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function() {
        // Run the callback
        callback();
      }, 66);
    },
    false
  );
}

function removePopulars() {
  var spanTags = document.getElementsByTagName("span");
  var found;
  for (var i = 0; i < spanTags.length; i++) {
    if (spanTags[i].textContent.length > 0 && spanTags[i].textContent.length < 5) {
      if (spanTags[i].textContent.slice(-1)=='K') {
      found = spanTags[i];
      tweetNode = found.parentNode.parentNode.parentNode.parentNode.parentNode.
        parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
      tweetNode.parentNode.removeChild(tweetNode);
      }
    }
  }
  return;
}

scrollStop(function() {
  removePopulars();
});

setTimeout(() => {
  removePopulars();
}, 2000);
