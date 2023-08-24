window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById("songTwo");
  const options = {
    width: `70%`,
    height: `300`,
    uri: "spotify:track:5jzma6gCzYtKB1DbEwFZKH",
  };

  const callback = (EmbedController) => {
    document.querySelectorAll(".episode").forEach((episode) => {
      episode.addEventListener("click", () => {
        EmbedController.loadUri(episode.dataset.spotifyId);
          EmbedController.play();
      });
    });
  };

  IFrameAPI.createController(element, options, callback);
};

// 
// 
// 
// 
// 
