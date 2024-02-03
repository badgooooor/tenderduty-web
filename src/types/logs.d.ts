export type LogResponse = Log[]

export type Log = {
  msgType: string
  ts: number
  msg: string
}

export type LogAvailableResponse = {
  enabled: boolean
}