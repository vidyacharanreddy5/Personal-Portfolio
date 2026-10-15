# Vidya Charan Reddy: portfolio website

A plain HTML, CSS and JavaScript site. There is nothing to install or build.

## What's in the folder
- `index.html`: home page
- `photography.html`, `she-sanchalika.html`
- `skyroot.html`, `fashion-factory.html`, `sarayu-weaves.html`, `vineeth-jewellers.html`: brand pages
- `content.js`: **your photos and video links (the file you will edit most)**
- `css/` and `js/`: styling and page scripts (you rarely need to touch these)
- `images/`: put your photos here, one folder per section

## Add your photos
1. Resize photos first: about 1600 px on the long side, under 500 KB each (squoosh.app is a free tool).
2. Copy them into the matching folder, for example `images/event/hitex/`.
3. Open `content.js` and list the paths, for example:
   `hitex: ['images/event/hitex/01.jpg', 'images/event/hitex/02.jpg']`
4. Save. Empty lists keep the placeholders, so you can add photos little by little.

## Add video links
In `content.js` under `videos`, add `{ title: 'Episode 1', href: 'https://youtu.be/...' }`. YouTube links play on the page. Instagram and Drive links open in a new tab.

## Preview on your computer
Open a terminal in this folder and run `python3 -m http.server 8000`, then visit http://localhost:8000. (Or just double-click `index.html`.)

## Put it online with GitHub and Vercel
1. Create a free account at github.com and make a new repository, for example `portfolio`.
2. Click "Add file" then "Upload files", drag in everything inside this folder (not the folder itself), and commit.
3. Create a free account at vercel.com, choose "Add New Project", pick your GitHub repository and click Deploy. Leave all settings as they are.
4. Vercel gives you a live link. Every time you upload new photos or edit `content.js` on GitHub, the site updates by itself within a minute.
5. Optional: in Vercel, Settings then Domains lets you attach your own domain.

## Notes
- Placeholders shown as dashed boxes with a note (for example "add end date") are still to be filled in inside the HTML files.
- The tool icons are simplified look-alikes. Swap in official logos if you prefer.
