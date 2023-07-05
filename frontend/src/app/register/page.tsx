'use client'
import { useRegister } from './useRegister'
import { Form } from '@/components/Form'

export default function Register() {
  const { errors, handleSubmit, register, createUser } = useRegister()
  console.log('renderizou')
  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-900 p-6">SideBar</aside>
        <main className="mb-32 flex flex-1 flex-col items-center justify-around gap-10 p-6">
          <Form.Root handleSubmit={() => handleSubmit(createUser)}>
            <Form.InputContainer>
              <Form.Input label="Name" {...register('name')} />
              {errors.name && (
                <Form.InputError helperText={errors.name.message} />
              )}
            </Form.InputContainer>
            <Form.InputContainer>
              <Form.Input label="Last Name" {...register('lastName')} />
              {errors.lastName && (
                <Form.InputError helperText={errors.lastName.message} />
              )}
            </Form.InputContainer>
            <Form.InputContainer>
              <Form.Input
                label="CPF"
                placeholder="00000000000"
                {...register('cpf')}
              />
              {errors.cpf && (
                <Form.InputError helperText={errors.cpf.message} />
              )}
            </Form.InputContainer>
            <Form.InputContainer>
              <Form.Input label="E-mail" type="email" {...register('email')} />
              {errors.email && (
                <Form.InputError helperText={errors.email.message} />
              )}
            </Form.InputContainer>
            <Form.InputContainer>
              <Form.Input
                label="Senha"
                type="password"
                {...register('password')}
              />
              {errors.password && (
                <Form.InputError helperText={errors.password.message} />
              )}
            </Form.InputContainer>
            <Form.InputContainer>
              <Form.Button
                className="flex h-10 items-center justify-center rounded  bg-rose-500 font-semibold text-white hover:bg-rose-600"
                type="submit"
              >
                Register
              </Form.Button>
            </Form.InputContainer>
          </Form.Root>
        </main>
      </div>
      <footer className="border-zinc-700 bg-zinc-800 p-6">Footer</footer>
    </div>
  )
}
