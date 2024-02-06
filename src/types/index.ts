import { type Author } from 'next/dist/lib/metadata/types/metadata-types'
import { type CardProps } from '@/components/ui/card'

export interface Size {
  width: number
  height: number
}
export type SizeOptional = Partial<Size>

export interface Limits {
  min: number
  max: number
}
export type LimitsOptional = Partial<Limits>

export interface ImageProps extends SizeOptional {
  src: string
  alt: string
}
export interface ImageData {
  image: ImageProps
}
export type ImageDataOptional = Partial<ImageProps>

export interface Title { title: string }

export interface Description {
  description: string | string[]
}
export type DescriptionOptional = Partial<Description>

export interface label {
  label: string
}
export type LabelOptional = Partial<label>

export type Heading = Title & Description
export type HeadingWithOptinalDescription = Title & DescriptionOptional
export type HeadingWithLabel = Heading & LabelOptional
export type HeadingWithImage = Heading & ImageData
export type HeadingWithImageLabel = HeadingWithImage & LabelOptional

export interface Hyperlink {
  href: string
}

export interface Slugable {
  slug: string
}
export type SlugableOptional = Partial<Slugable>

export type NavItem = Title & Hyperlink
export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}
export type NavItemWithOptionalChildren = NavItem & Partial<Pick<NavItemWithChildren, 'items'>>
export type MainNavItem = NavItemWithOptionalChildren
export type Navigable = MainNavItem[]

export type Item = HeadingWithImageLabel & SlugableOptional
export type ItemList = Item[]
export type ItemWithOptionalImage = Omit<Item, 'image'> & ImageDataOptional
export type ItemWithOptionalImageList = ItemWithOptionalImage[]

export interface Article extends ItemWithOptionalImage {
  items: string[]
}

export interface Section extends ItemWithOptionalImage {
  items: ItemWithOptionalImageList
}

export interface Subcategory extends ItemWithOptionalImage, SlugableOptional {
  items?: ItemWithOptionalImageList
}
export type Subcategories = Subcategory[]
export interface Category extends ItemWithOptionalImage {
  items: Subcategories
}
export type Categories = Category[]

export interface CardDataProps extends CardProps {
  card: ItemWithOptionalImage
}

export interface SiteConfig {
  name: string,
  description: string,
  slogan?: string,
  url: URL | string,
  author: Author,
  mainNav: Navigable
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
