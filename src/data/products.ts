export interface ProductVariant {
  id: string;
  name: string;
  colorHex?: string;
  image: string;
  inStock: boolean;
  sku?: string;
}

export interface Product {
  id: string;
  indexNumber: string; // e.g. "01 / 11"
  title: string;
  category: "Wall & Living" | "Table & Dining" | "Smart Storage" | "Bath & Desk" | "Lifestyle & Gifts";
  categorySlug: "wall-living" | "table-dining" | "smart-storage" | "bath-desk" | "lifestyle-gifts";
  priceRwf: number;
  originalPriceRwf?: number;
  badges?: string[];
  dimensionBadge?: string;
  designerNote: string;
  description: string;
  details: string[];
  dimensions?: string;
  materials?: string;
  images: string[];
  variants: ProductVariant[];
  featured?: boolean;
}

export interface RoomBundle {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  priceRwf: number;
  originalPriceRwf: number;
  savingsRwf: number;
  image: string;
  includedItems: string[];
  description: string;
  designerTip: string;
}

export const CATEGORIES = [
  { id: "all", label: "All Items", count: 11 },
  { id: "wall-living", label: "Wall & Living", count: 3 },
  { id: "table-dining", label: "Table & Dining", count: 1 },
  { id: "smart-storage", label: "Smart Storage", count: 3 },
  { id: "bath-desk", label: "Bath & Desk", count: 2 },
  { id: "lifestyle-gifts", label: "Lifestyle & Gifts", count: 2 },
] as const;

export const KIGALI_NEIGHBORHOODS = [
  "Kimihurura",
  "Kiyovu",
  "Nyarutarama",
  "Gacuriro",
  "Kacyiru",
  "Remera",
  "Kibagabaga",
  "Kanombe",
  "Gisozi",
  "Nyamirambo",
  "Kicukiro (Sonatubes / Niboye)",
  "Gikondo",
  "Kagugu",
  "Masaka",
  "Other Kigali Location (Specify in notes)",
] as const;

export const WHATSAPP_PHONE_NUMBER = "250788310401";
export const WHATSAPP_DISPLAY_PHONE = "+250 788 310 401";
export const INSTAGRAM_HANDLE = "@ishamiaccents";
export const TIKTOK_HANDLE = "@ishamiaccents";
export const PARENT_BRAND_URL = "https://ishamidesign.vercel.app/";

