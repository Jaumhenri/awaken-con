export class TicketService {
  /** @param {import('../repositories/TicketRepository.js').TicketRepository} ticketRepository */
  constructor(ticketRepository) {
    this.ticketRepository = ticketRepository
  }

  getAll() {
    return this.ticketRepository.findAll()
  }

  getById(id) {
    const ticket = this.ticketRepository.findById(id)
    if (!ticket) throw new Error(`Ingresso '${id}' não encontrado`)
    return ticket
  }
}
