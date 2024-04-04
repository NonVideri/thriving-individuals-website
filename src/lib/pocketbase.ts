import PocketBase from 'pocketbase'

const pb = new PocketBase(process.env.BACKEND_URL)

export default pb