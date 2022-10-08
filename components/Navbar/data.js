// Không đặt url nav trùng với tên api,
// cách đặt: nếu là collectionType thì không có s, nếu là singleType thì có s
// ex: singleType about: nav url and page name "abouts"
export const links = [
  {
    id: 1,
    text: 'TRANG CHỦ',
    url: '/',
  },
  {
    id: 2,
    text: 'GIỚI THIỆU',
    url: '/abouts',
  },
  {
    id: 3,
    text: 'DỊCH VỤ',
    url: '#service',
  },
  {
    id: 4,
    text: 'SẢN PHẨM',
    url: '/product',
  },
  {
    id: 5,
    text: 'TIN TỨC',
    url: '#news',
  //   style: 'dropdown-toggle',
  //   nav_item: [
  //     {
  //       id: 1,
  //       text: 'TIN TỨC NỔI BẬT',
  //       url: '#superNew',
  //     },
  //     {
  //       id: 2,
  //       text: 'TIN TỨC TUYỂN DỤNG',
  //       url: '#recruitment',
  //     }
  // ]
  },
  {
    id: 6,
    text: 'BẢNG GIÁ',
    url: '#price',
  },
  {
    id: 7,
    text: 'CHỨNG THỰC',
    url: '#testimonials',
  },
  {
    id: 8,
    text: 'LIÊN HỆ',
    url: '#contact',
  },
]
