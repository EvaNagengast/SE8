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

function moveticket() {
{let ticketimage = document.querySelector("#tflTicket");
  ticketimage.classList.toggle("active");
}
}



let ticket = document.querySelector("#tflTicket");
let container = document.querySelector("#ticket");
container.addEventListener("click", moveticket);


