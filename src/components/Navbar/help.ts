export const namePages = [
  {
    url: '/Search',
    title: 'search',
  },
  {
    url: '/',
    title: 'Home',
  },
];

export interface Props {
  window?: () => Window;
  children?: any;
  isMobile?: boolean;
}
