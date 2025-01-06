import {
  ChartDisableIcon,
  ChartIcon,
  Flex,
  HistoryIcon,
  HotIcon,
  HotDisableIcon,
  IconButton,
  LinkExternal,
  Link,
  Text,
  useModal,
} from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import styled from 'styled-components'

interface Props {
  title: string | React.ReactElement
  subtitle: string
}

const ColoredIconButton = styled(IconButton)`
  color: ${({ theme }) => theme.colors.textSubtle};
`

const CustomFlex = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* Add this line */
  width: 100%;
  padding: 10px 20px;
  background: #059669;
`


const CurrencyInputHeader: React.FC<React.PropsWithChildren<Props>> = ({
  subtitle,
  title,
}) => {
  const { t } = useTranslation()

  return (
    <CustomFlex>
      <Text>
        {t('Join MeetFi & Get Points by Trade')}
      </Text>
      <LinkExternal href="https://meetfi.org/dashboard/onlyswap" />
    </CustomFlex>
  )
}

export default CurrencyInputHeader
