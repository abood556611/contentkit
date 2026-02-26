import { create } from 'zustand'

interface UserState {
  user: any | null
  profile: any | null
  credits: number
  isLoading: boolean
  setUser: (user: any) => void
  setProfile: (profile: any) => void
  updateCredits: (credits: number) => void
  setLoading: (loading: boolean) => void
  logout: () => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  profile: null,
  credits: 0,
  isLoading: true,
  setUser: (user) => set({ user, credits: user?.credits || 0 }),
  setProfile: (profile) => set({ profile }),
  updateCredits: (credits) => set({ credits }),
  setLoading: (isLoading) => set({ isLoading }),
  logout: () => set({ user: null, profile: null, credits: 0 }),
}))
