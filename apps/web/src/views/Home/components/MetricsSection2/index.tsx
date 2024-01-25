import { Heading, Flex, Text, Button, Skeleton, NextLinkFromReactRouter } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useAccount } from 'wagmi'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from '@pancakeswap/utils/formatBalance'
import useSWRImmutable from 'swr/immutable'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import HeaderLogo from '../HeaderLogoSvg'

const Stats = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const { data: tvl } = useSWRImmutable('tvl')
  const { data: txCount } = useSWRImmutable('totalTx30Days')
  const { data: addressCount } = useSWRImmutable('addressCount30Days')
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)
  const tvlString = tvl ? formatLocalisedCompactNumber(tvl) : '-'
  const { address: account } = useAccount()

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading textAlign="center" color="#f6f2ff" scale="xxl" mt="100px" mb="32px">
        {t('OnlySwap Exchange')}
      </Heading>
      <Text textAlign="center" color="#f6f2ff" bold mb="40px">
        {t('The First Decentralized Exchange build on OnlyLayer Network')}
      </Text>
      <Flex>
        {!account && <ConnectWalletButton mr="8px" />}
        <NextLinkFromReactRouter to="/swap">
          <Button variant={!account ? 'secondary' : 'primary'}>{t('Trade Now')}</Button>
        </NextLinkFromReactRouter>
      </Flex>
    </Flex>
  )
}

export default Stats
