'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                className="h-10 border border-zinc-200 px-3 text-zinc-600 shadow-sm"
                {...register('email')}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                className="h-10 border border-zinc-200 px-3 text-zinc-600 shadow-sm"
                {...register('password')}
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="h-10 rounded bg-rose-500 font-semibold text-white hover:bg-rose-600"
            >
              Salvar
            </button>
          </form>
          <pre className="mt-6">{output}</pre>
        </main>
      </div>
      <footer className="border-zinc-700 bg-zinc-800 p-6">Footer</footer>
    </div>
  )
}
