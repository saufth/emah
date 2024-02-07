export interface Title { title: string }

export interface Description {
  description: string | string[]
}

export interface Label {
  label: string
}

export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface ImageData {
  image: ImageProps
}

export type Heading = Title & Description

export type HeadingWithOptinalDescription = Title & Partial<Description>

export type HeadingWithLabel = Heading & Partial<Label>

export type HeadingWithImage = Heading & ImageData

export type HeadingWithImageLabel = HeadingWithImage & Partial<Label>

export interface NavItem extends Title {
  href: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export type NavItemWithOptionalChildren = NavItem & Partial<Pick<NavItemWithChildren, 'items'>>

export type MainNavItem = NavItemWithOptionalChildren

export interface Item extends HeadingWithImageLabel {
  slug?: string
}

export type ItemWithOptionalImage = Omit<Item, 'image'> & Partial<ImageData>

export interface Article extends ItemWithOptionalImage {
  items: string[]
}

export interface Section extends ItemWithOptionalImage {
  items: ItemWithOptionalImage[]
}

export interface Subcategory extends ItemWithOptionalImage {
  items?: ItemWithOptionalImage[]
}

export interface Category extends ItemWithOptionalImage {
  items: Subcategory[]
}

export interface DocumentWithFullscreen extends Document {
  mozFullScreenElement?: Element;
  msFullscreenElement?: Element;
  webkitFullscreenElement?: Element;
  msExitFullscreen?: () => void;
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
}
export interface DocumentElementWithFullscreen extends HTMLElement {
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
}
