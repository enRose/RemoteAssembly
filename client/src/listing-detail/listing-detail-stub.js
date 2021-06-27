import spr from '../res/sun-pour-room.jpg'
import had from '../res/happy-au-day.jpg'
import br from '../res/book-reading.jpg'
import ic from '../res/ice-cream.jpg'
import ib from '../res/idea-badges.jpg'
import choreographer from '../res/choreographer.jpg'
import meditating from '../res/meditating.jpg'
import science from '../res/science.jpg'
import { fakePromise } from '../stub-util'

export const getBy = id => 
  fakePromise(() => stubList.find(x => x.id === id))

  const stubList = [
    {
      id: '1',
      isOnlineCourse: false,
      title: 'Sed ut perspiciatis',
      location: '32 Allison Drive, Hawke\'s Bays, New Zealand',
      featureImage: spr,
      images: [spr, had, br, ic, ib, choreographer, meditating, science],
      host: {
        id: 'JennieA',
        firstName: 'Jennie',
        lastName: 'Andersons',
        avatar: '',
        memberSince: '2016',
        identityVerified: true,
        bio: 'Lorem ipsum dolor sit amet! \n consectetur adipiscing elit. Aliquam dapibus tortor non tempus mattis. \n In hac habitasse platea dictumst. Integer vel aliquet elit. Nulla et lacus nec magna consectetur ultricies ut sit amet mauris. Nunc sit amet posuere nibh. Aliquam pharetra vulputate libero vitae tempor. Suspendisse ornare suscipit magna eget malesuada. Pellentesque tristique orci lobortis sodales pretium. Aliquam non felis nec erat dictum faucibus ut sed massa. Aliquam porta scelerisque rutrum.',
      },
      course: {
        hostedIn: 'English',
        durationPerClass: '2.5 hours',
        highlights: {
          studentCapacity: 6,
          includesEquipment: true
        },
        whatsIncluded: [
          {
            title: 'helmet',
            detail: 'Quisque pharetra tortor volutpat egestas semper. Suspendisse interdum mi vitae dolor vulputate, vel facilisis nunc molestie. Ut sodales sodales mauris, sit amet vulputate orci suscipit at.'
          },
          {
            title: 'helmet',
            detail: 'Quisque pharetra tortor volutpat egestas semper. Suspendisse interdum mi vitae dolor vulputate, vel facilisis nunc molestie. Ut sodales sodales mauris, sit amet vulputate orci suscipit at.'
          },
        ],
        whatToBring: [
          'water',
          'sunscreen',
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      availableDate: [
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sun, 11 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sat, 17 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sun, 18 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
      ],
      review: {
        stars: 3.55,
        numOfReviews: 49,
        by: [
          {
            userName: 'Tim',
            date: 'September 2019',
            utterance: 'Nulla nec laoreet lectus, ut fringilla lacus. Aenean fringilla sodales lacus sit amet malesuada. Duis porta, turpis et placerat vulputate, leo massa eleifend massa, eget bibendum velit orci id nulla. Duis hendrerit magna quis scelerisque ultricies. Nulla facilisi. Nulla hendrerit arcu vel risus rhoncus, eget convallis justo maximus. Sed laoreet non sem sed rhoncus. Fusce elementum augue eros, tempor gravida lectus scelerisque quis. Etiam porttitor fermentum interdum. In semper nisl ut tristique congue.'
          },
          {
            userName: 'Bob',
            avatar: '',
            date: 'May 2019',
            utterance: 'Absolutely loved this experience, more than we could\'ve even anticipated. Jannie was the perfect host - we are both relatively shy, awkward people so a photoshoot was a bit of an anxious notion for us! All those fears were immediately quelled upon meeting Jannie. She was incredibly friendly, knowledgeable and enthusiastic making us feel comfortable and confident in a situation we naturally aren\'t (getting our photos taken). She even brought us some local New Zealand chocolates and fresh banana bread she baked - which was super yum! The walk up the mountain was thoroughly enjoyable stopping at vantage points along the way and supplemented by Jannie\'s local information on New Zealand and delightful conversation. On our trip to New Zealand this was certainly one of the major highlights. An experience we will cherish for a very long time, beautifully and professionally captured in photos by Jannie. Can\'t recommend this enough!'
          },
          {
            userName: 'Hannah',
            avatar: '',
            date: 'Martch 2019',
            utterance: 'Jannie is awesome! She is so sweet and patient as you try to pick poses or find the location! I got a little lost but quickly found where I needed to go with Jannie’s guidance via a phone call. She brought delicious chocolate made right in New Zealand and was ready to help me find poses that made me feel beautiful or fun! I haven’t ever had the chance to get professional photos done by someone and this opportunity while visiting New Zealand was perfect! I’m so excited to see how wonderful they turn out. The sunset over the caldera at Mt. Eden was breathtaking and I’m so thankful she showed me this gem in the heart of Auckland and gave me an experience I won’t soon forgot and will get beautiful photos out of! Thank you so much, Jannie! Enjoyed the many laughs and the wonderful view of the city from atop Mt. Eden.'
          },
          {
            userName: 'Justin',
            avatar: '',
            date: 'March 2019',
            utterance: 'Words can\'t even describe how amazing the photoshoot was with Jannie. She absolutely made my trip to Auckland a whole lot better. Thank you so much again for this incredible opportunity. If you\'re looking to do a photoshoot here in Auckland I highly recommend her!'
          },
          {
            userName: 'Harnes',
            avatar: '',
            date: 'May 2019',
            utterance: 'Jannie was perfect! This is a brilliant experience! A must-do in Auckland.'
          },
        ]
      }
    },
    {
      id: '2',
      isOnlineCourse: false,
      title: 'Sed ut perspiciatis',
      location: '32 Allison Drive, Hawke\'s Bays, New Zealand',
      featureImage: spr,
      images: [spr, had, br, ic, ib, choreographer, meditating, science],
      host: {
        id: 'JennieA',
        firstName: 'Jennie',
        lastName: 'Andersons',
        avatar: '',
        memberSince: '2016',
        identityVerified: true,
        bio: 'Lorem ipsum dolor sit amet! \n consectetur adipiscing elit. Aliquam dapibus tortor non tempus mattis. \n In hac habitasse platea dictumst. Integer vel aliquet elit. Nulla et lacus nec magna consectetur ultricies ut sit amet mauris. Nunc sit amet posuere nibh. Aliquam pharetra vulputate libero vitae tempor. Suspendisse ornare suscipit magna eget malesuada. Pellentesque tristique orci lobortis sodales pretium. Aliquam non felis nec erat dictum faucibus ut sed massa. Aliquam porta scelerisque rutrum.',
      },
      course: {
        hostedIn: 'English',
        durationPerClass: '2.5 hours',
        highlights: {
          studentCapacity: 6,
          includesEquipment: true
        },
        whatsIncluded: [
          {
            title: 'helmet',
            detail: 'Quisque pharetra tortor volutpat egestas semper. Suspendisse interdum mi vitae dolor vulputate, vel facilisis nunc molestie. Ut sodales sodales mauris, sit amet vulputate orci suscipit at.'
          },
          {
            title: 'helmet',
            detail: 'Quisque pharetra tortor volutpat egestas semper. Suspendisse interdum mi vitae dolor vulputate, vel facilisis nunc molestie. Ut sodales sodales mauris, sit amet vulputate orci suscipit at.'
          },
        ],
        whatToBring: [
          'water',
          'sunscreen',
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      availableDate: [
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sun, 11 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sat, 17 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sun, 18 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
      ],
      review: {
        stars: 3.55,
        numOfReviews: 49,
        by: [
          {
            userName: 'Tim',
            date: 'September 2019',
            utterance: 'Nulla nec laoreet lectus, ut fringilla lacus. Aenean fringilla sodales lacus sit amet malesuada. Duis porta, turpis et placerat vulputate, leo massa eleifend massa, eget bibendum velit orci id nulla. Duis hendrerit magna quis scelerisque ultricies. Nulla facilisi. Nulla hendrerit arcu vel risus rhoncus, eget convallis justo maximus. Sed laoreet non sem sed rhoncus. Fusce elementum augue eros, tempor gravida lectus scelerisque quis. Etiam porttitor fermentum interdum. In semper nisl ut tristique congue.'
          },
          {
            userName: 'Bob',
            avatar: '',
            date: 'May 2019',
            utterance: 'Absolutely loved this experience, more than we could\'ve even anticipated. Jannie was the perfect host - we are both relatively shy, awkward people so a photoshoot was a bit of an anxious notion for us! All those fears were immediately quelled upon meeting Jannie. She was incredibly friendly, knowledgeable and enthusiastic making us feel comfortable and confident in a situation we naturally aren\'t (getting our photos taken). She even brought us some local New Zealand chocolates and fresh banana bread she baked - which was super yum! The walk up the mountain was thoroughly enjoyable stopping at vantage points along the way and supplemented by Jannie\'s local information on New Zealand and delightful conversation. On our trip to New Zealand this was certainly one of the major highlights. An experience we will cherish for a very long time, beautifully and professionally captured in photos by Jannie. Can\'t recommend this enough!'
          },
          {
            userName: 'Hannah',
            avatar: '',
            date: 'Martch 2019',
            utterance: 'Jannie is awesome! She is so sweet and patient as you try to pick poses or find the location! I got a little lost but quickly found where I needed to go with Jannie’s guidance via a phone call. She brought delicious chocolate made right in New Zealand and was ready to help me find poses that made me feel beautiful or fun! I haven’t ever had the chance to get professional photos done by someone and this opportunity while visiting New Zealand was perfect! I’m so excited to see how wonderful they turn out. The sunset over the caldera at Mt. Eden was breathtaking and I’m so thankful she showed me this gem in the heart of Auckland and gave me an experience I won’t soon forgot and will get beautiful photos out of! Thank you so much, Jannie! Enjoyed the many laughs and the wonderful view of the city from atop Mt. Eden.'
          },
          {
            userName: 'Justin',
            avatar: '',
            date: 'March 2019',
            utterance: 'Words can\'t even describe how amazing the photoshoot was with Jannie. She absolutely made my trip to Auckland a whole lot better. Thank you so much again for this incredible opportunity. If you\'re looking to do a photoshoot here in Auckland I highly recommend her!'
          },
          {
            userName: 'Harnes',
            avatar: '',
            date: 'May 2019',
            utterance: 'Jannie was perfect! This is a brilliant experience! A must-do in Auckland.'
          },
        ]
      }
    },
    {
      id: '2',
      isOnlineCourse: false,
      title: 'Sed ut perspiciatis',
      location: '32 Allison Drive, Hawke\'s Bays, New Zealand',
      featureImage: spr,
      images: [spr, had, br, ic, ib, choreographer, meditating, science],
      host: {
        id: 'JennieA',
        firstName: 'Jennie',
        lastName: 'Andersons',
        avatar: '',
        memberSince: '2016',
        identityVerified: true,
        bio: 'Lorem ipsum dolor sit amet! \n consectetur adipiscing elit. Aliquam dapibus tortor non tempus mattis. \n In hac habitasse platea dictumst. Integer vel aliquet elit. Nulla et lacus nec magna consectetur ultricies ut sit amet mauris. Nunc sit amet posuere nibh. Aliquam pharetra vulputate libero vitae tempor. Suspendisse ornare suscipit magna eget malesuada. Pellentesque tristique orci lobortis sodales pretium. Aliquam non felis nec erat dictum faucibus ut sed massa. Aliquam porta scelerisque rutrum.',
      },
      course: {
        hostedIn: 'English',
        durationPerClass: '2.5 hours',
        highlights: {
          studentCapacity: 6,
          includesEquipment: true
        },
        whatsIncluded: [
          {
            title: 'helmet',
            detail: 'Quisque pharetra tortor volutpat egestas semper. Suspendisse interdum mi vitae dolor vulputate, vel facilisis nunc molestie. Ut sodales sodales mauris, sit amet vulputate orci suscipit at.'
          },
          {
            title: 'helmet',
            detail: 'Quisque pharetra tortor volutpat egestas semper. Suspendisse interdum mi vitae dolor vulputate, vel facilisis nunc molestie. Ut sodales sodales mauris, sit amet vulputate orci suscipit at.'
          },
        ],
        whatToBring: [
          'water',
          'sunscreen',
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      availableDate: [
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sun, 11 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sat, 17 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sun, 18 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
      ],
      review: {
        stars: 3.55,
        numOfReviews: 49,
        by: [
          {
            userName: 'Tim',
            date: 'September 2019',
            utterance: 'Nulla nec laoreet lectus, ut fringilla lacus. Aenean fringilla sodales lacus sit amet malesuada. Duis porta, turpis et placerat vulputate, leo massa eleifend massa, eget bibendum velit orci id nulla. Duis hendrerit magna quis scelerisque ultricies. Nulla facilisi. Nulla hendrerit arcu vel risus rhoncus, eget convallis justo maximus. Sed laoreet non sem sed rhoncus. Fusce elementum augue eros, tempor gravida lectus scelerisque quis. Etiam porttitor fermentum interdum. In semper nisl ut tristique congue.'
          },
          {
            userName: 'Bob',
            avatar: '',
            date: 'May 2019',
            utterance: 'Absolutely loved this experience, more than we could\'ve even anticipated. Jannie was the perfect host - we are both relatively shy, awkward people so a photoshoot was a bit of an anxious notion for us! All those fears were immediately quelled upon meeting Jannie. She was incredibly friendly, knowledgeable and enthusiastic making us feel comfortable and confident in a situation we naturally aren\'t (getting our photos taken). She even brought us some local New Zealand chocolates and fresh banana bread she baked - which was super yum! The walk up the mountain was thoroughly enjoyable stopping at vantage points along the way and supplemented by Jannie\'s local information on New Zealand and delightful conversation. On our trip to New Zealand this was certainly one of the major highlights. An experience we will cherish for a very long time, beautifully and professionally captured in photos by Jannie. Can\'t recommend this enough!'
          },
          {
            userName: 'Hannah',
            avatar: '',
            date: 'Martch 2019',
            utterance: 'Jannie is awesome! She is so sweet and patient as you try to pick poses or find the location! I got a little lost but quickly found where I needed to go with Jannie’s guidance via a phone call. She brought delicious chocolate made right in New Zealand and was ready to help me find poses that made me feel beautiful or fun! I haven’t ever had the chance to get professional photos done by someone and this opportunity while visiting New Zealand was perfect! I’m so excited to see how wonderful they turn out. The sunset over the caldera at Mt. Eden was breathtaking and I’m so thankful she showed me this gem in the heart of Auckland and gave me an experience I won’t soon forgot and will get beautiful photos out of! Thank you so much, Jannie! Enjoyed the many laughs and the wonderful view of the city from atop Mt. Eden.'
          },
          {
            userName: 'Justin',
            avatar: '',
            date: 'March 2019',
            utterance: 'Words can\'t even describe how amazing the photoshoot was with Jannie. She absolutely made my trip to Auckland a whole lot better. Thank you so much again for this incredible opportunity. If you\'re looking to do a photoshoot here in Auckland I highly recommend her!'
          },
          {
            userName: 'Harnes',
            avatar: '',
            date: 'May 2019',
            utterance: 'Jannie was perfect! This is a brilliant experience! A must-do in Auckland.'
          },
        ]
      }
    },
    {
      id: '4',
      isOnlineCourse: false,
      title: 'Sed ut perspiciatis',
      location: '32 Allison Drive, Hawke\'s Bays, New Zealand',
      featureImage: spr,
      images: [spr, had, br, ic, ib, choreographer, meditating, science],
      host: {
        id: 'JennieA',
        firstName: 'Jennie',
        lastName: 'Andersons',
        avatar: '',
        memberSince: '2016',
        identityVerified: true,
        bio: 'Lorem ipsum dolor sit amet! \n consectetur adipiscing elit. Aliquam dapibus tortor non tempus mattis. \n In hac habitasse platea dictumst. Integer vel aliquet elit. Nulla et lacus nec magna consectetur ultricies ut sit amet mauris. Nunc sit amet posuere nibh. Aliquam pharetra vulputate libero vitae tempor. Suspendisse ornare suscipit magna eget malesuada. Pellentesque tristique orci lobortis sodales pretium. Aliquam non felis nec erat dictum faucibus ut sed massa. Aliquam porta scelerisque rutrum.',
      },
      course: {
        hostedIn: 'English',
        durationPerClass: '2.5 hours',
        highlights: {
          studentCapacity: 6,
          includesEquipment: true
        },
        whatsIncluded: [
          {
            title: 'helmet',
            detail: 'Quisque pharetra tortor volutpat egestas semper. Suspendisse interdum mi vitae dolor vulputate, vel facilisis nunc molestie. Ut sodales sodales mauris, sit amet vulputate orci suscipit at.'
          },
          {
            title: 'helmet',
            detail: 'Quisque pharetra tortor volutpat egestas semper. Suspendisse interdum mi vitae dolor vulputate, vel facilisis nunc molestie. Ut sodales sodales mauris, sit amet vulputate orci suscipit at.'
          },
        ],
        whatToBring: [
          'water',
          'sunscreen',
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      availableDate: [
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sun, 11 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sat, 17 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sun, 18 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
      ],
      review: {
        stars: 3.55,
        numOfReviews: 49,
        by: [
          {
            userName: 'Tim',
            date: 'September 2019',
            utterance: 'Nulla nec laoreet lectus, ut fringilla lacus. Aenean fringilla sodales lacus sit amet malesuada. Duis porta, turpis et placerat vulputate, leo massa eleifend massa, eget bibendum velit orci id nulla. Duis hendrerit magna quis scelerisque ultricies. Nulla facilisi. Nulla hendrerit arcu vel risus rhoncus, eget convallis justo maximus. Sed laoreet non sem sed rhoncus. Fusce elementum augue eros, tempor gravida lectus scelerisque quis. Etiam porttitor fermentum interdum. In semper nisl ut tristique congue.'
          },
          {
            userName: 'Bob',
            avatar: '',
            date: 'May 2019',
            utterance: 'Absolutely loved this experience, more than we could\'ve even anticipated. Jannie was the perfect host - we are both relatively shy, awkward people so a photoshoot was a bit of an anxious notion for us! All those fears were immediately quelled upon meeting Jannie. She was incredibly friendly, knowledgeable and enthusiastic making us feel comfortable and confident in a situation we naturally aren\'t (getting our photos taken). She even brought us some local New Zealand chocolates and fresh banana bread she baked - which was super yum! The walk up the mountain was thoroughly enjoyable stopping at vantage points along the way and supplemented by Jannie\'s local information on New Zealand and delightful conversation. On our trip to New Zealand this was certainly one of the major highlights. An experience we will cherish for a very long time, beautifully and professionally captured in photos by Jannie. Can\'t recommend this enough!'
          },
          {
            userName: 'Hannah',
            avatar: '',
            date: 'Martch 2019',
            utterance: 'Jannie is awesome! She is so sweet and patient as you try to pick poses or find the location! I got a little lost but quickly found where I needed to go with Jannie’s guidance via a phone call. She brought delicious chocolate made right in New Zealand and was ready to help me find poses that made me feel beautiful or fun! I haven’t ever had the chance to get professional photos done by someone and this opportunity while visiting New Zealand was perfect! I’m so excited to see how wonderful they turn out. The sunset over the caldera at Mt. Eden was breathtaking and I’m so thankful she showed me this gem in the heart of Auckland and gave me an experience I won’t soon forgot and will get beautiful photos out of! Thank you so much, Jannie! Enjoyed the many laughs and the wonderful view of the city from atop Mt. Eden.'
          },
          {
            userName: 'Justin',
            avatar: '',
            date: 'March 2019',
            utterance: 'Words can\'t even describe how amazing the photoshoot was with Jannie. She absolutely made my trip to Auckland a whole lot better. Thank you so much again for this incredible opportunity. If you\'re looking to do a photoshoot here in Auckland I highly recommend her!'
          },
          {
            userName: 'Harnes',
            avatar: '',
            date: 'May 2019',
            utterance: 'Jannie was perfect! This is a brilliant experience! A must-do in Auckland.'
          },
        ]
      }
    }, 
    {
      id: '5',
      isOnlineCourse: false,
      title: 'Sed ut perspiciatis',
      location: '32 Allison Drive, Hawke\'s Bays, New Zealand',
      featureImage: spr,
      images: [spr, had, br, ic, ib, choreographer, meditating, science],
      host: {
        id: 'JennieA',
        firstName: 'Jennie',
        lastName: 'Andersons',
        avatar: '',
        memberSince: '2016',
        identityVerified: true,
        bio: 'Lorem ipsum dolor sit amet! \n consectetur adipiscing elit. Aliquam dapibus tortor non tempus mattis. \n In hac habitasse platea dictumst. Integer vel aliquet elit. Nulla et lacus nec magna consectetur ultricies ut sit amet mauris. Nunc sit amet posuere nibh. Aliquam pharetra vulputate libero vitae tempor. Suspendisse ornare suscipit magna eget malesuada. Pellentesque tristique orci lobortis sodales pretium. Aliquam non felis nec erat dictum faucibus ut sed massa. Aliquam porta scelerisque rutrum.',
      },
      course: {
        hostedIn: 'English',
        durationPerClass: '2.5 hours',
        highlights: {
          studentCapacity: 6,
          includesEquipment: true
        },
        whatsIncluded: [
          {
            title: 'helmet',
            detail: 'Quisque pharetra tortor volutpat egestas semper. Suspendisse interdum mi vitae dolor vulputate, vel facilisis nunc molestie. Ut sodales sodales mauris, sit amet vulputate orci suscipit at.'
          },
          {
            title: 'helmet',
            detail: 'Quisque pharetra tortor volutpat egestas semper. Suspendisse interdum mi vitae dolor vulputate, vel facilisis nunc molestie. Ut sodales sodales mauris, sit amet vulputate orci suscipit at.'
          },
        ],
        whatToBring: [
          'water',
          'sunscreen',
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      availableDate: [
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sun, 11 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sat, 17 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sun, 18 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
      ],
      review: {
        stars: 3.55,
        numOfReviews: 49,
        by: [
          {
            userName: 'Tim',
            date: 'September 2019',
            utterance: 'Nulla nec laoreet lectus, ut fringilla lacus. Aenean fringilla sodales lacus sit amet malesuada. Duis porta, turpis et placerat vulputate, leo massa eleifend massa, eget bibendum velit orci id nulla. Duis hendrerit magna quis scelerisque ultricies. Nulla facilisi. Nulla hendrerit arcu vel risus rhoncus, eget convallis justo maximus. Sed laoreet non sem sed rhoncus. Fusce elementum augue eros, tempor gravida lectus scelerisque quis. Etiam porttitor fermentum interdum. In semper nisl ut tristique congue.'
          },
          {
            userName: 'Bob',
            avatar: '',
            date: 'May 2019',
            utterance: 'Absolutely loved this experience, more than we could\'ve even anticipated. Jannie was the perfect host - we are both relatively shy, awkward people so a photoshoot was a bit of an anxious notion for us! All those fears were immediately quelled upon meeting Jannie. She was incredibly friendly, knowledgeable and enthusiastic making us feel comfortable and confident in a situation we naturally aren\'t (getting our photos taken). She even brought us some local New Zealand chocolates and fresh banana bread she baked - which was super yum! The walk up the mountain was thoroughly enjoyable stopping at vantage points along the way and supplemented by Jannie\'s local information on New Zealand and delightful conversation. On our trip to New Zealand this was certainly one of the major highlights. An experience we will cherish for a very long time, beautifully and professionally captured in photos by Jannie. Can\'t recommend this enough!'
          },
          {
            userName: 'Hannah',
            avatar: '',
            date: 'Martch 2019',
            utterance: 'Jannie is awesome! She is so sweet and patient as you try to pick poses or find the location! I got a little lost but quickly found where I needed to go with Jannie’s guidance via a phone call. She brought delicious chocolate made right in New Zealand and was ready to help me find poses that made me feel beautiful or fun! I haven’t ever had the chance to get professional photos done by someone and this opportunity while visiting New Zealand was perfect! I’m so excited to see how wonderful they turn out. The sunset over the caldera at Mt. Eden was breathtaking and I’m so thankful she showed me this gem in the heart of Auckland and gave me an experience I won’t soon forgot and will get beautiful photos out of! Thank you so much, Jannie! Enjoyed the many laughs and the wonderful view of the city from atop Mt. Eden.'
          },
          {
            userName: 'Justin',
            avatar: '',
            date: 'March 2019',
            utterance: 'Words can\'t even describe how amazing the photoshoot was with Jannie. She absolutely made my trip to Auckland a whole lot better. Thank you so much again for this incredible opportunity. If you\'re looking to do a photoshoot here in Auckland I highly recommend her!'
          },
          {
            userName: 'Harnes',
            avatar: '',
            date: 'May 2019',
            utterance: 'Jannie was perfect! This is a brilliant experience! A must-do in Auckland.'
          },
        ]
      }
    },
    {
      id: '6',
      isOnlineCourse: false,
      title: 'Sed ut perspiciatis',
      location: '32 Allison Drive, Hawke\'s Bays, New Zealand',
      featureImage: spr,
      images: [spr, had, br, ic, ib, choreographer, meditating, science],
      host: {
        id: 'JennieA',
        firstName: 'Jennie',
        lastName: 'Andersons',
        avatar: '',
        memberSince: '2016',
        identityVerified: true,
        bio: 'Lorem ipsum dolor sit amet! \n consectetur adipiscing elit. Aliquam dapibus tortor non tempus mattis. \n In hac habitasse platea dictumst. Integer vel aliquet elit. Nulla et lacus nec magna consectetur ultricies ut sit amet mauris. Nunc sit amet posuere nibh. Aliquam pharetra vulputate libero vitae tempor. Suspendisse ornare suscipit magna eget malesuada. Pellentesque tristique orci lobortis sodales pretium. Aliquam non felis nec erat dictum faucibus ut sed massa. Aliquam porta scelerisque rutrum.',
      },
      course: {
        hostedIn: 'English',
        durationPerClass: '2.5 hours',
        highlights: {
          studentCapacity: 6,
          includesEquipment: true
        },
        whatsIncluded: [
          {
            title: 'helmet',
            detail: 'Quisque pharetra tortor volutpat egestas semper. Suspendisse interdum mi vitae dolor vulputate, vel facilisis nunc molestie. Ut sodales sodales mauris, sit amet vulputate orci suscipit at.'
          },
          {
            title: 'helmet',
            detail: 'Quisque pharetra tortor volutpat egestas semper. Suspendisse interdum mi vitae dolor vulputate, vel facilisis nunc molestie. Ut sodales sodales mauris, sit amet vulputate orci suscipit at.'
          },
        ],
        whatToBring: [
          'water',
          'sunscreen',
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      availableDate: [
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sun, 11 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sat, 17 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sun, 18 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
      ],
      review: {
        stars: 3.55,
        numOfReviews: 49,
        by: [
          {
            userName: 'Tim',
            date: 'September 2019',
            utterance: 'Nulla nec laoreet lectus, ut fringilla lacus. Aenean fringilla sodales lacus sit amet malesuada. Duis porta, turpis et placerat vulputate, leo massa eleifend massa, eget bibendum velit orci id nulla. Duis hendrerit magna quis scelerisque ultricies. Nulla facilisi. Nulla hendrerit arcu vel risus rhoncus, eget convallis justo maximus. Sed laoreet non sem sed rhoncus. Fusce elementum augue eros, tempor gravida lectus scelerisque quis. Etiam porttitor fermentum interdum. In semper nisl ut tristique congue.'
          },
          {
            userName: 'Bob',
            avatar: '',
            date: 'May 2019',
            utterance: 'Absolutely loved this experience, more than we could\'ve even anticipated. Jannie was the perfect host - we are both relatively shy, awkward people so a photoshoot was a bit of an anxious notion for us! All those fears were immediately quelled upon meeting Jannie. She was incredibly friendly, knowledgeable and enthusiastic making us feel comfortable and confident in a situation we naturally aren\'t (getting our photos taken). She even brought us some local New Zealand chocolates and fresh banana bread she baked - which was super yum! The walk up the mountain was thoroughly enjoyable stopping at vantage points along the way and supplemented by Jannie\'s local information on New Zealand and delightful conversation. On our trip to New Zealand this was certainly one of the major highlights. An experience we will cherish for a very long time, beautifully and professionally captured in photos by Jannie. Can\'t recommend this enough!'
          },
          {
            userName: 'Hannah',
            avatar: '',
            date: 'Martch 2019',
            utterance: 'Jannie is awesome! She is so sweet and patient as you try to pick poses or find the location! I got a little lost but quickly found where I needed to go with Jannie’s guidance via a phone call. She brought delicious chocolate made right in New Zealand and was ready to help me find poses that made me feel beautiful or fun! I haven’t ever had the chance to get professional photos done by someone and this opportunity while visiting New Zealand was perfect! I’m so excited to see how wonderful they turn out. The sunset over the caldera at Mt. Eden was breathtaking and I’m so thankful she showed me this gem in the heart of Auckland and gave me an experience I won’t soon forgot and will get beautiful photos out of! Thank you so much, Jannie! Enjoyed the many laughs and the wonderful view of the city from atop Mt. Eden.'
          },
          {
            userName: 'Justin',
            avatar: '',
            date: 'March 2019',
            utterance: 'Words can\'t even describe how amazing the photoshoot was with Jannie. She absolutely made my trip to Auckland a whole lot better. Thank you so much again for this incredible opportunity. If you\'re looking to do a photoshoot here in Auckland I highly recommend her!'
          },
          {
            userName: 'Harnes',
            avatar: '',
            date: 'May 2019',
            utterance: 'Jannie was perfect! This is a brilliant experience! A must-do in Auckland.'
          },
        ]
      }
    }, 
    {
      id: '7',
      isOnlineCourse: false,
      title: 'Sed ut perspiciatis',
      location: '32 Allison Drive, Hawke\'s Bays, New Zealand',
      featureImage: spr,
      images: [spr, had, br, ic, ib, choreographer, meditating, science],
      host: {
        id: 'JennieA',
        firstName: 'Jennie',
        lastName: 'Andersons',
        avatar: '',
        memberSince: '2016',
        identityVerified: true,
        bio: 'Lorem ipsum dolor sit amet! \n consectetur adipiscing elit. Aliquam dapibus tortor non tempus mattis. \n In hac habitasse platea dictumst. Integer vel aliquet elit. Nulla et lacus nec magna consectetur ultricies ut sit amet mauris. Nunc sit amet posuere nibh. Aliquam pharetra vulputate libero vitae tempor. Suspendisse ornare suscipit magna eget malesuada. Pellentesque tristique orci lobortis sodales pretium. Aliquam non felis nec erat dictum faucibus ut sed massa. Aliquam porta scelerisque rutrum.',
      },
      course: {
        hostedIn: 'English',
        durationPerClass: '2.5 hours',
        highlights: {
          studentCapacity: 6,
          includesEquipment: true
        },
        whatsIncluded: [
          {
            title: 'helmet',
            detail: 'Quisque pharetra tortor volutpat egestas semper. Suspendisse interdum mi vitae dolor vulputate, vel facilisis nunc molestie. Ut sodales sodales mauris, sit amet vulputate orci suscipit at.'
          },
          {
            title: 'helmet',
            detail: 'Quisque pharetra tortor volutpat egestas semper. Suspendisse interdum mi vitae dolor vulputate, vel facilisis nunc molestie. Ut sodales sodales mauris, sit amet vulputate orci suscipit at.'
          },
        ],
        whatToBring: [
          'water',
          'sunscreen',
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      availableDate: [
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sun, 11 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sat, 17 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sun, 18 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
      ],
      review: {
        stars: 3.55,
        numOfReviews: 49,
        by: [
          {
            userName: 'Tim',
            date: 'September 2019',
            utterance: 'Nulla nec laoreet lectus, ut fringilla lacus. Aenean fringilla sodales lacus sit amet malesuada. Duis porta, turpis et placerat vulputate, leo massa eleifend massa, eget bibendum velit orci id nulla. Duis hendrerit magna quis scelerisque ultricies. Nulla facilisi. Nulla hendrerit arcu vel risus rhoncus, eget convallis justo maximus. Sed laoreet non sem sed rhoncus. Fusce elementum augue eros, tempor gravida lectus scelerisque quis. Etiam porttitor fermentum interdum. In semper nisl ut tristique congue.'
          },
          {
            userName: 'Bob',
            avatar: '',
            date: 'May 2019',
            utterance: 'Absolutely loved this experience, more than we could\'ve even anticipated. Jannie was the perfect host - we are both relatively shy, awkward people so a photoshoot was a bit of an anxious notion for us! All those fears were immediately quelled upon meeting Jannie. She was incredibly friendly, knowledgeable and enthusiastic making us feel comfortable and confident in a situation we naturally aren\'t (getting our photos taken). She even brought us some local New Zealand chocolates and fresh banana bread she baked - which was super yum! The walk up the mountain was thoroughly enjoyable stopping at vantage points along the way and supplemented by Jannie\'s local information on New Zealand and delightful conversation. On our trip to New Zealand this was certainly one of the major highlights. An experience we will cherish for a very long time, beautifully and professionally captured in photos by Jannie. Can\'t recommend this enough!'
          },
          {
            userName: 'Hannah',
            avatar: '',
            date: 'Martch 2019',
            utterance: 'Jannie is awesome! She is so sweet and patient as you try to pick poses or find the location! I got a little lost but quickly found where I needed to go with Jannie’s guidance via a phone call. She brought delicious chocolate made right in New Zealand and was ready to help me find poses that made me feel beautiful or fun! I haven’t ever had the chance to get professional photos done by someone and this opportunity while visiting New Zealand was perfect! I’m so excited to see how wonderful they turn out. The sunset over the caldera at Mt. Eden was breathtaking and I’m so thankful she showed me this gem in the heart of Auckland and gave me an experience I won’t soon forgot and will get beautiful photos out of! Thank you so much, Jannie! Enjoyed the many laughs and the wonderful view of the city from atop Mt. Eden.'
          },
          {
            userName: 'Justin',
            avatar: '',
            date: 'March 2019',
            utterance: 'Words can\'t even describe how amazing the photoshoot was with Jannie. She absolutely made my trip to Auckland a whole lot better. Thank you so much again for this incredible opportunity. If you\'re looking to do a photoshoot here in Auckland I highly recommend her!'
          },
          {
            userName: 'Harnes',
            avatar: '',
            date: 'May 2019',
            utterance: 'Jannie was perfect! This is a brilliant experience! A must-do in Auckland.'
          },
        ]
      }
    },
    {
      id: '8',
      isOnlineCourse: false,
      title: 'Sed ut perspiciatis',
      location: '32 Allison Drive, Hawke\'s Bays, New Zealand',
      featureImage: spr,
      images: [spr, had, br, ic, ib, choreographer, meditating, science],
      host: {
        id: 'JennieA',
        firstName: 'Jennie',
        lastName: 'Andersons',
        avatar: '',
        memberSince: '2016',
        identityVerified: true,
        bio: 'Lorem ipsum dolor sit amet! \n consectetur adipiscing elit. Aliquam dapibus tortor non tempus mattis. \n In hac habitasse platea dictumst. Integer vel aliquet elit. Nulla et lacus nec magna consectetur ultricies ut sit amet mauris. Nunc sit amet posuere nibh. Aliquam pharetra vulputate libero vitae tempor. Suspendisse ornare suscipit magna eget malesuada. Pellentesque tristique orci lobortis sodales pretium. Aliquam non felis nec erat dictum faucibus ut sed massa. Aliquam porta scelerisque rutrum.',
      },
      course: {
        hostedIn: 'English',
        durationPerClass: '2.5 hours',
        highlights: {
          studentCapacity: 6,
          includesEquipment: true
        },
        whatsIncluded: [
          {
            title: 'helmet',
            detail: 'Quisque pharetra tortor volutpat egestas semper. Suspendisse interdum mi vitae dolor vulputate, vel facilisis nunc molestie. Ut sodales sodales mauris, sit amet vulputate orci suscipit at.'
          },
          {
            title: 'helmet',
            detail: 'Quisque pharetra tortor volutpat egestas semper. Suspendisse interdum mi vitae dolor vulputate, vel facilisis nunc molestie. Ut sodales sodales mauris, sit amet vulputate orci suscipit at.'
          },
        ],
        whatToBring: [
          'water',
          'sunscreen',
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
      availableDate: [
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sun, 11 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sat, 17 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
        {
          time: '10:00 AM - 11:30 AM',
          date: 'Sun, 18 Jul',
          price: 125.00,
          priceUnit: 'per person',
          hostedIn: 'English',
          canBookForPrivateGroup: true
        },
      ],
      review: {
        stars: 3.55,
        numOfReviews: 49,
        by: [
          {
            userName: 'Tim',
            date: 'September 2019',
            utterance: 'Nulla nec laoreet lectus, ut fringilla lacus. Aenean fringilla sodales lacus sit amet malesuada. Duis porta, turpis et placerat vulputate, leo massa eleifend massa, eget bibendum velit orci id nulla. Duis hendrerit magna quis scelerisque ultricies. Nulla facilisi. Nulla hendrerit arcu vel risus rhoncus, eget convallis justo maximus. Sed laoreet non sem sed rhoncus. Fusce elementum augue eros, tempor gravida lectus scelerisque quis. Etiam porttitor fermentum interdum. In semper nisl ut tristique congue.'
          },
          {
            userName: 'Bob',
            avatar: '',
            date: 'May 2019',
            utterance: 'Absolutely loved this experience, more than we could\'ve even anticipated. Jannie was the perfect host - we are both relatively shy, awkward people so a photoshoot was a bit of an anxious notion for us! All those fears were immediately quelled upon meeting Jannie. She was incredibly friendly, knowledgeable and enthusiastic making us feel comfortable and confident in a situation we naturally aren\'t (getting our photos taken). She even brought us some local New Zealand chocolates and fresh banana bread she baked - which was super yum! The walk up the mountain was thoroughly enjoyable stopping at vantage points along the way and supplemented by Jannie\'s local information on New Zealand and delightful conversation. On our trip to New Zealand this was certainly one of the major highlights. An experience we will cherish for a very long time, beautifully and professionally captured in photos by Jannie. Can\'t recommend this enough!'
          },
          {
            userName: 'Hannah',
            avatar: '',
            date: 'Martch 2019',
            utterance: 'Jannie is awesome! She is so sweet and patient as you try to pick poses or find the location! I got a little lost but quickly found where I needed to go with Jannie’s guidance via a phone call. She brought delicious chocolate made right in New Zealand and was ready to help me find poses that made me feel beautiful or fun! I haven’t ever had the chance to get professional photos done by someone and this opportunity while visiting New Zealand was perfect! I’m so excited to see how wonderful they turn out. The sunset over the caldera at Mt. Eden was breathtaking and I’m so thankful she showed me this gem in the heart of Auckland and gave me an experience I won’t soon forgot and will get beautiful photos out of! Thank you so much, Jannie! Enjoyed the many laughs and the wonderful view of the city from atop Mt. Eden.'
          },
          {
            userName: 'Justin',
            avatar: '',
            date: 'March 2019',
            utterance: 'Words can\'t even describe how amazing the photoshoot was with Jannie. She absolutely made my trip to Auckland a whole lot better. Thank you so much again for this incredible opportunity. If you\'re looking to do a photoshoot here in Auckland I highly recommend her!'
          },
          {
            userName: 'Harnes',
            avatar: '',
            date: 'May 2019',
            utterance: 'Jannie was perfect! This is a brilliant experience! A must-do in Auckland.'
          },
        ]
      }
    },
  ]