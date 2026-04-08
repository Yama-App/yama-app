export default function manifest() {
  return {
    name: 'yamaapp',
    short_name: 'yamaapp',
    description: 'App introduction site',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    icons: [
      { src: '/favicon/icon-192x192.png', type: 'image/png', sizes: '192x192' },
      { src: '/favicon/icon-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
  };
}
