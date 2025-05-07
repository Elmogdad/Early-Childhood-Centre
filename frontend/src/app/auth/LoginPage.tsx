import React, { useState } from 'react'
import AuthLayout from './AuthLayout'

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !password) {
      setError('يرجى تعبئة جميع الحقول')
      setSuccess('')
      return
    }

    // Simulate success
    setSuccess('تم تسجيل الدخول بنجاح!')
    setError('')
  }

  return (
    <AuthLayout title="تسجيل الدخول">
      <form onSubmit={handleSubmit}>
        {error && <p className="text-red-600 mb-3">{error}</p>}
        {success && <p className="text-green-600 mb-3">{success}</p>}

        <label className="block mb-4">
          <span className="text-gray-700">البريد الإلكتروني</span>
          <input
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-700">كلمة المرور</span>
          <input
            type="password"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          دخول
        </button>
      </form>
    </AuthLayout>
  )
}

export default LoginPage
