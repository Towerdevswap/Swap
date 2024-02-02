import { ContextApi } from '@pancakeswap/localization'

type FAQsType = {
  t: ContextApi['t']
}

const config = ({ t }: FAQsType) => [
  {
    title: t('what is ONLY SWAP?'),
    description: [t('Line Swap is a decentralized exchange built on the OnlyLayer network.')],
  },
  {
    title: t('How can i use ONLY SWAP'),
    description: [
      t(
        'follow the tutorial to get some gETH faucets on OnlyLayer network: https://only-layer.gitbook.io/ after you get it you can use OnlySwap',
      ),
    ],
  },
  {
    title: t('Is ONLY SWAP safe?'),
    description: [t('yes, we will audit smart contracts')],
  },
]
export default config
