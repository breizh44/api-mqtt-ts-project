// src/api.ts
export async function sendStartCommand() {
  const response = await fetch('http://localhost:3001/welding/start', {
    method: 'POST',
  })
  return await response.json()
}

export async function sendStopCommand() {
  const response = await fetch('http://localhost:3001/welding/stop', {
    method: 'POST',
  })
  return await response.json()
}
export async function sendDeleteWpCommand(wpId: string) {
  const response = await fetch(`http://localhost:3001/wp/${wpId}/delete`, {
    method: 'DELETE',
  })
  return await response.json()
}
