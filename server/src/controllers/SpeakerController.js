export class SpeakerController {
  /** @param {import('../services/SpeakerService.js').SpeakerService} speakerService */
  constructor(speakerService) {
    this.speakerService = speakerService
  }

  getAll = (req, res, next) => {
    try {
      const speakers = this.speakerService.getAll()
      res.json({ data: speakers })
    } catch (err) {
      next(err)
    }
  }
}
