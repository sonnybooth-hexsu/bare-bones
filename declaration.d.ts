declare module "*.css" {
  const content: { [className: string]: string }
  export default content
}

declare module "*.svg"
declare module "*.jpg"

declare module "react-compare-image"
