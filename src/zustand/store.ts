import { create } from 'zustand'

type Store = {
  bears: number,
  incrementBears: (by?:number)=>void
}



export const useStore = create<Store>((set)=>({
  bears: 0,
  incrementBears: (by?:number)=>set(state=>({bears: state.bears+(by || 1)})),
}));