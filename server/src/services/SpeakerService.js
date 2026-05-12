export class SpeakerService {
  /** @param {import('../repositories/SpeakerRepository.js').SpeakerRepository} speakerRepository */
  constructor(speakerRepository) {
    this.speakerRepository = speakerRepository
  }

  getAll() {
    return this.speakerRepository.findAll()
  }
}
