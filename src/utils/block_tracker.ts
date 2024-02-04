import type { TrackerItem } from "../types";

export const getTrackerItemFromBlock = (block: number): TrackerItem => {
  switch (block) {
    case -1:
      return { color: 'bg-gray-500', tooltip: 'No data' }
    case 2:
      return { color: 'bg-blue-500', tooltip: 'Missed/Pre-committed' }
    case 3:
      return { color: 'bg-green-500', tooltip: 'Signed' }
    case 4:
      return { color: 'bg-teal-400', tooltip: 'Proposed' }
    
    default:
      return { color: 'bg-black', tooltip: 'No data' }
  }
}