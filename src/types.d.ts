declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '@fontsource/roboto' {
  const content: any;
  export default content;
} 