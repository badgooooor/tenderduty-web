import type { LogAvailableResponse, LogResponse } from "../types"

export const getIsLogsEnabled = async (): Promise<LogAvailableResponse | undefined> => {
  const response = await fetch(`${import.meta.env.TENDERDUTY_URL}/logsenabled`)

  if (response.status === 404) {
    return undefined
  } else {
    return response.json()
  }
}

export  const getLogs = async (): Promise<LogResponse> => {
  const response = await fetch(`${import.meta.env.TENDERDUTY_URL}/logs`)

  if (response.status === 404) {
    return []
  } else {
    return response.json()
  }
}