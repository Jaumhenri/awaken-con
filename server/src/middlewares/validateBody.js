export function validateBody(fields) {
  return (req, res, next) => {
    const missing = fields.filter((f) => !req.body[f])
    if (missing.length) {
      const err = new Error(`Campos obrigatórios: ${missing.join(', ')}`)
      err.status = 400
      return next(err)
    }
    next()
  }
}