export const PRODUCTS: Product[] = [
  // 01. Handcrafted Macramé Fiber Wall Hanging
  {
    id: "macrame-fiber-wall-hanging",
    indexNumber: "01 / 11",
    title: "Handcrafted Macramé Fiber Wall Hanging (1.5m × 0.8m)",
    category: "Wall & Living",
    categorySlug: "wall-living",
    priceRwf: 48000,
    originalPriceRwf: 55000,
    badges: ["Best Seller", "Statement Piece"],
    dimensionBadge: "1.5m (W) × 0.8m (H)",
    designerNote:
      "Anchor over a low-profile linen sofa or wooden bed headboard. The organic dip-dyed forest and sage tones soften white walls with acoustic warmth and biophilic calm.",
    description:
      "Architectural-grade woven fiber wall tapestry suspended on a natural solid wood rod. Adds instant warmth, tactile depth, and acoustic softness to living rooms, bedrooms, dining spaces, and boutique Airbnbs.",
    details: [
      "Natural high-density twisted cotton fiber with dip-dyed artisan green tiers",
      "Supplied ready to mount on a 1.5m solid smoothed teak-finished timber rod",
      "Absorbs ambient echo in open-concept living spaces and high-ceiling rooms",
      "Handcrafted masterwork designed to anchor living rooms or bed headboards",
    ],
    dimensions: "1.5m Width × 0.8m Height (Solid Wood Rod included)",
    materials: "100% Organic Cotton Cord, Sustainable Solid Hardwood Rod",
    images: [
      "/images/products/macrame-wall-hanging-1.jpeg",
      "/images/products/macrame-wall-hanging-2.jpeg",
      "/images/products/macrame-wall-hanging-dims.jpeg",
    ],
    variants: [
      {
        id: "forest-sage-cream",
        name: "Forest Green, Sage & Cream",
        colorHex: "#1B3B2B",
        image: "/images/products/macrame-wall-hanging-1.jpeg",
        inStock: true,
        sku: "ISH-MAC-01",
      },
    ],
    featured: true,
  },

  // 02. Aesthetic Neutral Wall Art Collage Set
  {
    id: "aesthetic-neutral-wall-art-collage",
    indexNumber: "02 / 11",
    title: "Aesthetic Neutral Wall Art Collage Set",
    category: "Wall & Living",
    categorySlug: "wall-living",
    priceRwf: 22000,
    originalPriceRwf: 26000,
    badges: ["Curated Pack", "Easy Styling"],
    dimensionBadge: "16-Card Curated Set",
    designerNote:
      "Arrange in an asymmetric organic cluster above a study desk, bedside table, or coffee nook. Mount with brass drafting pins or frame in slim oak for a clean studio aesthetic.",
    description:
      "Curated gallery wall print collection featuring minimalist typography, architectural botanicals, and warm neutral photography. Perfect for dorms, bedrooms, home offices, and coffee nooks.",
    details: [
      "Includes 16 complementary high-definition art cards on heavyweight matte cardstock",
      "Harmonious palette of warm beige, linen white, and deep espresso tones",
      "Flexible mounting: frame individually, grid with washi tape, or hang on wire clipboards",
      "Pre-curated layout balance removes the guesswork of building an aesthetic gallery wall",
    ],
    dimensions: "Multi-print set (mix of A4 & A5 formats, total 16 curated prints)",
    materials: "300gsm Ultra-Matte Linen Finish Art Board",
    images: ["/images/products/wall-art-collage-1.jpeg"],
    variants: [
      {
        id: "warm-beige-espresso",
        name: "Warm Beige & Espresso Set",
        colorHex: "#D8C7B5",
        image: "/images/products/wall-art-collage-1.jpeg",
        inStock: true,
        sku: "ISH-ART-02",
      },
    ],
    featured: false,
  },

  // 03. Diamond-Knit Textured Throw Blanket
  {
    id: "diamond-knit-throw-blanket",
    indexNumber: "03 / 11",
    title: "Diamond-Knit Textured Throw Blanket",
    category: "Wall & Living",
    categorySlug: "wall-living",
    priceRwf: 28000,
    badges: ["Cozy Essential"],
    dimensionBadge: "130cm × 170cm",
    designerNote:
      "Drape casually over the arm of a deep sofa or fold lengthwise across the foot of the bed. Earthy Taupe calms neutral rooms, while Mustard Yellow adds a joyful Kigali sun splash.",
    description:
      "Ultra-soft diamond-weave throw blanket with twisted fringe detailing for sofas, accent chairs, and beds. Lightweight yet deliciously warm for Kigali evening breezes.",
    details: [
      "Signature diamond raised-relief knitted texture with hand-knotted fringe edges",
      "Breathable, hypoallergenic acrylic blend with plush cashmere-like hand feel",
      "Machine washable on gentle cycle; resists pilling and fading over repeated washes",
      "Drapes effortlessly over leather couches, linen reading chairs, and duvet footings",
    ],
    dimensions: "130cm × 170cm (including tassels)",
    materials: "Ultra-Soft Cashmere-Touch Micro-Knit Acrylic",
    images: [
      "/images/products/throw-blanket-taupe.jpeg",
      "/images/products/throw-blanket-mustard.jpeg",
    ],
    variants: [
      {
        id: "earthy-taupe",
        name: "Earthy Taupe Grey",
        colorHex: "#7D7B74",
        image: "/images/products/throw-blanket-taupe.jpeg",
        inStock: true,
        sku: "ISH-THR-01-TP",
      },
      {
        id: "warm-mustard",
        name: "Warm Mustard Yellow",
        colorHex: "#D89E28",
        image: "/images/products/throw-blanket-mustard.jpeg",
        inStock: true,
        sku: "ISH-THR-01-MU",
      },
    ],
    featured: true,
  },

  // 04. Artisanal Woven Table Runners
  {
    id: "artisanal-woven-table-runners",
    indexNumber: "04 / 11",
    title: "Artisanal Woven Table Runners",
    category: "Table & Dining",
    categorySlug: "table-dining",
    priceRwf: 24000,
    originalPriceRwf: 28000,
    badges: ["Dining Centerpiece"],
    dimensionBadge: "33cm × 180cm",
    designerNote:
      "Layer along the center of raw wood, granite, or glass tables. Ground with handcrafted ceramic tableware, textured clay pots, and taper candles for intimate dinners.",
    description:
      "Textured bohemian and rustic table runners crafted to elevate everyday dining tables, buffets, and coffee tables with natural artisanal elegance.",
    details: [
      "Detailed open-work lace borders with dense woven central jute stripe",
      "Hand-knotted braided fringe tassels along both drop ends",
      "Protects wooden and stone dining surfaces from heat and scratches",
      "Complements both modern Scandinavian ceramics and Rwandan pottery pieces",
    ],
    dimensions: "33cm Width × 180cm Length (standard 6-8 seater table coverage)",
    materials: "Natural Jute Fiber & Unbleached Premium Cotton Yarn",
    images: [
      "/images/products/table-runner-macrame-burlap.jpeg",
      "/images/products/table-runner-classic-jute.jpeg",
      "/images/products/table-runner-macrame-burlap-2.jpeg",
    ],
    variants: [
      {
        id: "macrame-burlap-tassel",
        name: "Macramé & Burlap Tassel (Cream/Jute)",
        colorHex: "#E3D5C0",
        image: "/images/products/table-runner-macrame-burlap.jpeg",
        inStock: true,
        sku: "ISH-TAB-01-CR",
      },
      {
        id: "classic-woven-jute",
        name: "Classic Woven Jute Fringe (Natural Tan)",
        colorHex: "#BA986E",
        image: "/images/products/table-runner-classic-jute.jpeg",
        inStock: true,
        sku: "ISH-TAB-01-NT",
      },
    ],
    featured: true,
  },

  // 05. Foldable High-Capacity Storage Pouf Ottoman
  {
    id: "foldable-storage-pouf-ottoman",
    indexNumber: "05 / 11",
    title: "Foldable High-Capacity Storage Pouf Ottoman",
    category: "Smart Storage",
    categorySlug: "smart-storage",
    priceRwf: 32000,
    originalPriceRwf: 38000,
    badges: ["Space Saver", "Multi-Functional", "Customer Favorite"],
    dimensionBadge: "76cm × 38cm × 38cm",
    designerNote:
      "Position at the foot of your bed or next to a sofa as a dual coffee tray perch and extra guest seat. Stores up to 4 blankets inside while folding flat in seconds.",
    description:
      "3-in-1 padded footstool, extra guest seat, and heavy-duty hidden storage chest. Holds throws, toys, books, or bedding, and folds completely flat in seconds when not in use.",
    details: [
      "Sturdy reinforced MDF core supports up to 130kg sitting weight capacity",
      "High-density padded foam lid doubles as a comfortable footrest or vanity stool",
      "Folds completely flat down to 5cm thickness for storage under beds or behind doors",
      "Durable linen-look textured fabric resists pet hair and daily scuffs",
    ],
    dimensions: "76cm Length × 38cm Width × 38cm Height (Folds down to 5cm flat)",
    materials: "Engineered High-Grade MDF, High-Density Foam, Linen-Textured Poly",
    images: [
      "/images/products/storage-pouf-teal.jpeg",
      "/images/products/storage-pouf-palette.jpeg",
      "/images/products/storage-pouf-stacked.jpeg",
    ],
    variants: [
      {
        id: "pouf-teal",
        name: "Teal",
        colorHex: "#2E7D88",
        image: "/images/products/storage-pouf-teal.jpeg",
        inStock: true,
        sku: "ISH-POUF-TL",
      },
      {
        id: "pouf-beige",
        name: "Warm Beige",
        colorHex: "#D8C7B5",
        image: "/images/products/storage-pouf-palette.jpeg",
        inStock: true,
        sku: "ISH-POUF-BG",
      },
      {
        id: "pouf-charcoal",
        name: "Charcoal Grey",
        colorHex: "#4A4D52",
        image: "/images/products/storage-pouf-stacked.jpeg",
        inStock: true,
        sku: "ISH-POUF-CG",
      },
      {
        id: "pouf-brown",
        name: "Espresso Brown",
        colorHex: "#4A3222",
        image: "/images/products/storage-pouf-palette.jpeg",
        inStock: true,
        sku: "ISH-POUF-BR",
      },
      {
        id: "pouf-sage",
        name: "Sage Green",
        colorHex: "#8A9A86",
        image: "/images/products/storage-pouf-palette.jpeg",
        inStock: true,
        sku: "ISH-POUF-SG",
      },
      {
        id: "pouf-slate",
        name: "Slate Blue",
        colorHex: "#5E778E",
        image: "/images/products/storage-pouf-palette.jpeg",
        inStock: true,
        sku: "ISH-POUF-BL",
      },
    ],
    featured: true,
  },

  // 06. Clear-Window Foldable Wardrobe Storage Bag
  {
    id: "clear-window-wardrobe-storage-bag",
    indexNumber: "06 / 11",
    title: "Clear-Window Foldable Wardrobe Storage Bag",
    category: "Smart Storage",
    categorySlug: "smart-storage",
    priceRwf: 16000,
    originalPriceRwf: 20000,
    badges: ["Closet Organizer"],
    dimensionBadge: "66L Capacity",
    designerNote:
      "Stack in pairs on upper closet shelves or under bed frames. The transparent front window eliminates the need to unpack to find seasonal blankets or extra pillows.",
    description:
      "Stackable closet organizer with front and top zipper access, reinforced carry handles, and a transparent viewing window for duvets, sweaters, bed linens, and seasonal apparel.",
    details: [
      "Dual opening system: top lid for packing and wide front flap for sliding items out",
      "Clear transparent PVC front panel lets you identify contents instantly without unpacking",
      "Internal steel wire frame maintains rigid box shape even when empty and stacks easily",
      "Foldable flat in 3 seconds when empty to save maximum closet shelf space",
    ],
    dimensions: "50cm × 40cm × 33cm (66L Extra Large Capacity)",
    materials: "Thick Oxford Fabric, Waterproof PE Coating, Clear PVC, Steel Frame",
    images: [
      "/images/products/wardrobe-storage-grey.jpeg",
      "/images/products/wardrobe-storage-stack.jpeg",
    ],
    variants: [
      {
        id: "storage-cool-grey",
        name: "Cool Grey",
        colorHex: "#A0A5AA",
        image: "/images/products/wardrobe-storage-grey.jpeg",
        inStock: true,
        sku: "ISH-BAG-GY",
      },
      {
        id: "storage-warm-beige",
        name: "Warm Beige",
        colorHex: "#C9BA9B",
        image: "/images/products/wardrobe-storage-stack.jpeg",
        inStock: true,
        sku: "ISH-BAG-BG",
      },
    ],
    featured: false,
  },

  // 07. "Laundry Deluxe" Structured Canvas Hamper
  {
    id: "laundry-deluxe-canvas-hamper",
    indexNumber: "07 / 11",
    title: '"Laundry Deluxe" Structured Canvas Hamper',
    category: "Smart Storage",
    categorySlug: "smart-storage",
    priceRwf: 26000,
    originalPriceRwf: 30000,
    badges: ["Modern Essential"],
    dimensionBadge: "40cm (D) × 50cm (H)",
    designerNote:
      "Leave on display in master bathrooms or laundry suites. The internal wire rim holds its crisp cylindrical silhouette even when completely empty.",
    description:
      "Freestanding two-tone canvas laundry hamper featuring vegan leather riveted handles, water-resistant interior lining, and modern typographic print.",
    details: [
      "Rigid wire rim at the top keeps the hamper upright and structured even when completely empty",
      "Reinforced cognac vegan leather handles secured with steel rivets for heavy loads",
      "Moisture-proof interior coating wipes clean easily with a damp cloth",
      "Folds completely flat for easy moving or packing away when laundry day is done",
    ],
    dimensions: "40cm Diameter × 50cm Height (Holds approx 65 Liters)",
    materials: "Heavy-Duty Two-Tone Canvas, Vegan Leather, Waterproof PE Lining",
    images: [
      "/images/products/canvas-hamper-gray.jpeg",
      "/images/products/canvas-hamper-brown.jpeg",
    ],
    variants: [
      {
        id: "hamper-charcoal-gray",
        name: "Charcoal Gray",
        colorHex: "#686D76",
        image: "/images/products/canvas-hamper-gray.jpeg",
        inStock: true,
        sku: "ISH-HMP-GR",
      },
      {
        id: "hamper-warm-brown",
        name: "Warm Brown",
        colorHex: "#7B6252",
        image: "/images/products/canvas-hamper-brown.jpeg",
        inStock: true,
        sku: "ISH-HMP-BR",
      },
    ],
    featured: false,
  },

  // 08. Plush Cushioned Toilet Seat Cover
  {
    id: "plush-cushioned-toilet-seat-cover",
    indexNumber: "08 / 11",
    title: "Plush Cushioned Toilet Seat Cover",
    category: "Bath & Desk",
    categorySlug: "bath-desk",
    priceRwf: 12000,
    badges: ["Cozy Bath Accent"],
    dimensionBadge: "Universal 43cm × 38cm",
    designerNote:
      "A playful tactile touch that prevents the cold shock of ceramic in cool Kigali mornings. Features a hygienic lifting patch so fingers never touch the seat rim directly.",
    description:
      "Washable, ultra-soft cushioned seat cover with a hygienic embroidered lift tab for year-round bathroom comfort, warm touch, and playful aesthetic charm.",
    details: [
      "Thick plush sherpa-style fleece eliminates cold ceramic shock on cool Kigali mornings",
      "Hygienic embroidered animal pull-tab allows lifting the seat without touching the ring",
      "Full 360-degree zipper installation fits both O-shape and U-shape standard toilet seats",
      "Waterproof PU leather bottom is easy to wipe down and 100% machine washable",
    ],
    dimensions: "Universal 43cm × 38cm stretch-fit (fits standard O & U toilet bowls)",
    materials: "High-Density Coral Fleece Top, Waterproof PU Leather Underside",
    images: [
      "/images/products/toilet-seat-panda-green.jpeg",
      "/images/products/toilet-seat-bear-peach.jpeg",
    ],
    variants: [
      {
        id: "seat-matcha-panda",
        name: "Matcha Green (Panda Patch)",
        colorHex: "#8AA348",
        image: "/images/products/toilet-seat-panda-green.jpeg",
        inStock: true,
        sku: "ISH-TOI-GR",
      },
      {
        id: "seat-peach-bear",
        name: "Warm Peach/Orange (Bear Patch)",
        colorHex: "#E38A5F",
        image: "/images/products/toilet-seat-bear-peach.jpeg",
        inStock: true,
        sku: "ISH-TOI-OR",
      },
    ],
    featured: false,
  },

  // 09. Retro Minimalist Flip Desk Calendar
  {
    id: "retro-minimalist-flip-desk-calendar",
    indexNumber: "09 / 11",
    title: "Retro Minimalist Flip Desk Calendar",
    category: "Bath & Desk",
    categorySlug: "bath-desk",
    priceRwf: 18000,
    originalPriceRwf: 22000,
    badges: ["Workplace Aesthetic"],
    dimensionBadge: "20cm × 8cm × 14cm",
    designerNote:
      "Style beside a stone coffee mug, desk lamp, or bookshelf. Manually flipping the bold monochrome date cards creates an intentional, screen-free morning ritual.",
    description:
      "Perpetual mid-century modern flip calendar for office desks, bookshelves, console tables, and bedside styling. Never expires and adds nostalgic graphic appeal.",
    details: [
      "Perpetual manual flip design: turn date cards daily for a satisfying mindful morning ritual",
      "Bold modernist typography on heavy-duty durable PVC flip tiles that never tear",
      "Weighted matte black arch stand with non-scratch silicone base pads for tabletop stability",
      "Timeless desk accessory for creative studios, home offices, and corporate workspaces",
    ],
    dimensions: "20cm Width × 8cm Depth × 14cm Height",
    materials: "Matte Coated ABS Base Frame, Rigid PVC Flip Cards",
    images: ["/images/products/flip-desk-calendar.jpeg"],
    variants: [
      {
        id: "cal-matte-black-white",
        name: "Matte Black & White",
        colorHex: "#1E1E1E",
        image: "/images/products/flip-desk-calendar.jpeg",
        inStock: true,
        sku: "ISH-CAL-BW",
      },
    ],
    featured: false,
  },

  // 10. Portable Mini Karaoke Set with 2 Wireless Mics
  {
    id: "portable-mini-karaoke-set",
    indexNumber: "10 / 11",
    title: "Portable Mini Karaoke Set with 2 Wireless Mics",
    category: "Lifestyle & Gifts",
    categorySlug: "lifestyle-gifts",
    priceRwf: 45000,
    originalPriceRwf: 52000,
    badges: ["Top Gift for Kids", "Viral Hit", "Party Ready"],
    dimensionBadge: "Dual Wireless Mics",
    designerNote:
      "Keep ready on a living room credenza for impromptu weekend singalongs, family game nights, or outdoor garden terrace parties. The dual microphones make it an unforgettable holiday gift.",
    description:
      "Compact Bluetooth speaker with vibrant RGB LED light halo and two rechargeable wireless microphones with fun voice-changing effects for family nights and gatherings.",
    details: [
      "Includes 1 portable Hi-Fi RGB speaker with leather handle + 2 dual-channel wireless microphones",
      "Built-in 5 voice modes: Original, Monster, Child, Female, and Echo Reverb effects",
      "Bluetooth 5.3 + Micro SD card + AUX inputs; fast USB-C rechargeable battery (up to 6 hrs play)",
      "Vibrant dynamic RGB light ring that pulses to rhythm; viral hit on TikTok and Instagram",
    ],
    dimensions: "Speaker: 10cm × 10cm × 8cm | Mics: 13.5cm length each",
    materials: "Satin ABS Body, Mesh Metal Grille, Leatherette Carrying Strap",
    images: [
      "/images/products/mini-karaoke-cream-studio.jpeg",
      "/images/products/mini-karaoke-cream-lifestyle.jpeg",
      "/images/products/mini-karaoke-pink-lifestyle.jpeg",
      "/images/products/mini-karaoke-cream-box.jpeg",
    ],
    variants: [
      {
        id: "karaoke-cream-white",
        name: "Cream White",
        colorHex: "#F7F3E9",
        image: "/images/products/mini-karaoke-cream-studio.jpeg",
        inStock: true,
        sku: "ISH-KAR-CRM",
      },
      {
        id: "karaoke-pastel-pink",
        name: "Pastel Pink",
        colorHex: "#F2CAD2",
        image: "/images/products/mini-karaoke-pink-lifestyle.jpeg",
        inStock: true,
        sku: "ISH-KAR-PNK",
      },
    ],
    featured: true,
  },

  // 11. Everyday Carry & Self-Care Collection
  {
    id: "everyday-carry-self-care-collection",
    indexNumber: "11 / 11",
    title: "Everyday Carry & Self-Care Collection",
    category: "Lifestyle & Gifts",
    categorySlug: "lifestyle-gifts",
    priceRwf: 38000,
    badges: ["Lifestyle Duo", "Travel Essential"],
    dimensionBadge: "Curated Travel Edition",
    designerNote:
      "Engineered for fluid Kigali urban transit. Choose between the understated anti-theft convertible backpack or the pocket terracotta grooming set designed for sleek weekend escapes.",
    description:
      "Curated lifestyle accessories designed for modern daily movement. Select between our stylish anti-theft convertible backpack or the compact pocket terracotta manicure kit.",
    details: [
      "Option A: Two-tone convertible backpack features waterproof nylon, anti-theft rear zipper, and plush pom-pom charm",
      "Option B: 6-piece manicure grooming kit housed in a terracotta pocket case with carbon steel rose-toned tools",
      "Designed for stylish commuters, university students, and frequent Kigali weekend travelers",
      "Gift-ready presentation with embossed branding accents",
    ],
    dimensions: "Backpack: 32cm × 30cm × 14cm | Manicure Set: 11cm × 11cm × 3cm",
    materials: "Waterproof Oxford Nylon & Terracotta Hard-Shell Case",
    images: [
      "/images/products/convertible-backpack-taupe.jpeg",
      "/images/products/manicure-set-terracotta.jpeg",
    ],
    variants: [
      {
        id: "backpack-taupe-espresso",
        name: "Two-Tone Convertible Backpack / Shoulder Bag",
        colorHex: "#B8ADA1",
        image: "/images/products/convertible-backpack-taupe.jpeg",
        inStock: true,
        sku: "ISH-BAG-BP",
      },
      {
        id: "manicure-set-terracotta",
        name: "6-Piece Terracotta Travel Manicure Set",
        colorHex: "#C86D51",
        image: "/images/products/manicure-set-terracotta.jpeg",
        inStock: true,
        sku: "ISH-MAN-TC",
      },
    ],
    featured: true,
  },
];

