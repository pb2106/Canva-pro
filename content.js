async function copyModifiedImageToClipboard(url) {
  try {
    const modifiedUrl = url.replace(/[^\/]+\.png$/, "tl.png");
  
    const response = await fetch(modifiedUrl, { mode: "cors" });
    if (!response.ok) throw new Error("Failed to fetch image (Status: " + response.status + ")");

    const blob = await response.blob();
    const imgBitmap = await createImageBitmap(blob);

    const canvas = document.createElement("canvas");
    canvas.width = imgBitmap.width;
    canvas.height = imgBitmap.height;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(imgBitmap, 0, 0);

    const pngBlob = await new Promise((resolve) =>
      canvas.toBlob(resolve, "image/png")
    );

    await navigator.clipboard.write([
      new ClipboardItem({ "image/png": pngBlob }),
    ]);

    
  } catch (err) {
    //alert("Failed to copy modified image:\n" + err.message);
  }
}

document.addEventListener("click", (e) => {

  chrome.storage.local.get("enabled", (data) => {
  if (!data.enabled) return;
  let img = e.target;

  if (img.tagName !== "IMG") {
    img = img.querySelector?.("img");
  }

  if (img && img.src) {
    
    copyModifiedImageToClipboard(img.src);
  } else {
    //alert("No image found inside the clicked element.");
  }
  });
});