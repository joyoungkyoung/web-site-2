import localFont from 'next/font/local';

export const SpoqaHanSans = localFont({
  src: [
    { path: '../public/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Thin.woff2', weight: '100', style: 'normal' },
    { path: '../public/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Light.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../public/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/SpoqaHanSansNeo/SpoqaHanSansNeo-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-spoqa-han-sans',
});

export const Decimal = localFont({
  src: [
    { path: '../public/fonts/Decimal/Decimal-Light.woff2', weight: '300', style: 'normal' },
    { path: '../public/fonts/Decimal/Decimal-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../public/fonts/Decimal/Decimal-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: '../public/fonts/Decimal/Decimal-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-decimal',
});

export const DecimalInline = localFont({
  src: [{ path: '../public/fonts/Decimal/Decimal-Bold.woff2', weight: '700', style: 'normal' }],
  variable: '--font-decimal-inline',
});
