const BASE_URL = 'http://localhost:4004/api/auth';

export const registerUser = async (username: string, password: string, email : string ,   confirmPassword : string) => {
  const res = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, email,  confirmPassword }),
  });

  if (!res.ok) throw new Error('فشل في التسجيل');
  return res.json();
};

export const loginUser = async (email: string, password: string) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error('بيانات الدخول غير صحيحة');
  return res.json(); 
};
