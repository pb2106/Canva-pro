# Canva Pro
<p align="center">
  <img src="logo1.png" alt="Logo" width="500">
</p>

"**Canva Pro VibeCoded by Naegleria**"

A Chrome Extension that allows you to click on any image in Canva and copy its **unwatermarked (tl.png)** version directly to your clipboard with a single click – only when toggled **ON** via the popup.

> No context menu. No right-click. Just pure Canva Pro vibes.

---

## 🚀 Features

- ✅ Automatically copies modified `.png` version of any clicked image (`wm_s.png` → `tl.png`)
- ✅ Clipboard copy as **PNG**
- ✅ ON/OFF toggle in the popup
- ✅ Only works when **ON**
- ✅ No background.js — light and fast
- ✅ Clean, modern UI using CSS3

---

## 📦 Installation

1. Download the extension folder.
2. Go to `chrome://extensions/`
3. Enable **Developer Mode**
4. Click on **"Load unpacked"**
5. Select the extension folder.

> Extension icon will now appear in your toolbar. Pin it for easier access.

---

## 📸 Screenshots

| Popup UI | Click in Action | Copied Result |
|----------|------------------|----------------|
| ![popup](https://i.imgur.com/v3DE0dr.png) | ![click](https://i.imgur.com/4jAqfnm.png) | ![copied](https://i.imgur.com/J3HYF3Q.png) |

---

## 🔧 Project Structure
```bash
/CanvaProAutoCopier/
│
├── manifest.json # Chrome extension manifest (v3)
├── popup.html # Extension popup UI
├── popup.js # Handles toggle button
├── content.js # Core image detection and clipboard logic
└── icon.png # Extension icon
```

---

## 🕹️ Usage

1. Click the extension icon.
2. Toggle the switch to **ON**
3. Go to any site (e.g., Canva), and click an image.
4. If it ends with `wm_s.png`, it will auto-copy the `tl.png` version to clipboard.
5. Paste anywhere (Ctrl+V) in supported apps (Discord, MS Paint, etc.)

---

## 🙏 Credits

- 💻 Coded by **Naegleria**
- 📷 Image clipboard magic powered by `canvas.toBlob()` and `ClipboardItem`

---

## 🛡️ Disclaimer

This extension is meant for **educational** and **personal automation** only. Do not use to violate any platform's terms of service.

---

