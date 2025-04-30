
import { BandProfile } from "@/types/user";

export const mockBands: BandProfile[] = [
  {
    id: "1",
    userId: "1",
    name: "The Melody Makers",
    bio: "We're a versatile 4-piece band specializing in jazz standards and contemporary blues. Perfect for cocktail hours, dinner music, and sophisticated events.",
    genre: ["Jazz", "Blues"],
    members: 4,
    areasServed: ["Boston", "Cambridge", "Somerville"],
    setList: ["Autumn Leaves", "Fly Me To The Moon", "Summertime", "Georgia On My Mind"],
    sampleSongs: [
      { title: "Our Jazz Demo", url: "https://example.com/song1" },
      { title: "Blues Sample", url: "https://example.com/song2" },
    ],
    coverPhoto: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
    approved: true,
    pricing: {
      hourlyRate: 150,
      fullEventRate: 800,
    },
  },
  {
    id: "2",
    userId: "2",
    name: "Electric Pulse",
    bio: "High-energy rock band that will get your guests dancing! We cover classic rock hits and modern chart-toppers with our own unique style.",
    genre: ["Rock", "Pop"],
    members: 5,
    areasServed: ["New York City", "Brooklyn", "Queens"],
    setList: ["Sweet Child O' Mine", "Don't Stop Believin'", "Livin' on a Prayer"],
    sampleSongs: [
      { title: "Rock Medley", url: "https://example.com/song3" },
      { title: "Pop Compilation", url: "https://example.com/song4" },
    ],
    coverPhoto: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
    approved: true,
    pricing: {
      hourlyRate: 200,
      fullEventRate: 1200,
    },
  },
  {
    id: "3",
    userId: "3",
    name: "Acoustic Journey",
    bio: "Acoustic duo offering a mellow, intimate sound perfect for ceremonies, cocktail hours, and smaller gatherings.",
    genre: ["Folk", "Acoustic"],
    members: 2,
    areasServed: ["San Francisco", "Oakland", "Marin County"],
    setList: ["Hallelujah", "Blackbird", "Landslide"],
    sampleSongs: [
      { title: "Acoustic Covers", url: "https://example.com/song5" }
    ],
    coverPhoto: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
    approved: true,
    pricing: {
      hourlyRate: 120,
      fullEventRate: 600,
    },
  },
  {
    id: "4",
    userId: "4",
    name: "Classical Strings",
    bio: "Elegant string quartet performing classical pieces and refined arrangements of popular songs.",
    genre: ["Classical", "Instrumental"],
    members: 4,
    areasServed: ["Chicago", "Evanston", "Oak Park"],
    setList: ["Canon in D", "Air on the G String", "Eine Kleine Nachtmusik"],
    sampleSongs: [
      { title: "Classical Favorites", url: "https://example.com/song6" },
      { title: "Popular Songs - Classical Style", url: "https://example.com/song7" },
    ],
    coverPhoto: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    approved: true,
    pricing: {
      hourlyRate: 180,
      fullEventRate: 1000,
    },
  },
  {
    id: "5",
    userId: "5",
    name: "Groove Masters",
    bio: "Funk and soul collective bringing infectious energy to any event. Our horn section and tight rhythm section will keep the dance floor packed all night.",
    genre: ["Funk", "Soul", "R&B"],
    members: 7,
    areasServed: ["Los Angeles", "Long Beach", "Santa Monica"],
    setList: ["Superstition", "September", "Uptown Funk", "Ain't No Sunshine"],
    sampleSongs: [
      { title: "Funk Sampler", url: "https://example.com/song8" },
      { title: "Soul Classics", url: "https://example.com/song9" },
    ],
    coverPhoto: "https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80",
    approved: true,
    pricing: {
      hourlyRate: 250,
      fullEventRate: 1500,
    },
  },
  {
    id: "6",
    userId: "6",
    name: "Cosmic Vibes",
    bio: "Electronic music producers and performers creating immersive soundscapes for modern events. Perfect for art exhibitions, product launches, and contemporary venues.",
    genre: ["Electronic", "Ambient", "Experimental"],
    members: 3,
    areasServed: ["Seattle", "Portland", "Vancouver"],
    setList: ["Custom Sets for Each Event"],
    sampleSongs: [
      { title: "Ambient Mix", url: "https://example.com/song10" },
      { title: "Electronic Showcase", url: "https://example.com/song11" },
    ],
    coverPhoto: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=800&q=80",
    approved: true,
    pricing: {
      hourlyRate: 180,
      fullEventRate: 1100,
    },
  }
];

export const mockPopularBands = [
  mockBands[1], // Electric Pulse
  mockBands[4], // Groove Masters
  mockBands[0], // The Melody Makers
  mockBands[5], // Cosmic Vibes
];
