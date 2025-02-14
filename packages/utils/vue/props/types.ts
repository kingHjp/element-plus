import type { PropType } from 'vue'

export type EpProp<
  T = unknown,
  V extends Value<T> = undefined,
  D extends Default<T, V> = undefined
> = PropType<T> | EpPropOptions<T, V, D>

export type EpPropOptions<
  T = unknown,
  V extends Value<T> = undefined,
  D extends Default<T, V> = undefined
> = {
  type: PropType<T>
  required?: boolean
  default?: D
  validator?(value: unknown): boolean
  values?: V
}

export type Value<T> = readonly T[] | undefined
export type Default<T, V> =
  | (V extends unknown[] ? T & V[number] : T)
  | DefaultFactory<T, V>
  | null
  | undefined
type DefaultFactory<T, V> = (
  props: Record<string, unknown>
) => (V extends unknown[] ? T & V[number] : T) | null | undefined
