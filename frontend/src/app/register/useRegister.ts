import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createUserFormSchema } from './schema'
import { CreateRegisterFormData } from './types'

export const useRegister = () => {
  const router = useRouter()
  const [output, setOutput] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRegisterFormData>({
    resolver: zodResolver(createUserFormSchema),
  })
  //
  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2))
    console.log(output)
    router.push('/')
  }

  return {
    handleSubmit,
    errors,
    register,
    createUser,
    output,
  }
}
