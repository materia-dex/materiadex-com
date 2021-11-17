const menu = [
  {
    name: 'Services',
    sublinks: [
      { name: 'Swap', link: '/swap', enabled: true },
      { name: 'Pool', link: '/pool', enabled: true },
      { name: 'Liquidity Mining', link: '/lm', enabled: true },
      { name: 'Airdrop', link: '/airdrop', enabled: false },
      { name: 'Exping', link: '/soon', enabled: true },
      {
        name: 'Analytics',
        link: 'https://info.materiadex.com/home',
        isExternal: true,
        sublinks: [],
        enabled: true
      }
    ],
    enabled: true
  },
  {
    name: 'Community',
    sublinks: [
      { name: 'Telegram', link: 'https://t.me/MateriaExchange', enabled: true },
      { name: 'Twitter', link: 'https://twitter.com/dexmateria', enabled: true },
      { name: 'Discord', link: 'https://discord.gg/jdYMZrv', enabled: true },
      { name: 'Reddit', link: 'https://www.reddit.com/r/materiadex', enabled: true },
      { name: 'Github', link: 'https://github.com/materia-dex', enabled: true }
    ],
    enabled: true
  },
  {
    name: 'Info',
    sublinks: [
      { name: 'Strategy & Manifesto', link: '/strategy', enabled: true },
      { name: 'Incentives Strategy', link: '/incentives', enabled: false },
      {
        name: 'Medium articles',
        link: 'https://materiadex.medium.com/',
        isExternal: true,
        sublinks: [],
        enabled: true
      },
      { name: 'About', link: '/about', enabled: true },
    ],
    enabled: true
  },
  {
    name: 'Docs',
    link: '/docs/materia',
    sublinks: [
    ],
    enabled: true
  }
]

module.exports = menu
