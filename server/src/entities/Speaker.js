export class Speaker {
  constructor({ id, name, bio, role, imageUrl, revealed = false }) {
    this.id = id
    this.name = name
    this.bio = bio
    this.role = role
    this.imageUrl = imageUrl
    this.revealed = revealed
  }
}
