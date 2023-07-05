'use client'
// import { useState } from 'react'
import Link from 'next/link'
import { Form } from '@/components/Form'
import { useLogin } from './useLogin'

export default function Login() {
  const { errors, handleSubmit, register, createUser, output } = useLogin()
  console.log('renderizou')

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-900 p-6">SideBar</aside>
        <main className="mb-32 flex flex-1 flex-col items-center justify-around gap-10 p-6">
          <Form.Root handleSubmit={() => handleSubmit(createUser)}>
            <Form.InputContainer>
              <Form.Input label="E-mail" {...register('email')} />
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
              {errors.email && (
                <Form.InputError helperText={errors.email.message} />
              )}
            </Form.InputContainer>
            <Form.Button type="submit">Login</Form.Button>
            <Form.InputContainer>
              <Link
                className="flex h-10 items-center justify-center rounded  bg-rose-500 font-semibold text-white hover:bg-rose-600"
                href="register"
              >
                Register
              </Link>
            </Form.InputContainer>
          </Form.Root>
          <pre className="text-white">{output}</pre>
        </main>
      </div>
      <footer className="border-zinc-700 bg-zinc-800 p-6">Footer</footer>
    </div>
  )
}
