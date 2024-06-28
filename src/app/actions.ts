'use server';

import { db } from '@/lib/db';
import { Token } from '@prisma/client';

export async function getTokens(): Promise<Token[]> {
  try {
    const tokens = await db.token.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return tokens;
  } catch (error) {
    console.log('[GET TOKENS]', error);

    return [];
  }
}
