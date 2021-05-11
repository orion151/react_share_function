import { MenuEntry } from '@binance/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.binance.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.binance.finance/#/pool',
      },
      {
        label: 'LP Migration',
        href: 'https://v1exchange.binance.finance/#/migrate',
      },
      {
        label: 'V1 Liquidity (Old)',
        href: 'https://v1exchange.binance.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Prediction',
    icon: 'PredictionsIcon',
    href: '/prediction',
    status: {
      text: 'BETA',
      color: 'warning',
    },
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: '/competition',
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Task Center',
        href: '/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://binance.info',
      },
      {
        label: 'Tokens',
        href: 'https://binance.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://binance.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://binance.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.binance.finance/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.binance.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/binance',
      },
      {
        label: 'Docs',
        href: 'https://docs.binance.finance',
      },
      {
        label: 'Blog',
        href: 'https://binance.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://binance.creator-spring.com/',
      },
    ],
  },
]

export default config
