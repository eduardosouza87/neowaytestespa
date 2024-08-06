const mockFavorites = [
  {
    author: "Nadeem Sarwar, Shreya Fotedar",
    content: "CBalance is another company working to tackle the heat problem, specifically for underprivileged households living in tightly packed slums, ghettos, and poorly planned neighborhoods. Led by Vivek Gil… [+3227 chars]",
    description: "Cheap, low-energy evaporative cooling devices are keeping water, food, people, and even whole buildings cool across India.",
    publishedAt: "2024-07-09T15:42:42Z",
    source: {id: "wired", name: "Wired"},
    title: "This Ancient Technology Is Helping Millions Stay Cool",
    url: "https://www.wired.com/story/evaporative-cooling-devices-coolant-clay-matka-mitticool-india-heat-wave/",
    urlToImage: "https://media.wired.com/photos/6672c421e0704c563b4e7b77/191:100/w_1280,c_limit/GettyImages-80973767.jpg"
  },
  {
    author: "Aarian Marshall",
    content: "Sure, duh: Vehicle lights serve the important and vital safety function of allowing drivers to see where theyre going, and everyone else to see when theyre coming. But for decades, car designers have… [+2972 chars]",
    description: "New technology and a drive toward electrified powertrains have converged to create a flashy new car-lighting landscape. What comes next could be an international light language.",
    publishedAt: "2024-08-02T11:00:00Z",
    source: {id: "wired", name: "Wired"},
    title: "You Won’t Believe What Car Headlights Have in Store",
    url: "https://www.wired.com/story/you-wont-believe-what-car-headlights-have-in-store/",
    urlToImage: "https://media.wired.com/photos/66ab9e4105e2c8a2510afd5c/191:100/w_1280,c_limit/Lucid%20Headlight%20Rendering%20(1).gif"
  },
  {
    author: "Germain Lussier",
    content: "Ask any comic book fan what the holy grail of comics is and they’ll all give the same answer. It’s Action Comics #1, the first appearance of Superman. Even in not great condition, the comic is so cul… [+2862 chars]",
    description: "Netflix's auction reality show has grown from sports to comics, Pokémon, technology, video games, and more.",
    publishedAt: "2024-07-05T17:35:35Z",
    source: {id: null, name: "Gizmodo.com"},
    title: "Netflix’s King of Collectibles Has Become a Pop Culture Dreamland",
    url: "https://gizmodo.com/netflix-king-of-collectibles-ken-goldin-action-comics-1-2000376931",
    urlToImage: "https://gizmodo.com/app/uploads/2024/07/Screenshot-2024-07-05-at-9.36.31 AM.jpg"
  }
]

export default defineEventHandler(async () => {
  // só para emular um loading
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockFavorites
})