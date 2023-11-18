// Импорт фото
import iPhone13pro from '.././image/iphone13card.webp'
import s23 from '.././image/samsungs22.webp'
import poco from '.././image/poco.webp'
import pixel from '.././image/pixel.webp'
import oneplus from '.././image/oneplus.webp'
import oppo from '.././image/oppo.webp'
import macbook from '.././image/macboook.jpg'
import xiaomibook from '.././image/large_noutbuk_xiaomi_redmi_g_2022_jyu4490cn_4__1_.webp'
import watch from '.././image/applewatch.webp'
import gwatch from '.././image/googlewatch.webp'
import airpods from '.././image/airpods2.webp'
import buds3 from '.././image/buds3pro.webp'
import jbl from '.././image/jbl.webp'


import { createSlice } from '@reduxjs/toolkit'




























const dropdowns = [
    // Телефоны
    {
      title: 'Смартфоны',
      isOpen: false,
      items: [
        'Apple iPhone',
        'Samsung',
        'Xiaomi',
        'OnePlus',
        'Oppo',
        'Goggle Pixel'
      ],
      product: [
        {
          'Apple iPhone':[
            {
                Model: 'iPhone 13 Pro',
                Price: 70000,
                Photo: iPhone13pro
            }, 
            {
                Model: 'iPhone 13 Pro',
                Price: 70000,
                Photo: iPhone13pro
            }, 
            {
                Model: 'iPhone 13 Pro',
                Price: 70000,
                Photo: iPhone13pro
            }, 
            {
                Model: 'iPhone 13 Pro',
                Price: 70000,
                Photo: iPhone13pro
            },
            {
              Model: 'iPhone 13 Pro',
              Price: 70000,
              Photo: iPhone13pro
          },
            {
              Model: 'iPhone 13 Pro',
              Price: 70000,
              Photo: iPhone13pro
          },
          {
            Model: 'iPhone 13 Pro',
            Price: 70000,
            Photo: iPhone13pro
        },
        {
          Model: 'iPhone 13 Pro',
          Price: 70000,
          Photo: iPhone13pro
      },
      ],
          Samsung:[
            {
              Model: 'Samsung Galaxy S23 Ultra',
              Price: 90899,
              Photo: s23
            }, 
            {
              Model: 'Samsung Galaxy S23 Ultra',
              Price: 90899,
              Photo: s23
            }, 
            {
              Model: 'Samsung Galaxy S23 Ultra',
              Price: 90899,
              Photo: s23
            }, 
            {
              Model: 'Samsung Galaxy S23 Ultra',
              Price: 90899,
              Photo: s23
            }, 
            {
              Model: 'Samsung Galaxy S23 Ultra',
              Price: 90899,
              Photo: s23
            }, 
            {
              Model: 'Samsung Galaxy S23 Ultra',
              Price: 90899,
              Photo: s23
            }, 
            {
              Model: 'Samsung Galaxy S23 Ultra',
              Price: 90899,
              Photo: s23
            }, 
            
        ],
          Xiaomi:[
            {
              Model: 'Xiaomi POCO X5 Pro 5G',
              Price: 27399,
              Photo: poco
            }, 
            {
              Model: 'Xiaomi POCO X5 Pro 5G',
              Price: 27399,
              Photo: poco
            }, 
            {
              Model: 'Xiaomi POCO X5 Pro 5G',
              Price: 27399,
              Photo: poco
            }, 
            {
              Model: 'Xiaomi POCO X5 Pro 5G',
              Price: 27399,
              Photo: poco
            }, 
            {
              Model: 'Xiaomi POCO X5 Pro 5G',
              Price: 27399,
              Photo: poco
            }, 
            {
              Model: 'Xiaomi POCO X5 Pro 5G',
              Price: 27399,
              Photo: poco
            }, 
            {
              Model: 'Xiaomi POCO X5 Pro 5G',
              Price: 27399,
              Photo: poco
            }, 
            {
              Model: 'Xiaomi POCO X5 Pro 5G',
              Price: 27399,
              Photo: poco
            },    
        ],
          'Goggle Pixel':[
          {
            Model: 'Google Pixel 6A',
            Price: 35999,
            Photo: pixel
          }, 
          {
            Model: 'Google Pixel 6A',
            Price: 35999,
            Photo: pixel
          }, 
          {
            Model: 'Google Pixel 6A',
            Price: 35999,
            Photo: pixel
          }, 
          {
            Model: 'Google Pixel 6A',
            Price: 35999,
            Photo: pixel
          }, 
          {
            Model: 'Google Pixel 6A',
            Price: 35999,
            Photo: pixel
          }, 
          {
            Model: 'Google Pixel 6A',
            Price: 35999,
            Photo: pixel
          }, 

          {
            Model: 'Google Pixel 6A',
            Price: 35999,
            Photo: pixel
          }, 
          {
            Model: 'Google Pixel 6A',
            Price: 35999,
            Photo: pixel
          }, 
        ],
          OnePlus:[
            {
            Model: 'OnePlus 11',
            Price: 78999,
            Photo: oneplus
            }, 
            {
              Model: 'OnePlus 11',
              Price: 78999,
              Photo: oneplus
              }, 
              {
                Model: 'OnePlus 11',
                Price: 78999,
                Photo: oneplus
                }, 

                {
                  Model: 'OnePlus 11',
                  Price: 78999,
                  Photo: oneplus
                  }, 
                  {
                    Model: 'OnePlus 11',
                    Price: 78999,
                    Photo: oneplus
                    }, 

                    {
                      Model: 'OnePlus 11',
                      Price: 78999,
                      Photo: oneplus
                      }, 

                        {
            Model: 'OnePlus 11',
            Price: 78999,
            Photo: oneplus
            }, 
            {
              Model: 'OnePlus 11',
              Price: 78999,
              Photo: oneplus
              },  
        ],
          Oppo:[
            {
              Model: 'OPPO Find N2',
              Price: 109999,
              Photo: oppo
            }, 
        ],
        }
      ],
    },
    // Ноутбуки
    {
      title: 'Ноутбуки',
      isOpen: false,
      items: [
        'Apple MacBook',
        'Xiaomi Notebook',
        
      ],
      product:[
        {
      'Apple MacBook':[
          {
            Model: 'Apple MacBook Air 13.3',
              Price: 86999,
              Photo: macbook
          }, 
          {
            Model: 'Apple MacBook Air 13.3',
              Price: 86999,
              Photo: macbook
          }, 
          {
            Model: 'Apple MacBook Air 13.3',
              Price: 86999,
              Photo: macbook
          }, 
          {
            Model: 'Apple MacBook Air 13.3',
              Price: 86999,
              Photo: macbook
          }, 
          {
            Model: 'Apple MacBook Air 13.3',
              Price: 86999,
              Photo: macbook
          }, 
          {
            Model: 'Apple MacBook Air 13.3',
              Price: 86999,
              Photo: macbook
          }, 
          {
            Model: 'Apple MacBook Air 13.3',
              Price: 86999,
              Photo: macbook
          }, 
          {
            Model: 'Apple MacBook Air 13.3',
              Price: 86999,
              Photo: macbook
          }, 
          {
            Model: 'Apple MacBook Air 13.3',
              Price: 86999,
              Photo: macbook
          }, 

      ],
      'Xiaomi Notebook':[
          {
            Model: 'Xiaomi Redmi G 2022 16',
            Price: 95499,
            Photo: xiaomibook
          },
          {
            Model: 'Xiaomi Redmi G 2022 16',
            Price: 95499,
            Photo: xiaomibook
          },
          {
            Model: 'Xiaomi Redmi G 2022 16',
            Price: 95499,
            Photo: xiaomibook
          },
          {
            Model: 'Xiaomi Redmi G 2022 16',
            Price: 95499,
            Photo: xiaomibook
          },
          {
            Model: 'Xiaomi Redmi G 2022 16',
            Price: 95499,
            Photo: xiaomibook
          },
          {
            Model: 'Xiaomi Redmi G 2022 16',
            Price: 95499,
            Photo: xiaomibook
          },
          {
            Model: 'Xiaomi Redmi G 2022 16',
            Price: 95499,
            Photo: xiaomibook
          },
          {
            Model: 'Xiaomi Redmi G 2022 16',
            Price: 95499,
            Photo: xiaomibook
          },
          {
            Model: 'Xiaomi Redmi G 2022 16',
            Price: 95499,
            Photo: xiaomibook
          },

          
      ]},
    ]
    },
    // Часы
    {
        title: 'Часы',
        isOpen: false,
        items: [
          'Apple Watch',
          'Google Pixel Watch',
         
        ],
        product:
        [
            {
              'Apple Watch':
              [
                {
                Model: 'Apple Watch Ultra 49',
                Price: 79999,
                Photo: watch
                },    
              ],
        'Google Pixel Watch':
              [
                {
                Model: 'Google Pixel Watch Polished ',
                Price: 29999,
                Photo: gwatch
                }, 
              
              ]
           },
        ]
    },
    // Наушники
      {
        title: 'Наушники',
        isOpen: false,
        items: [
          'Apple AirPods',
          'Xiaomi',
          'JBL',
        ],
        product:[
          {
            'Apple AirPods':[
            {
              Model: 'Apple AirPods Pro',
              Price: 24749,
              Photo: airpods
            },
            {
              Model: 'Apple AirPods Pro',
              Price: 24749,
              Photo: airpods
            },
            {
              Model: 'Apple AirPods Pro',
              Price: 24749,
              Photo: airpods
            },
            {
              Model: 'Apple AirPods Pro',
              Price: 24749,
              Photo: airpods
            },
            {
              Model: 'Apple AirPods Pro',
              Price: 24749,
              Photo: airpods
            },
            {
              Model: 'Apple AirPods Pro',
              Price: 24749,
              Photo: airpods
            },
            {
              Model: 'Apple AirPods Pro',
              Price: 24749,
              Photo: airpods
            },

             
          ],
          Xiaomi:[
            {
              Model: 'Xiaomi Mi  Earphone 3 Pro',
              Price: 5999,
              Photo: buds3
            }, 
            {
              Model: 'Xiaomi Mi  Earphone 3 Pro',
              Price: 5999,
              Photo: buds3
            }, 
            {
              Model: 'Xiaomi Mi  Earphone 3 Pro',
              Price: 5999,
              Photo: buds3
            }, 
            {
              Model: 'Xiaomi Mi  Earphone 3 Pro',
              Price: 5999,
              Photo: buds3
            }, 
            {
              Model: 'Xiaomi Mi  Earphone 3 Pro',
              Price: 5999,
              Photo: buds3
            }, 
            {
              Model: 'Xiaomi Mi  Earphone 3 Pro',
              Price: 5999,
              Photo: buds3
            }, 
            {
              Model: 'Xiaomi Mi  Earphone 3 Pro',
              Price: 5999,
              Photo: buds3
            }, 
          ],
          JBL:[
            {
              Model: 'JBL Tune 760NC',
              Price: 8999,
              Photo: jbl
            }, 
            {
              Model: 'JBL Tune 760NC',
              Price: 8999,
              Photo: jbl
            }, 
            {
              Model: 'JBL Tune 760NC',
              Price: 8999,
              Photo: jbl
            }, 
            {
              Model: 'JBL Tune 760NC',
              Price: 8999,
              Photo: jbl
            }, 
            {
              Model: 'JBL Tune 760NC',
              Price: 8999,
              Photo: jbl
            }, 
            {
              Model: 'JBL Tune 760NC',
              Price: 8999,
              Photo: jbl
            }, 
            {
              Model: 'JBL Tune 760NC',
              Price: 8999,
              Photo: jbl
            }, 
            
          ],
        },
        ]
      },
    
      
  ];
  export default dropdowns;

  // ПОТОМ!!!!!!


      // {
      //   title: 'Телевизоры',
      //   isOpen: false,
      //   items: [
      //     'Samsung',
      //     'Xiaomi',
          
      //   ],
      //   product:{
      //     Samsung:[
      //       {}, {}, {}, {},
      //   ],
      //   Xiaomi:[
      //       {}, {}, {}, {},
      //   ],
      //   }
      // },
      // {
      //   title: 'Аксессуары',
      //   isOpen: false,
      //   items: [
      //     'Защитные стекла',
      //     'Чехлы',
      //   ],
      //   product:{
      //     'Защитные стекла':[
      //       {}, {}, {}, {},
      //   ],
      //     Чехлы:[
      //       {}, {}, {}, {},
      //     ],
      //   }
      // },