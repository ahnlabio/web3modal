import { AccountCtrl } from '@web3modal/core'
import { useWatchableData } from '../utils/useWatchableData'

export function useAccount() {
  const data = useWatchableData(AccountCtrl, { watch: true })

  return data
}