// Room Bundles Data
export const ROOM_BUNDLES: RoomBundle[] = [
  {
    id: "living-room-statement",
    title: "The Living Room Statement Bundle",
    subtitle: "Tactile Scandi-African Warmth",
    tag: "Living Room Edit • Save 13,000 RWF",
    priceRwf: 95000,
    originalPriceRwf: 108000,
    savingsRwf: 13000,
    image: "/images/products/macrame-wall-hanging-1.jpeg",
    includedItems: [
      "Handcrafted Macramé Fiber Wall Hanging (1.5m × 0.8m)",
      "Diamond-Knit Textured Throw Blanket (Choice of Taupe or Mustard)",
      "Foldable Storage Pouf Ottoman (Hidden Storage + Footrest)",
    ],
    description:
      "Our signature living room trio: transform bare walls with artisan woven macramé, add tactile comfort with the diamond throw, and keep clutter out of sight with the cushioned storage pouf.",
    designerTip:
      "Style the macramé centrally over your main sofa, drape the throw blanket casually over the corner, and position the pouf as an organic cocktail footstool.",
  },
  {
    id: "serene-closet-reset",
    title: "The Serene Closet Reset Bundle",
    subtitle: "Aesthetic Wardrobe Sanctuary",
    tag: "Closet Suite • Save 12,000 RWF",
    priceRwf: 82000,
    originalPriceRwf: 94000,
    savingsRwf: 12000,
    image: "/images/products/canvas-hamper-brown.jpeg",
    includedItems: [
      '2x Clear-Window Foldable Wardrobe Bags (66L each)',
      '"Laundry Deluxe" Structured Canvas Hamper',
      "Foldable High-Capacity Storage Pouf Ottoman",
    ],
    description:
      "A complete closet and dressing room overhaul. Organizes blankets, linens, and laundry into architectural containers that look gorgeous even in open closets.",
    designerTip:
      "Stack the two clear-window bags on your closet's upper shelves, place the structured hamper in your dressing corner, and tuck extra pillows into the ottoman.",
  },
  {
    id: "hosted-dining-study",
    title: "The Hosted Dining & Study Suite",
    subtitle: "Artisanal Table & Desk Essentials",
    tag: "Dining & Study • Save 8,000 RWF",
    priceRwf: 56000,
    originalPriceRwf: 64000,
    savingsRwf: 8000,
    image: "/images/products/table-runner-classic-jute.jpeg",
    includedItems: [
      "Artisanal Woven Table Runner (Macramé / Natural Tan Jute)",
      "Retro Minimalist Flip Desk Calendar (Perpetual Tile)",
      "Aesthetic Neutral Wall Art Collage Set (16-Print Pack)",
    ],
    description:
      "Curate your dining table and creative work surface with organic jute textiles, perpetual modernist desk typography, and warm beige architectural art cards.",
    designerTip:
      "Run the jute runner along your dining table with local ceramics, place the flip calendar beside your laptop, and frame the prints above your workstation.",
  },
];

