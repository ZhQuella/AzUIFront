import { InjectionKey } from 'vue'

export const layoutInjectKey: InjectionKey<{
  setAside: () => void,
  removeAside: () => void
}> = Symbol('Layout')
