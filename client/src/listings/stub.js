// stub images attribution <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by pikisuperstar - www.freepik.com</a>

import spr from '../res/sun-pour-room.jpg'
import had from '../res/happy-au-day.jpg'
import br from '../res/book-reading.jpg'
import ic from '../res/ice-cream.jpg'
import ib from '../res/idea-badges.jpg'

export const getBy = (id) =>
  Promise.resolve({
    json: () => stubList.find(x => x.id === id),
    ok: true
  })

export const getAll = () =>
  Promise.resolve({
    json: () => stubList 
  })

export const stubList = [
  {
    id: '1',
    img: spr,
    title: 'Sed ut perspiciatis',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    link: ''
  },
  {
    id: '2',
    img: had,
    title: 'Cras dapibus nunc et auctor aliquam.',
    description: 'libero nisl faucibus velit, quis ornare lacus mi sed sem. Curabitur eu diam diam. Integer at ipsum mauris.',
    link: ''
  },
  {
    id: '3',
    img: br,
    title: 'In eget neque ac velit hendrerit sagittis sit amet id ex',
    description: 'rutrum in massa id, malesuada pretium risus. Duis nec turpis metus. Pellentesque ullamcorper, libero a vulputate vestibulu.',
    link: ''
  },
  {
    id: '4',
    img: ic,
    title: 'Duis tincidunt ipsum a risus imperdiet luctus',
    description: 'Vivamus vulputate justo tempus libero hendrerit sollicitudin. Morbi euismod fermentum tempus. Quisque iaculis elementum ante, sed lobortis tortor fermentum sagittis. Cras non fringilla felis. Donec leo magna, luctus cursus blandit et, bibendum et nisi.',
    link: ''
  }, {
    id: '5',
    img: ib,
    title: 'Aenean imperdiet elit sed lobortis vehicula',
    description: 'Integer sodales eleifend ultricies. Nullam ac sollicitudin risus, sit amet semper risus. Vivamus eu ligula ante. Donec eget dapibus libero. Vestibulum finibus placerat mi consequat blandit. Sed malesuada hendrerit metus ut vestibulum. Phasellus efficitur eleifend dolor, quis cursus nulla tincidunt ut',
    link: ''
  },
  {
    id: '6',
    img: spr,
    title: 'Maecenas ullamcorper dui nec',
    description: 'Suspendisse efficitur auctor mi, sed bibendum elit varius elementum. Sed luctus sagittis leo ut fermentum.',
    link: ''
  }, {
    id: '7',
    img: spr,
    title: 'In eget neque ac velit',
    description: 'Vivamus tempor sodales venenatis. Morbi et diam id dui sagittis condimentum. Morbi id lorem eros. Vivamus eleifend efficitur dui id semper. In massa orci, rutrum in massa id, malesuada pretium risus',
    link: ''
  },
  {
    id: '8',
    img: spr,
    title: 'Lorem ipsum dolor sit amet',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse sodales luctus urna in tempus.',
    link: ''
  },
]