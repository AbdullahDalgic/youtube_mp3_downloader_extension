import Youtube from "./youtube";

setInterval(() => {
  const player = document.querySelector("#meta-contents #subscribe-button");
  const button = document.querySelector("#meta-contents #download_button__");

  if (player && button == null) {
    addDownloadButton();
  }
}, 1000);

const addDownloadButton = () => {
  const player_container = document.querySelector(
    "#meta-contents #subscribe-button"
  );
  if (player_container !== null) {
    const donwload_button = document.createElement("button");
    donwload_button.id = "download_button__";
    donwload_button.innerHTML = chrome.i18n.getMessage("download");
    donwload_button.setAttribute("data-i18n-id", "download");
    player_container.prepend(donwload_button);

    donwload_button.addEventListener("click", async () => {
      var url = new URL(window.location.href);
      var id = url.searchParams.get("v");

      Youtube(id).then((link) => {
        const a: any = document.createElement("a");
        a.href = link;
        a.click();
      });
    });
  }
};
