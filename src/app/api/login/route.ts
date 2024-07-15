import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const { usuario, senha } = await req.json();

  if (usuario === 'girardipaulo' && senha === '123') {
    return new Response(JSON.stringify({ message: 'Login successful' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } else {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}