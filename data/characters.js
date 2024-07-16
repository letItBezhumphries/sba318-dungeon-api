const characters = [
  {
    id: '557a734be7ea476fb56bd3ed90ba1ece',
    img: 'https://loremflickr.com/640/480?lock=7540152394055680',
    userId: 'f57dfc7534b34f15b750ee11bbf3f520',
    name: 'Lenna Wyman',
    gender: 'Trans woman',
    age: 94,
    hit_points: 30,
  },
  {
    id: 'f8cd43544480470ba2db7b7c5c0ed6d2',
    img: 'https://loremflickr.com/640/480?lock=5496624107225088',
    userId: 'f57dfc7534b34f15b750ee11bbf3f520',
    name: 'Imogene Skiles',
    gender: 'Trans female',
    age: 121,
    hit_points: 15,
  },
  {
    id: '3f1c3f3ba4894dc4a3622dd3600d1258',
    img: 'https://loremflickr.com/640/480?lock=5773581390708736',
    userId: 'f414a1c903014ff0b3aeed911f37d4b4',
    name: 'Aleen Reichert',
    gender: 'female',
    age: 131,
    hit_points: 25,
  },
  {
    id: '81189e142fd0488681007426f108e9e0',
    img: 'https://loremflickr.com/640/480?lock=4243366491455488',
    userId: 'f414a1c903014ff0b3aeed911f37d4b4',
    name: 'Ellis Herzog',
    gender: 'female',
    age: 87,
    hit_points: 33,
  },
  {
    id: '4a1eb7199fee496bbc535f008af77b24',
    img: 'https://loremflickr.com/640/480?lock=5123403178573824',
    userId: 'd20f715a96304c0f9a3b8722b052648a',
    name: 'Raoul Rodriguez',
    gender: 'Pangender',
    age: 86,
    hit_points: 24,
  },
  {
    id: 'c77628a12418474d8f1426eca723ce3b',
    img: 'https://loremflickr.com/640/480?lock=3580548842782720',
    userId: 'd20f715a96304c0f9a3b8722b052648a',
    name: 'Jaime Marquardt',
    gender: 'Multigender',
    age: 121,
    hit_points: 26,
  },
  {
    id: '144db5c985b648d5b567f3d79e79e2e7',
    img: 'https://loremflickr.com/640/480?lock=6948171091542016',
    userId: '53b0b4a8da8643e2966e13ab91ef5428',
    name: 'Moshe Hammes',
    gender: 'male',
    age: 137,
    hit_points: 22,
  },
  {
    id: '29ad3f8bc8fb4895a58064d6caed14be',
    img: 'https://loremflickr.com/640/480?lock=3974684005629952',
    userId: '53b0b4a8da8643e2966e13ab91ef5428',
    name: 'Austen Gorczany',
    gender: 'female',
    age: 28,
    hit_points: 30,
  },
  {
    id: '982cdb488cf44c3b898bdb5fe19d30a8',
    img: 'https://loremflickr.com/640/480?lock=1899665909874688',
    userId: '85bee1f005694d2c851278c2523d15b4',
    name: 'Virgie Rice',
    gender: 'Demigender',
    age: 35,
    hit_points: 22,
  },
  {
    id: 'bebd631b3e9947d79d5e3f05cd725526',
    img: 'https://loremflickr.com/640/480?lock=4514206804082688',
    userId: 'd890f5e2b2c54aa6a3b1848e3dfc4722',
    name: 'Henry McCullough',
    gender: 'male',
    age: 99,
    hit_points: 30,
  },
  {
    id: '55a232a51aa44dc98ffdc85fbcda376a',
    img: 'https://loremflickr.com/640/480?lock=7172569092325376',
    userId: 'd890f5e2b2c54aa6a3b1848e3dfc4722',
    name: 'Rex Lehner',
    gender: 'male',
    age: 137,
    hit_points: 26,
  },
  {
    id: '875690ab68e142deaafcdc7734c81f77',
    img: 'https://loremflickr.com/640/480?lock=5410253743063040',
    userId: 'fe0007f2bbe3438c9b8130f2b92adede',
    name: 'Donavon Blanda-Dare',
    gender: 'Cis woman',
    age: 46,
    hit_points: 12,
  },
  {
    id: 'b5969710ff014d45b9a66adb00aa1d7b',
    img: 'https://loremflickr.com/640/480?lock=2179505439375360',
    userId: 'fe0007f2bbe3438c9b8130f2b92adede',
    name: 'Christy Murazik',
    gender: 'Cisgender male',
    age: 36,
    hit_points: 23,
  },
  {
    id: '5575de8186e5456f85d39dac027725ba',
    img: 'https://loremflickr.com/640/480?lock=6809347235512320',
    userId: 'b60651d629444b56bb025d4df571a6ee',
    name: 'Charles Simonis',
    gender: 'female',
    age: 26,
    hit_points: 29,
  },
  {
    id: 'f078238cf7214bfa9739948c5fb37f04',
    img: 'https://loremflickr.com/640/480?lock=2581778441175040',
    userId: 'b60651d629444b56bb025d4df571a6ee',
    name: 'Greyson Durgan',
    gender: 'female',
    age: 107,
    hit_points: 21,
  },
  {
    id: '9569307f02de4e61951ff03b5eb53d48',
    img: 'https://loremflickr.com/640/480?lock=8917033720741888',
    userId: '4dae82ef90104b2eba57628e5efd7e21',
    name: 'Earnestine Fahey-Grimes',
    gender: 'Intersex man',
    age: 88,
    hit_points: 27,
  },
  {
    id: '9e260995997646cc9fec4e746f50ab01',
    img: 'https://loremflickr.com/640/480?lock=2936362493804544',
    userId: '4dae82ef90104b2eba57628e5efd7e21',
    name: 'Einar Kunde',
    gender: 'Intersex man',
    age: 15,
    hit_points: 33,
  },
  {
    id: '786837efd9ca48cc850b941820197d41',
    img: 'https://loremflickr.com/640/480?lock=2837059381231616',
    userId: 'a94d04c307144149adab97006a760d99',
    name: 'Arnoldo Grady',
    gender: 'male',
    age: 63,
    hit_points: 32,
  },
  {
    id: 'd7d1ea89b6c44c81b0377a7d3da34d02',
    img: 'https://loremflickr.com/640/480?lock=3380147122077696',
    userId: 'a94d04c307144149adab97006a760d99',
    name: 'Riley Dickinson',
    gender: 'male',
    age: 121,
    hit_points: 32,
  },
  {
    id: '4b6f31cadf7c4b9eb44013053746ed7a',
    img: 'https://loremflickr.com/640/480?lock=5105849183764480',
    userId: 'a94d04c307144149adab97006a760d99',
    name: 'Orland Nicolas',
    gender: 'female',
    age: 157,
    hit_points: 16,
  },
];

module.exports = characters;
