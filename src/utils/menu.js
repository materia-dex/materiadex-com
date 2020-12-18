const menu = [
  {
    name: 'Services',
    sublinks: [
      { name: 'Swap', link: '/soon', },
      { name: 'Pool', link: '/soon', },
      { name: 'Derivative & NFT DEX', link: '/soon', },
      { name: 'Farming', link: '/soon', },
      { name: 'Analytics', link: '/soon', }
    ]
  },
  {
    name: 'Community',
    sublinks: [
      { name: 'Twitter', link: 'https://twitter.com/dexmateria' },
      { name: 'Discord', link: 'https://discord.gg/jdYMZrv' },
      { name: 'Reddit', link: 'https://www.reddit.com/r/materiadex' },
      { name: 'Github', link: 'https://github.com/materia-dex' },
    ]
  },
  {
    name: 'Info',
    sublinks: [
      { name: 'Strategy & Manifesto', link: '/strategy' },
      { name: 'Incentives Strategy', link: '/incentives' },
      { name: 'Roadmap', link: '/roadmap' },
      { name: 'About', link: '/about' },
    ]
  },  
  {
    name: 'DFO Hub',
    link: 'https://www.dfohub.com/',
    isExternal: true,
    sublinks: [
      //{ name: 'About', link: 'https://www.dfohub.com/' },
    ]
  }
]

module.exports = menu
