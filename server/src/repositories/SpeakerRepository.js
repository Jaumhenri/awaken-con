import { Speaker } from '../entities/Speaker.js'

const SPEAKERS = [
  new Speaker({ id: 1, name: null, bio: null, role: null, imageUrl: null, revealed: false }),
  new Speaker({ id: 2, name: null, bio: null, role: null, imageUrl: null, revealed: false }),
  new Speaker({ id: 3, name: null, bio: null, role: null, imageUrl: null, revealed: false }),
  new Speaker({ id: 4, name: null, bio: null, role: null, imageUrl: null, revealed: false }),
]

export class SpeakerRepository {
  findAll() {
    return SPEAKERS
  }

  findRevealed() {
    return SPEAKERS.filter((s) => s.revealed)
  }
}
