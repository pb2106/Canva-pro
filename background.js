chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "copyImageURL",
    title: "Copy Image as PNG (Modified URL)",
    contexts: ["image"]
  });

  chrome.storage.local.set({ enabled: true });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.storage.local.get("enabled", (data) => {
    if (!data.enabled) {
      console.log("Extension is OFF, skipping image copy.");
      return;
    }

    const originalUrl = info.srcUrl;
    const modifiedUrl = originalUrl.replace(/wm_s\.png$/, "tl.png");

    chrome.tabs.sendMessage(tab.id, {
      action: "copyModifiedImage",
      url: modifiedUrl
    });
  });
});