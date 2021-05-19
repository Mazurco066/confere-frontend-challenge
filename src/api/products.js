import httpClient from './_httpClient'

export const listProducts = async () => 
  await httpClient.get(`/db.json`)