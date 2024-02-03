import type { StateResponse } from "../types"

export const getValidatorStates = async (): Promise<StateResponse | undefined> => {
  const response = await fetch(`${import.meta.env.TENDERDUTY_URL}/state`)
  
  if (response.status === 404) {
    return undefined
  } else {
    return response.json()
  }
}
