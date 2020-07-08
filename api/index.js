const users = [
  {
    token: 'qwerty123',
    img: '/images/avatars/a1.jpg',
    email: 'rina@str.com',
    name: 'Irina S.'
  }
]

const waitFor = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms || 0))
}

export async function login () {
  await waitFor(100)
  return users[0].token
}

export async function getUser (token) {
  await waitFor(100)
  const user = users.find(u => u.token === token)
  if (!user) { return false }
  return user
}
