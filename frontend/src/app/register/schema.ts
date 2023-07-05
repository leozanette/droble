import { z } from 'zod'

export const createUserFormSchema = z.object({
  name: z.string().nonempty().min(3),
  lastName: z.string().nonempty().min(3),
  cpf: z.string().nonempty().length(11),
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('E-mail inválido')
    .toLowerCase(),
  password: z.string().min(6, 'Minimo 6 catacteres'),
})
