import { NhostClient } from '@nhost/nhost-js'

export const nhost = new NhostClient({
  subdomain: 'gpnpsfwgrcnrxiehiggx',
  region: 'ap-south-1'
})

// Only call this AFTER the user has logged in
export function logToken() {
  const session = nhost.auth.getSession()

  if (session && session.accessToken) {
    console.log('Access Token:', session.accessToken)
  } else {
    console.log('No active session — user is not logged in yet.')
  }
}
