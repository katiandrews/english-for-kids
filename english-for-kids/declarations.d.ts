declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg' {
  const content: string
  export default content
}
declare module '*.svg'
