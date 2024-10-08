//for Logo.tsx
export interface ILogoProps {
  fontSize?: 'default' | 'large',
  spanSize?: 'default' | 'large',
  onClick?: () => void,
}
//for NavigationItems.tsx
export interface INavItemProps {
  label: string,
}

//for navigationData.ts
export interface ISocialData {
  id: number,
  link: string,
  name: string
}

//for galleryData.ts
export interface IGalleryData {
  id: number,
  path: string,
  name: string,
  width?: number,
  height?: number
}

//for Slogan.tsx
export interface ISlogan {
  slogan: string,
  mb?: string,
  mt?: string
}

//for promotionImageData.ts
export interface IPromotionImage {
  id: number,
  path: string,
  name: string
}
