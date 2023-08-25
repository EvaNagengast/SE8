window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.getElementById("playShowcaseSong");
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
function moveTicket() {
  let contactInfo = document.querySelector("#tflTicket");

  if (contactInfo.style.top === "0px" || contactInfo.style.top === "") {
    contactInfo.style.top = "100%"; // Move the contactInfo downward
  } else {
    contactInfo.style.top = "0"; // Bring the contactInfo back to its original position
  }
}


document.querySelector("#ticket").addEventListener("click", moveTicket);
