import { z } from 'zod'
import { createLoginFormSchema } from './schema'

export type CreateLoginFormData = z.infer<typeof createLoginFormSchema>
