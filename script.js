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
