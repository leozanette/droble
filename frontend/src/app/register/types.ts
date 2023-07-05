import { z } from 'zod'
import { createUserFormSchema } from './schema'

export type CreateRegisterFormData = z.infer<typeof createUserFormSchema>