// Delivery & Timezone Logic
export interface DeliveryStatusInfo {
  isOpen: boolean;
  dayName: string;
  catTimeStr: string;
  statusHeadline: string;
  statusBadge: string;
  nextOperatingDay: string;
  message: string;
}

export function getCatDeliveryStatus(dateOverride?: Date): DeliveryStatusInfo {
  const now = dateOverride || new Date();

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Kigali",
    weekday: "long",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const parts = formatter.formatToParts(now);
  const weekdayPart = parts.find((p) => p.type === "weekday")?.value || "Monday";

  const operatingDays = ["Monday", "Tuesday", "Friday", "Saturday"];
  const isOpen = operatingDays.includes(weekdayPart);

  let nextOperatingDay = "Friday";
  if (weekdayPart === "Wednesday" || weekdayPart === "Thursday") {
    nextOperatingDay = "Friday";
  } else if (weekdayPart === "Sunday") {
    nextOperatingDay = "Monday";
  } else if (weekdayPart === "Tuesday") {
    nextOperatingDay = "Friday";
  } else if (weekdayPart === "Saturday") {
    nextOperatingDay = "Monday";
  } else {
    nextOperatingDay = "Tomorrow";
  }

  const timeFormatted = new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Kigali",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(now);

  if (isOpen) {
    return {
      isOpen: true,
      dayName: weekdayPart,
      catTimeStr: `${timeFormatted} CAT`,
      statusHeadline: "Open for Dispatch Today",
      statusBadge: "🟢 OPEN TODAY",
      nextOperatingDay,
      message:
        "🟢 We are OPEN for dispatch today! Order now for delivery within 4 operating days.",
    };
  } else {
    return {
      isOpen: false,
      dayName: weekdayPart,
      catTimeStr: `${timeFormatted} CAT`,
      statusHeadline: `Non-Delivery Day (${weekdayPart})`,
      statusBadge: "🕒 CLOSED TODAY",
      nextOperatingDay,
      message:
        "🕒 Today is a Non-Delivery Day (Closed Wed, Thu & Sun). Orders placed today are queued for priority dispatch on our next operating day!",
    };
  }
}

