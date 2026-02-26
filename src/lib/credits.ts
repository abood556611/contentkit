import { prisma } from './db'

export async function checkCredits(userId: string, required: number): Promise<boolean> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { credits: true }
  })
  return (user?.credits ?? 0) >= required
}

export async function deductCredits(userId: string, amount: number): Promise<void> {
  await prisma.user.update({
    where: { id: userId },
    data: {
      credits: {
        decrement: amount
      }
    }
  })
}

export async function getCreditsBalance(userId: string): Promise<number> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { credits: true }
  })
  return user?.credits ?? 0
}
