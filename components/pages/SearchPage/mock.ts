import { hotelImageService } from "static/hotelImageService";

const hotelChain = [
  {
    name: "Rexar Al-Arab Sunshine",
    region: "Dubai, UAE",
    price: 1100,
    imageUrl: hotelImageService[1],
    description: "LOREN IPSUM",
    onClick: () => {},
    features: ["SPA"],
  },
  {
    name: "Rexar Alfi Remark",
    region: "Budapest, Hungary",
    price: 950,
    imageUrl: hotelImageService["2"],
    description: "LOREN IPSUM",
    onClick: () => {},
    features: ["Swimming Pool", "Bowling"],
  },
  {
    name: "Rexar Dream Yorker",
    region: "New York, USA",
    price: 700,
    imageUrl: hotelImageService["7"],
    description: "LOREN IPSUM",
    onClick: () => {},
    features: ["Yacht", "SPA"],
  },
  {
    name: "Rexar Morocco Dream",
    region: "Morocco, Morocco",
    price: 650,
    imageUrl: hotelImageService["4"],
    description: "LOREN IPSUM",
    onClick: () => {},
    features: ["Swimming Pool"],
  },
  {
    name: "Rexar Vinta Mante",
    region: "Paris, France",
    price: 350,
    imageUrl: hotelImageService["5"],
    description: "LOREN IPSUM",
    onClick: () => {},
    features: ["SPA"],
  },
  {
    name: "Rexar Nur Plaza",
    region: "Nur-Sultan, Kazakhstan",
    price: 250,
    imageUrl: hotelImageService["6"],
    description: "LOREN IPSUM",
    onClick: () => {},
    features: ["SPA"],
  },
  {
    name: "Rexar Apple Paradise",
    region: "Almaty, Kazakhstan",
    price: 400,
    imageUrl: hotelImageService["8"],
    description: "SPA, Bowling",
    onClick: () => {},
    features: ["SPA", "Bowling"],
  },
  {
    name: "Rexar Moscow Sunset",
    region: "Moscow, Russia",
    price: 600,
    imageUrl: hotelImageService["9"],
    description: "SPA, Yacht",
    onClick: () => {},
    features: ["SPA", "Yacht"],
  },
];

export default hotelChain;
