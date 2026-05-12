export class ContactController {
  /** @param {import('../services/ContactService.js').ContactService} contactService */
  constructor(contactService) {
    this.contactService = contactService
  }

  send = (req, res, next) => {
    try {
      const result = this.contactService.send(req.body)
      res.status(201).json(result)
    } catch (err) {
      next(err)
    }
  }
}
