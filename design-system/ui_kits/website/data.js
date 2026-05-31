/* CreASHions by Asha — store data loader.
   The REAL editable source of truth is content/store.json (Asha edits that, or uses
   admin.html). This file holds an identical embedded copy as a fallback so the site
   still works if the JSON can't be fetched (e.g. opened directly from disk). */

const PRODUCT_IMG = '../../assets/products/';

window.DEFAULT_STORE = {
  site: {
    brandPre: 'Cre', brandAccent: 'ASH', brandPost: 'ions', brandSub: 'by Asha',
    heroEyebrow: 'Hand-poured resin art · Cypress, Texas',
    heroTitle: 'Drinkware as art,',
    heroScript: 'poured by hand',
    heroSub: 'Tumblers, earrings, and keepsakes made one at a time — sealed under glass-smooth resin. No two pieces are ever alike.',
    promoBar: 'Free shipping on every order — always · Custom & personalized pieces welcome',
    stats: [
      { big: '5.0★', small: '32 reviews' },
      { big: '91', small: 'one-of-a-kind pieces' },
      { big: '3 yrs', small: 'making + shipping' },
    ],
    footerBlurb: 'Hand-poured resin art, made one at a time in Cypress, Texas. No two pieces alike.',
  },
  categories: ['All', 'Tumblers', 'Earrings', 'Coasters', 'Resin Pens', 'Wine Holders', 'Indian Decor', 'Accessory'],
  collections: [
    { id: 'coastal', name: 'Coastal & Ocean', tagline: 'Waves, geodes & sea life', heroImage: 'ocean-coaster.png', colors: ['#00ADBB', '#1E6390', '#00263A'] },
    { id: 'floral', name: 'Floral & Honeybee', tagline: 'Blooms, bees & honeycomb', heroImage: 'honeybee-tumbler.png', colors: ['#D07F99', '#EAD9B8', '#8E4A66'] },
    { id: 'western', name: 'Western & Wild', tagline: 'Cows, leopard & leather', heroImage: 'highland-cow-tumbler.png', colors: ['#A8853F', '#5E8C6A', '#3A2C31'] },
    { id: 'festive', name: 'Fall & Festive', tagline: 'Pumpkins, ghosts & seasons', heroImage: 'fall-pumpkin-tumbler.png', colors: ['#C9A66B', '#8E4A66', '#5A484F'] },
    { id: 'spiritual', name: 'Spiritual & Indian Decor', tagline: 'Om, lotus & Pichwai art', heroImage: 'om-wall-hanging.png', colors: ['#005581', '#C9A66B', '#E20177'] },
  ],
  products: [
    { id: 'sea-turtle', name: 'Sea Turtle Ocean Tumbler', cat: 'Tumblers', price: 55, image: 'sea-turtle-tumbler.png', theme: 'Coastal', size: '20oz', badge: 'Bestseller', blurb: 'A 20oz stainless tumbler wrapped in a hand-laid sea-turtle reef scene, sealed under glass-smooth resin.' },
    { id: 'honeybee', name: 'Honey Bee Rustic Floral', cat: 'Tumblers', price: 58, image: 'honeybee-tumbler.png', theme: 'Floral', size: '30oz', badge: 'Bestseller', blurb: 'Rustic wood-grain base layered with pressed-look florals, honeycomb shimmer and tiny gold bees.' },
    { id: 'butterfly', name: 'Patriotic Butterfly Tumbler', cat: 'Tumblers', price: 55, image: 'butterfly-tumbler.png', theme: 'Patriotic', size: '20oz', badge: 'Ready to ship', blurb: 'White glitter base with a hand-cut floral butterfly in red, white and blue.' },
    { id: 'boho-floral', name: 'Boho Floral Checkerboard', cat: 'Tumblers', price: 55, image: 'boho-floral-tumbler.png', theme: 'Floral', size: '20oz', badge: '', blurb: 'Warm checkerboard glitter wrapped with a tumble of autumn florals.' },
    { id: 'ghost', name: 'Halloween Ghost Glitter', cat: 'Tumblers', price: 30, image: 'ghost-tumbler.png', theme: 'Festive', size: '12oz', badge: '', blurb: 'Black glitter base with a retro ghost and rainbow stripe — small-batch seasonal.' },
    { id: 'fall-pumpkin', name: 'Fall Vibes Pumpkin', cat: 'Tumblers', price: 30, image: 'fall-pumpkin-tumbler.png', theme: 'Festive', size: '12oz', badge: '', blurb: 'Copper glitter, leopard pumpkins and a bold “Fall Vibes” cut.' },
    { id: 'floral-white', name: 'Floral White Glitter', cat: 'Tumblers', price: 55, image: 'floral-white-tumbler.png', theme: 'Floral', size: '20oz', badge: '', blurb: 'Soft white glitter base with a romantic rose-and-peony bouquet.' },
    { id: 'highland-cow', name: 'Highland Cow Sunflower', cat: 'Tumblers', price: 55, image: 'highland-cow-tumbler.png', theme: 'Western', size: '20oz', badge: 'Bestseller', blurb: 'Teal glitter with a hand-placed highland cow framed in sunflowers and roses.' },
    { id: 'midnight-butterfly', name: 'Midnight Blue Butterfly', cat: 'Tumblers', price: 55, image: 'midnight-butterfly-tumbler.png', theme: 'Galaxy', size: '20oz', badge: '', blurb: 'Deep midnight glitter with iridescent butterflies drifting up the side.' },
    { id: 'ocean-earrings', name: 'Blue Teal Ocean Wave Dangles', cat: 'Earrings', price: 15, image: 'ocean-wave-earrings.png', theme: 'Coastal', size: '', badge: '', blurb: 'Round resin dangles poured with real ocean-wave layers and gold sand.' },
    { id: 'leopard-earrings', name: 'Leopard Teardrop Earrings', cat: 'Earrings', price: 18, image: 'leopard-earrings.png', theme: 'Western', size: '', badge: '', blurb: 'Polymer-clay teardrops with a hand-painted leopard print.' },
    { id: 'polkadot-earrings', name: 'Polka Dot Heart Earrings', cat: 'Earrings', price: 14, image: 'polkadot-earrings.png', theme: 'Floral', size: '', badge: '', blurb: 'Leather-effect florals stacked over polka-dot circles.' },
    { id: 'green-marble-earrings', name: 'Green Marble Clay Earrings', cat: 'Earrings', price: 11, image: 'green-marble-earrings.png', theme: 'Coastal', size: '', badge: '', blurb: 'Marbled emerald polymer clay, light as a feather.' },
    { id: 'ocean-coaster', name: 'Ocean Beach Waves Coasters', cat: 'Coasters', price: 45, image: 'ocean-coaster.png', theme: 'Coastal', size: '', badge: 'Bestseller', blurb: 'A set of coastal wave coasters with a matching resin holder.' },
    { id: 'coffee-coaster', name: 'Coffee Bean Resin Coasters', cat: 'Coasters', price: 48, image: 'coffee-coaster.png', theme: 'Floral', size: '', badge: '', blurb: 'Real roasted coffee beans suspended in clear resin with a holder.' },
    { id: 'whiskey-coaster', name: 'Whiskey Quotes Coaster Set', cat: 'Coasters', price: 48, image: 'whiskey-coaster.png', theme: 'Western', size: '', badge: '', blurb: 'Smoky black coasters with hand-lettered whiskey quotes.' },
    { id: 'glitter-pens', name: 'Custom Glitter Pens', cat: 'Resin Pens', price: 12, image: 'glitter-pens.png', theme: 'Floral', size: '', badge: '', blurb: 'Glitter and mica pens, personalised to match your set — bookmarks too.' },
    { id: 'badge-reels', name: 'Badge Reels & Lanyards', cat: 'Resin Pens', price: 11, image: 'badge-reels.png', theme: 'Floral', size: '', badge: '', blurb: 'Beaded badge reels and keychains in every theme.' },
    { id: 'wine-holder', name: 'Ocean Geode Wine Holder', cat: 'Wine Holders', price: 23, image: 'wine-holder.png', theme: 'Coastal', size: '', badge: '', blurb: 'An agate-edge geode slab that cradles your glass and bottle together.' },
    { id: 'om-wall', name: 'Om Wall Hanging', cat: 'Indian Decor', price: 18, image: 'om-wall-hanging.png', theme: 'Spiritual', size: '', badge: '', blurb: 'Jewel-toned Om tiles with tasseled drops — a spiritual home accent.' },
    { id: 'tealight-set', name: 'Pichwai Lotus Tealight Set', cat: 'Indian Decor', price: 20, image: 'tealight-set.png', theme: 'Spiritual', size: '', badge: 'Bestseller', blurb: 'Lotus-art tealight holders inspired by Pichwai painting.' },
    { id: 'luggage-tags', name: 'Custom Luggage Tags', cat: 'Accessory', price: 17, image: 'luggage-tags.png', theme: 'Coastal', size: '', badge: '', blurb: 'Travel-cut luggage tags personalised with names and sayings.' },
  ],
};

/* Normalize a store object into the globals the app reads.
   Adds full image paths so components can use p.img / c.hero directly. */
window.applyStore = function (store) {
  const s = store || window.DEFAULT_STORE;
  window.SITE = s.site || window.DEFAULT_STORE.site;
  window.CATEGORIES = s.categories || ['All'];
  window.COLLECTIONS = (s.collections || []).map(c => ({ ...c, hero: PRODUCT_IMG + c.heroImage }));
  window.PRODUCTS = (s.products || []).map(p => ({ ...p, img: PRODUCT_IMG + p.image }));
};

/* Apply embedded defaults immediately so globals exist even before fetch. */
window.applyStore(window.DEFAULT_STORE);
