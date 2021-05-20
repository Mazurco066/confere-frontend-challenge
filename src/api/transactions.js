// Dependencies
import { pspApi } from './_httpClient'

// Store transactions
export const storeTransaction = async (data) => 
  await pspApi.post(`/transaction`, { ...data })