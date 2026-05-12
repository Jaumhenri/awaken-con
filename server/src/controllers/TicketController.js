export class TicketController {
  /** @param {import('../services/TicketService.js').TicketService} ticketService */
  constructor(ticketService) {
    this.ticketService = ticketService
  }

  getAll = (req, res, next) => {
    try {
      const tickets = this.ticketService.getAll()
      res.json({ data: tickets })
    } catch (err) {
      next(err)
    }
  }

  getById = (req, res, next) => {
    try {
      const ticket = this.ticketService.getById(req.params.id)
      res.json({ data: ticket })
    } catch (err) {
      next(err)
    }
  }
}
