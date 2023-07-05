'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/input'
import { Button } from '@/components/button'
import Link from 'next/link'

const createUserFormSchema = z.object({
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

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export default function Register() {
  console.log('renderizou')
  const router = useRouter()
  const [output, setOutput] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  })
  //
  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2))
    console.log(output)
    router.push('/')
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-900 p-6">SideBar</aside>
        <main className="mb-32 flex flex-1 flex-col items-center justify-around gap-10 p-6">
          <form
            className="flex max-w-xs flex-col gap-4"
            onSubmit={handleSubmit(createUser)}
          >
            <div className="flex flex-col gap-1">
              <Input
                label="Name"
                helperText={errors.name?.message}
                {...register('name')}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Input
                label="Last Name"
                helperText={errors.lastName?.message}
                {...register('lastName')}
              />
            </div>
            <div className="flex flex-col gap-1">
              <Input
                label="CPF"
                placeholder="000.000.000-00"
                helperText={errors.cpf?.message}
                {...register('cpf')}
              />
            </div>
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
            <div className="flex flex-col gap-1">
              <Button
                className="flex h-10 items-center justify-center rounded  bg-rose-500 font-semibold text-white hover:bg-rose-600"
                type="submit"
              >
                {/* <Button type="button">Register</Button> */}
                Register
              </Button>
            </div>
          </form>
        </main>
      </div>
      <footer className="border-zinc-700 bg-zinc-800 p-6">Footer</footer>
    </div>
  )
}
