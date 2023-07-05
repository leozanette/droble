'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Form } from '@/components/Form'
import { FormButton } from '@/components/Form/FormButton'
import { FormRoot } from '@/components/Form/FormRoot'

const createLoginFormSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('E-mail inválido')
    .toLowerCase(),
  password: z.string().min(6, 'Minimo 6 catacteres'),
})
type CreateLoginFormData = z.infer<typeof createLoginFormSchema>

export default function Login() {
  console.log('renderizou')
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

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-900 p-6">SideBar</aside>
        <main className="mb-32 flex flex-1 flex-col items-center justify-around gap-10 p-6">
          <FormRoot handleSubmit={() => handleSubmit(createUser)}>
            <Form.InputContiner>
              <Form.Input label="E-mail" {...register('email')} />
              {errors.email && (
                <Form.InputError helperText={errors.email.message} />
              )}
            </Form.InputContiner>
            <Form.InputContiner>
              <Form.Input
                label="Senha"
                type="password"
                {...register('password')}
              />
              {errors.email && (
                <Form.InputError helperText={errors.email.message} />
              )}
            </Form.InputContiner>
            <FormButton type="submit">Login</FormButton>
            <Form.InputContiner>
              <Link
                className="flex h-10 items-center justify-center rounded  bg-rose-500 font-semibold text-white hover:bg-rose-600"
                href="register"
              >
                Register
              </Link>
            </Form.InputContiner>
          </FormRoot>
          <pre className="text-white">{output}</pre>
        </main>
      </div>
      <footer className="border-zinc-700 bg-zinc-800 p-6">Footer</footer>
    </div>
  )
}
