const menu = [
  {
    name: 'Services',
    sublinks: [
      { name: 'Swap', link: '/soon', enabled: true },
      { name: 'Pool', link: '/soon', enabled: true },
      { name: 'Derivative & NFT DEX', link: '/soon', enabled: true },
      { name: 'Farming', link: '/soon', enabled: true },
      { name: 'Analytics', link: '/soon', enabled: true }
    ],
    enabled: true
  },
  {
    name: 'Community',
    sublinks: [
      { name: 'Twitter', link: 'https://twitter.com/dexmateria', enabled: true },
      { name: 'Discord', link: 'https://discord.gg/jdYMZrv', enabled: true },
      { name: 'Reddit', link: 'https://www.reddit.com/r/materiadex', enabled: true },
      { name: 'Github', link: 'https://github.com/materia-dex', enabled: true },
    ],
    enabled: false
  },
  {
    name: 'Info',
    sublinks: [
      { name: 'Strategy & Manifesto', link: '/strategy', enabled: true },
      { name: 'Incentives Strategy', link: '/incentives', enabled: false },
      { name: 'Roadmap', link: '/roadmap', enabled: false },
      { name: 'About', link: '/about', enabled: true },
    ],
    enabled: true
  },  
  {
    name: 'DFO Hub',
    link: 'https://www.dfohub.com/',
    isExternal: true,
    sublinks: [
      //{ name: 'About', link: 'https://www.dfohub.com/' },
    ],
    enabled: true
  }
]

module.exports = menu
