function handleNewSearch(event) {
  event.preventDefault();
  const searchTerm = event.target[0].value;
  let url = "";

  switch (searchTerm) {
    case "揚威建設":
      url = "young-wei.html";
      break;

    case "宋秀鑾":
      url = "song-shu-luang.html";
      break;

    case "包長鴻":
      url = "bao-chang-hong.html";
      break;

    case "鴻雲案":
      url = "hong-yun.html";
      break;
  }

  if (url) {
    window.location.assign(url);
  }
}

function handleOldSearch(event) {
  event.preventDefault();
  window.location.assign("first-search/index.html");
}

function handleSubmit(event) {
  event.preventDefault();
}

function navigate(event, url) {
  event.preventDefault();
  // 組合完整的根目錄URL
  const fullUrl = window.location.origin + "/" + url.replace(/^\//, "");
  window.location.assign(fullUrl);
}

function openNewPage(url) {
  const fullUrl = window.location.origin + "/" + url.replace(/^\//, "");
  window.open(fullUrl, "_blank");
}
