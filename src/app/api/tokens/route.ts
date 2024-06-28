import { db } from '@/lib/db';

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const tokens = await db.token.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(tokens, { status: 200 });
  } catch (error) {
    console.log('[GET TOKENS]', error);

    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, currency, icon, lastTrade, percent24h, change24h } = await req.json();

    if (!name) {
      return new NextResponse('Name required', { status: 400 });
    }

    const token = await db.token.create({
      data: {
        name,
        currency,
        icon,
        lastTrade,
        percent24h,
        change24h,
      },
    });

    return NextResponse.json(token, { status: 200 });
  } catch (error) {
    console.log('[POST TOKEN]', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
