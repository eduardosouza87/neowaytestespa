export const useGetFavorites = async () => {

  const mockFavorites = [
    {
      author: "Jessica Klein",
      content: "Trumps speech is an hour behind. A half hour into the wait, restless attendees start chanting Trump. The woman sitting in front of me murmurs her own chant:\r\nBitcoin, bitcointhats what they should be… [+3147 chars]",
      description: "At Bitcoin 2024 conference in Nashville, Trump is finally telling crypto enthusiasts what they want to hear.",
      publishedAt: "2024-07-28T12:43:07Z",
      source: {id: "wired", name: "Wired"},
      title: "Bitcoin Bros Go Wild for Donald Trump",
      url: "https://www.wired.com/story/bitcoin-bros-go-wild-for-donald-trump/",
      urlToImage: "https://media.wired.com/photos/66a56f21bf2909f08a634953/191:100/w_1280,c_limit/Crypto-Bros-Business-2162975355.jpg"
    },
    {
      author: "Steven Levy",
      content: "Donald Trump is an unlikely crypto ally. The power of bitcoin, embodied in Satoshi Nakamotos founding document, is that it frees participants from murky assessments of trust, instead relying on the b… [+4248 chars]",
      description: "At the Bitcoin 2024 conference in Nashville, Donald Trump promised the crypto community the moon. They'd better hope they don't get it.",
      publishedAt: "2024-08-02T13:00:00Z",
      source: {id: "wired", name: "Wired"},
      title: "Trump's Crypto Embrace Could Be a Disaster for Bitcoin",
      url: "https://www.wired.com/story/donald-trump-bitcoin-reserve-promises/",
      urlToImage: "https://media.wired.com/photos/66ab594d0c0cc4819f595db4/191:100/w_1280,c_limit/073024_Crypto%20get%20rich%20quick.jpg"
    },
    {
      author: "Harri Weber",
      content: "Speaking to a crowd of supporters at the Bitcoin 2024 Conference in Nashville, Tennessee, former president and Republican nominee Donald Trump said he would make the U.S. the “crypto capital of the p… [+2326 chars]",
      description: "The former president drew cheers at the 2024 Bitcoin Conference after saying he'll \"fire\" Biden-nominated SEC Chair Gary Gensler.",
      publishedAt: "2024-07-27T20:59:48Z",
      source: {id: null, name: "Gizmodo.com"},
      title: "Trump Promises to Make U.S. the ‘Crypto Capital of the Planet and the Bitcoin Superpower’",
      url: "https://gizmodo.com/trump-promises-to-make-u-s-the-crypto-capital-of-the-planet-and-the-bitcoin-superpower-2000480037",
      urlToImage: "https://gizmodo.com/app/uploads/2024/07/Screenshot-2024-07-27-at-1.02.37 PM.jpg"
    }
  ]
  
  await new Promise(resolve => setTimeout(resolve, 500))
  return mockFavorites
}
