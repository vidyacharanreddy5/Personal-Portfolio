/* ============================================================
   YOUR CONTENT: the only file you need to edit for photos and links.
   Put image files in the images/ folders, then list their paths here.
   Example:  hitex: ['images/event/hitex/01.jpg', 'images/event/hitex/02.jpg']
   Empty lists keep the grey placeholders on the page.
   ============================================================ */
window.CONTENT = {
  photos: {
    featured: [],          // home page carousel (your best photos)           images/featured/
    sanchalika: ['images/sanchalika/IMG_0048.jpg', 'images/sanchalika/IMG_0094.jpg', 'images/sanchalika/IMG_8768.jpg', 'images/sanchalika/IMG_8921.jpg', 'images/sanchalika/IMG_9059.jpg', 'images/sanchalika/IMG_9243.jpg', 'images/sanchalika/IMG_9608.jpg', 'images/sanchalika/IMG_9847.jpg'],        // She Sanchalika page carousel                     images/sanchalika/
    sanchalikaCover: '',   // magazine cover for the poster, e.g. 'images/sanchalika/cover.jpg'
    fashionFactory: [],    // Fashion Factory photos                           images/fashion-factory/
    hitex: [],             // Photography > Event > HITEX                      images/event/hitex/
    campus: [],            // Photography > Event > college events etc.        images/event/campus/
    nature: [],            // Photography > Nature                             images/nature/
    street: [],            // Photography > Street                             images/street/
    other: []              // Photography > Other works                        images/other/
  },
  /* Videos: YouTube links play on the page. Other links (Instagram, Drive) open in a new tab.
     Each entry looks like { title: 'Name', href: 'https://...' } */
  videos: {
    skyroot: {
      journey: [],   // Journey to Orbit episodes
      crewCam: [{"title": "Crew Cam", "href": "https://youtube.com/shorts/PLchGEyG870?si=tZxdECHbkmji8P0r"}],
      infinity: [{"title": "Inauguration film", "href": "https://youtu.be/jjvWL5yH-c8?si=tnRhSCyUtaaP1NFv"}]
    },
    fashion: { saleReels: [] },
    sarayu: { reels: [] },
    vineeth: { reels: [] }
  }
};
