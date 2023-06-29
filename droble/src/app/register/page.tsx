'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import Link from 'next/link'

const createUserFormSchema = z.object({
  email: z
    .string()
    .nonempty('O e-mail é obrigatório')
    .email('E-mail inválido')
    .toLowerCase(),
  password: z.string().min(6, 'Minimo 6 catacteres'),
})
type CreateUserFormData = z.infer<typeof createUserFormSchema>

export default function Home() {
  console.log('renderizou')
  const [output, setOutput] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  })

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-900 p-6">SideBar</aside>
        <main className="flex-1 flex-col gap-10 p-6">
          <form
            className="flex max-w-xs flex-col gap-4"
            onSubmit={handleSubmit(createUser)}
          >
            <div className="flex flex-col gap-1">
              <Input
                label="E-mail"
                type="email"
                helperText={errors.email?.message}
                {...register('email')}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Input
                label="Senha"
                helperText={errors.password?.message}
                type="password"
                {...register('password')}
              />
            </div>
            <Button type="submit">Login</Button>
            <Link href="register">
              <Button type="button">Create an account</Button>
            </Link>
          </form>
          <pre className="mt-6">{output}</pre>
        </main>
      </div>
      <footer className="border-zinc-700 bg-zinc-800 p-6">Footer</footer>
    </div>
  )
}