export function formatRwf(amount: number): string {
  return new Intl.NumberFormat("en-RW", {
    style: "decimal",
    maximumFractionDigits: 0,
  }).format(amount) + " RWF";
}

export function generateSingleItemWhatsAppLink(
  product: Product,
  selectedVariant: ProductVariant,
  quantity: number = 1
): string {
  const priceFormatted = formatRwf(product.priceRwf * quantity);
  const text =
    `Hello Ishami Accents! 🌿 I would like to place an order:\n` +
    `- ${quantity}x ${product.title} (Variant: ${selectedVariant.name}) - ${priceFormatted}\n\n` +
    `Total Estimate: ${priceFormatted}\n` +
    `I note that deliveries run on Mon, Tue, Fri & Sat (within 4 operating days across Kigali).\n\n` +
    `Could you please confirm availability and delivery?`;

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function generateBundleWhatsAppLink(bundle: RoomBundle): string {
  const priceFormatted = formatRwf(bundle.priceRwf);
  const text =
    `Hello Ishami Accents! 🌿 I would like to order the Curated Bundle:\n` +
    `✨ ${bundle.title} (${bundle.subtitle})\n` +
    `Special Bundle Price: ${priceFormatted} (Save ${formatRwf(bundle.savingsRwf)})\n\n` +
    `Included Items:\n` +
    bundle.includedItems.map((item) => `• ${item}`).join("\n") +
    `\n\nI understand delivery takes place across Kigali within 4 operating days (Mon, Tue, Fri & Sat).\n` +
    `Please confirm dispatch and delivery availability!`;

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

export interface CartItemData {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export function generateCartWhatsAppLink(
  items: CartItemData[],
  customerName: string,
  neighborhood: string,
  notes?: string
): string {
  const total = items.reduce((sum, item) => sum + item.product.priceRwf * item.quantity, 0);

  const itemsList = items
    .map(
      (item) =>
        `- ${item.quantity}x ${item.product.title} (Variant: ${item.variant.name}) - ${formatRwf(
          item.product.priceRwf * item.quantity
        )}`
    )
    .join("\n");

  const text =
    `Hello Ishami Accents! 🌿 I would like to place an order:\n` +
    `${itemsList}\n\n` +
    `Total Estimate: ${formatRwf(total)}\n` +
    `Customer Name: ${customerName || "Customer"}\n` +
    `Delivery Neighborhood: ${neighborhood || "Kigali"}\n` +
    (notes ? `Delivery Note: ${notes}\n` : "") +
    `I note that deliveries run on Mon, Tue, Fri & Sat (within 4 operating days).\n\n` +
    `Please confirm my order and dispatch timeline. Thank you!`;

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}
