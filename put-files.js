import { Web3Storage, getFilesFromPath } from 'web3.storage'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDc2NzdlYkQ3QWZFQzk1N0QwNjBDOWQ1RjA3QzA3QUExOUExYzU1RjMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzQ4OTI5NDM3MDcsIm5hbWUiOiJ0ZXN0In0.glU4rve8ousywCNTxWK9NwAwySM1uoSGu0X_5Y7pd_g';
const storage = new Web3Storage({ token })
 const args = ['index.js']
const files = []

  for (const path of args) {
    const pathFiles = await getFilesFromPath(path)
    files.push(...pathFiles)
  }

  console.log(`Uploading ${files.length} files`)
  const cid = await storage.put(files)
  console.log('Content added with CID:', cid)