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