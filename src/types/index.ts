export interface NavItem {
  title: string
  href: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export type MainNavItem = NavItemWithOptionalChildren

export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface Item {
  title: string
  description: string | string[]
  image: ImageProps
  label?: string
}

export type ItemWithOptionalDescription = Pick<Item, 'title' | 'label' | 'image'> & Partial<Pick<Item, 'description'>>

export type ItemWithOptionalContent = Pick<Item, 'title' | 'label'> & Partial<Pick<Item, 'description' | 'image'>>

export interface Article extends ItemWithOptionalContent {
  items: string[]
}

export interface Section extends ItemWithOptionalContent {
  items: ItemWithOptionalContent[]
}

export interface Subcategory extends ItemWithOptionalContent {
  slug?: string
  items?: ItemWithOptionalContent[]
}

export interface Category extends ItemWithOptionalContent {
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
