import { z } from 'zod'

export const createLoginFormSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('E-mail inválido')
    .toLowerCase(),
  password: z.string().min(6, 'Minimo 6 catacteres'),
})
