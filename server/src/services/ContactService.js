export class ContactService {
  send({ name, email, message }) {
    if (!name || !email || !message) {
      throw new Error('Campos obrigatórios ausentes: name, email, message')
    }
    // In production, integrate with an email provider here (e.g. Resend, SendGrid)
    console.log('[ContactService] Nova mensagem de:', email)
    return { ok: true, message: 'Mensagem recebida com sucesso!' }
  }
}
