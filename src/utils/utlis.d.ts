declare module '*.svg' {
  const value: any;
  export = value;
}

declare namespace JSX {
  interface IntrinsicElements {
    "lottie-player": any;
  }
}