import { createSanity } from '@sanity/client'

export default createSanity({
  projectId: 'cxhqzl0j',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
})
