import {
  ChartDisableIcon,
  ChartIcon,
  Flex,
  HistoryIcon,
  HotIcon,
  HotDisableIcon,
  IconButton,
  NotificationDot,
  BridgeIcon,
  FaucetIcon,
  DocsIcon,
  Swap,
  Link,
  useModal,
} from '@pancakeswap/uikit'
import TransactionsModal from 'components/App/Transactions/TransactionsModal'
import GlobalSettings from 'components/Menu/GlobalSettings'
import RefreshIcon from 'components/Svg/RefreshIcon'
import { useSwapHotTokenDisplay } from 'hooks/useSwapHotTokenDisplay'
import { ReactElement, useCallback, useContext } from 'react'
import { useExpertModeManager } from 'state/user/hooks'
import { useTranslation } from '@pancakeswap/localization'
import styled from 'styled-components'
import { SettingsMode } from '../../../components/Menu/GlobalSettings/types'
import { SwapFeaturesContext } from '../SwapFeaturesContext'

interface Props {
  title: string | ReactElement
  subtitle: string
  noConfig?: boolean
  setIsChartDisplayed?: React.Dispatch<React.SetStateAction<boolean>>
  isChartDisplayed?: boolean
  hasAmount: boolean
  onRefreshPrice: () => void
}

const ColoredIconButton = styled(IconButton)`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const CurrencyInputHeader: React.FC<React.PropsWithChildren<Props>> = ({
  subtitle,
  hasAmount,
  onRefreshPrice,
  title,
}) => {
  const { isChartSupported, isChartDisplayed, setIsChartDisplayed } = useContext(SwapFeaturesContext)
  const [expertMode] = useExpertModeManager()
  const { t } = useTranslation()
  const toggleChartDisplayed = () => {
    setIsChartDisplayed((currentIsChartDisplayed) => !currentIsChartDisplayed)
  }
  const [onPresentTransactionsModal] = useModal(<TransactionsModal />)
  const handleOnClick = useCallback(() => onRefreshPrice?.(), [onRefreshPrice])
  const [isSwapHotTokenDisplay, setIsSwapHotTokenDisplay] = useSwapHotTokenDisplay()

  return (
    <Swap.CurrencyInputHeader
      title={
        <Flex width="100%" alignItems="center" >
          <Flex width="100%">
            <IconButton as={Link} href="https://sepoliafaucet.com/" variant="text" pt="10px" scale="sm">
            {t('Faucet Guide 📑')}
            </IconButton>
          </Flex>
          {/*  <Flex justifyContent="center" scale="xxl" width="100%" height="17px" alignItems="center" mb="2px">
            <Swap.CurrencyInputHeaderSubTitle>Trade your Favorite Tokens</Swap.CurrencyInputHeaderSubTitle>
          </Flex>   */}
          <Flex width="100%" justifyContent="center">
            {isChartSupported && setIsChartDisplayed && (
              <ColoredIconButton
                onClick={() => {
                  if (!isChartDisplayed && isSwapHotTokenDisplay) {
                    setIsSwapHotTokenDisplay(false)
                  }
                  toggleChartDisplayed()
                }}
                variant="text"
                scale="sm"
              >
                {isChartDisplayed ? (
                  <ChartDisableIcon color="textSubtle" />
                ) : (
                  <ChartIcon width="24px" color="textSubtle" />
                )}
              </ColoredIconButton>
            )}
            {isChartSupported && (
              <ColoredIconButton
                variant="text"
                scale="sm"
                onClick={() => {
                  if (!isSwapHotTokenDisplay && isChartDisplayed) {
                    toggleChartDisplayed()
                  }
                  setIsSwapHotTokenDisplay(!isSwapHotTokenDisplay)
                }}
              >
                {isSwapHotTokenDisplay ? (
                  <HotDisableIcon color="textSubtle" width="24px" />
                ) : (
                  <HotIcon color="textSubtle" width="24px" />
                )}
              </ColoredIconButton>
            )}
            <NotificationDot show={expertMode}>
              <GlobalSettings color="textSubtle" mr="0" mode={SettingsMode.SWAP_LIQUIDITY} />
            </NotificationDot>
            <IconButton onClick={onPresentTransactionsModal} variant="text" scale="sm">
              <HistoryIcon color="textSubtle" width="24px" />
            </IconButton>
            <IconButton variant="text" scale="sm" onClick={handleOnClick}  mr="2px">
              <RefreshIcon disabled={!hasAmount} color="textSubtle" width="27px" />
            </IconButton>
            <IconButton as={Link} href="https://onlybridge.org" variant="text" scale="sm" mr="7px">
              <BridgeIcon color="textSubtle" width="24px" />
            </IconButton>
            <IconButton as={Link} href="https://sepoliafaucet.com/" variant="text" scale="sm">
              <FaucetIcon color="textSubtle" width="24px" />
            </IconButton>
          </Flex>
        </Flex>
      }
      subtitle={<></>}
    />
  )
}

export default CurrencyInputHeader
