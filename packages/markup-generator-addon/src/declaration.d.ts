// declaration.d.ts

declare module '*.scss' {
  interface CssObjects {
    [key: string]: any
  }

  export default CssObjects
}
