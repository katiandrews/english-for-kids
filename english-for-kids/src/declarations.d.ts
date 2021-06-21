declare module '*.png'
declare module '*.svg'
declare module '*.jpg'
declare module '*.jpeg' {
  const content: string
  export default content
}
