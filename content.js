/* ============================================================
   YOUR CONTENT: the only file you need to edit for photos and links.
   Put image files in the images/ folders, then list their paths here.
   Example:  hitex: ['images/event/hitex/01.jpg', 'images/event/hitex/02.jpg']
   Empty lists keep the grey placeholders on the page.
   ============================================================ */
window.CONTENT = {
  photos: {
    featured: ['images/featured/Bird1.JPG', 'images/featured/DSC_0083.JPG', 'images/featured/DSC_0955.jpg', 'images/featured/IMG_2064.jpg', 'images/featured/IMG_2708.JPG', 'images/featured/IMG_3918.jpg', 'images/featured/IMG_5314.jpg', 'images/featured/Pet1.JPG', 'images/featured/PETA.jpg', 'images/featured/Sunrise.jpg'],          // home page carousel (your best photos)           images/featured/
    sanchalika: ['images/sanchalika/IMG_0048.jpg', 'images/sanchalika/IMG_0094.jpg', 'images/sanchalika/IMG_8768.jpg', 'images/sanchalika/IMG_8921.jpg', 'images/sanchalika/IMG_9059.jpg', 'images/sanchalika/IMG_9243.jpg', 'images/sanchalika/IMG_9608.jpg', 'images/sanchalika/IMG_9847.jpg'],        // She Sanchalika page carousel                     images/sanchalika/
    sanchalikaCover: 'images/sanchalika/cover.jpg',   // magazine cover for the poster, e.g. 'images/sanchalika/cover.jpg'
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
      journey: [
        { title: 'Journey to Orbit — Episode 1', href: 'https://youtu.be/6JOnQirzeII?si=IcYbDzu9qyUSCzLO' },
        { title: 'Journey to Orbit — Episode 2', href: 'https://youtu.be/VPW3y1GGHz4?si=JsD8e3P2B9BOOtdr' },
        { title: 'Journey to Orbit — Episode 3', href: 'https://youtu.be/cnTfrZsXi1I?si=gAlgW9coKCw_L7ea' },
        { title: 'Journey to Orbit — Episode 4', href: 'https://youtu.be/O0t7Phump7U?si=Z9lzB-Ldfq7rwUvU' },
        { title: 'Journey to Orbit — Episode 5', href: 'https://youtu.be/OptYaPjnuKI?si=YF8j9gH6a5jKl5Yl' },
        { title: 'Journey to Orbit — Episode 6', href: 'https://youtu.be/wnsd2J5uJ5k?si=5Nkuc7mWMqiqg3-V' },
        { title: 'Journey to Orbit — Episode 7', href: 'https://youtu.be/m-o-asZdP8o?si=XIPseiPj6B_8H9fp' },
        { title: 'Journey to Orbit — Episode 8', href: 'https://youtu.be/1pNlVgiAYGk?si=ttdUPCBIy_61-wNz' }
      ],   // Journey to Orbit episodes
      crewCam: [{"title": "Crew Cam 1", "href": "https://www.youtube.com/shorts/NFAGHkFzR0w"}, {"title": "Crew Cam 2", "href": "https://www.youtube.com/shorts/PVMsR0YdXZY"}, {"title": "Crew Cam 3", "href": "https://www.youtube.com/shorts/PLchGEyG870"}],
      infinity: [{"title": "Inauguration film", "href": "https://youtu.be/jjvWL5yH-c8?si=tnRhSCyUtaaP1NFv"}],
      flowState: []
    },
    fashion: { saleReels: [] },
    sarayu: { reels: [] },
    vineeth: { reels: [] }
  }
};
