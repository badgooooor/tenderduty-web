export type StateResponse = {
  "msgType": string
  Status: ValidatorStatus[]
}

export type ValidatorStatus = {
  msgType: string
  name: string
  chain_id: string
  moniker: string
  bonded: boolean
  jailed: boolean
  tombstoned: boolean
  missed: number
  window: number
  nodes: number
  healthy_nodes: number
  active_alerts: number
  height: number
  last_error: string
  blocks: number[]
}
