import { Ticket } from '../entities/Ticket.js'

const TICKETS = [
  new Ticket({
    id: 'setor-b',
    name: 'Setor B',
    description: 'Pista geral — experiência completa da conferência',
    price: 149,
    installments: { count: 6, value: 25.98 },
    features: [
      'Acesso aos 2 dias',
      'Área pista — setor B',
      'Programação completa',
      'Salas paralelas',
    ],
    featured: false,
  }),
  new Ticket({
    id: 'setor-a',
    name: 'Setor A',
    description: 'Setor preferencial com melhor posicionamento no evento',
    price: 249,
    installments: { count: 10, value: 24.9 },
    features: [
      'Acesso aos 2 dias',
      'Setor A — posição preferencial',
      'Programação completa',
      'Salas paralelas incluídas',
      'Acesso prioritário ao local',
    ],
    featured: true,
  }),
  new Ticket({
    id: 'vip',
    name: 'VIP',
    description: 'Experiência premium com benefícios exclusivos',
    price: 449,
    installments: { count: 12, value: 37.42 },
    features: [
      'Acesso aos 2 dias',
      'Área VIP exclusiva',
      'Kit conferência incluso',
      'Fast pass — entrada prioritária',
      'Encontro com palestrantes',
    ],
    featured: false,
  }),
]

export class TicketRepository {
  findAll() {
    return TICKETS
  }

  findById(id) {
    return TICKETS.find((t) => t.id === id) ?? null
  }
}
