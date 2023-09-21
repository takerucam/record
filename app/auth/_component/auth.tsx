'use client'

import supabase from '@/utils/supabase'
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // すでにログイン済みであればページ遷移を行う
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    setEmail('')
    setPassword('')
    if (error) {
      alert(error.message)
    } else {
      router.push('/')
    }
  }

  // デバッグ用
  async function signOut() {
    await supabase.auth.signOut()
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={signOut}>Sign Out</button>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            required
            className="my-2 rounded border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            required
            className="my-2 rounded border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="my-6 flex justify-center text-sm">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
