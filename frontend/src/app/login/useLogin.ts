import { useForm } from 'react-hook-form'
import { CreateLoginFormData } from './types'
import { zodResolver } from '@hookform/resolvers/zod'
import { createLoginFormSchema } from './schema'
import { useState } from 'react'

export const useLogin = () => {
  const [output, setOutput] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateLoginFormData>({
    resolver: zodResolver(createLoginFormSchema),
  })

  function createUser(data: any) {
    console.log('createUser')
    setOutput(JSON.stringify(data, null, 2))
  }

  return {
    handleSubmit,
    errors,
    register,
    createUser,
    output,
  }
}
