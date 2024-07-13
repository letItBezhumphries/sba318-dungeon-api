const characters = [
  {
    id: 'ef53c8dd-75ff-434f-a2f4-84ba7344c19b',
    img: 'https://loremflickr.com/640/480/barbarian?lock=7328141672448000',
    userId: 'ff1db988-da92-47c8-9625-50f5439235b6',
    name: 'Mae Nitzsche',
    gender: 'Gender variant',
    class_type: 'barbarian',
    age: 137,
    hit_points: 25,
  },
  {
    id: 'c58e413c-69e2-4b5a-b7a4-d62a163734ec',
    img: 'https://loremflickr.com/640/480/wizard?lock=2827631011561472',
    userId: '41fac36e-7c6a-44ad-8c52-4e6ab5de1807',
    name: 'Grant Towne',
    gender: 'male',
    class_type: 'wizard',
    age: 65,
    hit_points: 19,
  },
  {
    id: '464a966b-2ec8-4445-80b8-4d38f329a6c0',
    img: 'https://loremflickr.com/640/480/wizard?lock=1351281633394688',
    userId: '41fac36e-7c6a-44ad-8c52-4e6ab5de1807',
    name: 'Guillermo Schneider',
    gender: 'female',
    class_type: 'wizard',
    age: 54,
    hit_points: 20,
  },
  {
    id: '70d1de03-7ae4-473e-9d46-b93b2a490a75',
    img: 'https://loremflickr.com/640/480/thief?lock=1889837277773824',
    userId: '7c9b13e9-adb0-435d-86f5-2fb8f3203534',
    name: 'Dino McCullough',
    gender: 'Trigender',
    class_type: 'thief',
    age: 130,
    hit_points: 17,
  },
  {
    id: '4a99852b-d634-4519-8922-605fee1a7938',
    img: 'https://loremflickr.com/640/480/thief?lock=389563985952768',
    userId: '7c9b13e9-adb0-435d-86f5-2fb8f3203534',
    name: 'Orin Rempel',
    gender: 'Cis female',
    class_type: 'thief',
    age: 24,
    hit_points: 31,
  },
  {
    id: '6c831c6c-6644-40be-8c9f-9972936dd8cc',
    img: 'https://loremflickr.com/640/480/Ranger?lock=4067820163825664',
    userId: '52c2374e-227d-43ca-bfaa-95a7c1dd5bfa',
    name: 'Jayson Abbott',
    gender: 'male',
    class_type: 'Ranger',
    age: 157,
    hit_points: 14,
  },
  {
    id: '94ffc88b-57c1-457a-9d3f-67d34c5b4979',
    img: 'https://loremflickr.com/640/480/Ranger?lock=1506284780126208',
    userId: '52c2374e-227d-43ca-bfaa-95a7c1dd5bfa',
    name: 'Americo Weber',
    gender: 'female',
    class_type: 'Ranger',
    age: 104,
    hit_points: 29,
  },
  {
    id: 'ee1e6007-da64-4e53-8cf6-0ebf6b48fa65',
    img: 'https://loremflickr.com/640/480/Ranger?lock=6674664019460096',
    userId: '52c2374e-227d-43ca-bfaa-95a7c1dd5bfa',
    name: 'Elyse Cronin',
    gender: 'male',
    class_type: 'Ranger',
    age: 112,
    hit_points: 30,
  },
  {
    id: '02c4da6b-1010-4fb9-8e3a-d57634666b4f',
    img: 'https://loremflickr.com/640/480/cleric?lock=5852897044594688',
    userId: '8f431474-ca36-42ef-b746-d070a21dc68e',
    name: 'Kaylee Hilpert-Lowe',
    gender: 'Gender nonconforming',
    class_type: 'cleric',
    age: 54,
    hit_points: 18,
  },
  {
    id: '29ff4727-4279-46d4-bac1-67702f9676d5',
    img: 'https://loremflickr.com/640/480/Fighter?lock=1086449300537344',
    userId: 'e0acebf7-8cdc-4da6-9c5b-1d33d34ce926',
    name: 'Cristian Donnelly',
    gender: 'male',
    class_type: 'Fighter',
    age: 63,
    hit_points: 26,
  },
  {
    id: '049dba38-010e-456d-bd28-1dfe9f9cf0f4',
    img: 'https://loremflickr.com/640/480/Fighter?lock=4874381855555584',
    userId: 'e0acebf7-8cdc-4da6-9c5b-1d33d34ce926',
    name: 'Lloyd Waters',
    gender: 'male',
    class_type: 'Fighter',
    age: 59,
    hit_points: 30,
  },
  {
    id: 'f0c5db1d-5c1a-4644-b9a8-9bcc054ac01f',
    img: 'https://loremflickr.com/640/480/Fighter?lock=5688060618473472',
    userId: 'e0acebf7-8cdc-4da6-9c5b-1d33d34ce926',
    name: 'Blanca Heller',
    gender: 'male',
    class_type: 'Fighter',
    age: 31,
    hit_points: 14,
  },
  {
    id: 'd9456d19-3666-424d-8bd8-017dacfa4cb3',
    img: 'https://loremflickr.com/640/480/Paladin?lock=8904305681629184',
    userId: '86c2e1a4-5f9a-4559-bda4-bfbd5eb7c18b',
    name: 'Bettie Kuhn',
    gender: 'Woman',
    class_type: 'Paladin',
    age: 70,
    hit_points: 33,
  },
  {
    id: '9099cc25-22b2-4ca6-8d7b-a60be7e8c3ed',
    img: 'https://loremflickr.com/640/480/Paladin?lock=8269540519575552',
    userId: '86c2e1a4-5f9a-4559-bda4-bfbd5eb7c18b',
    name: 'Frederick Bartoletti',
    gender: 'Transexual man',
    class_type: 'Paladin',
    age: 147,
    hit_points: 12,
  },
  {
    id: '0d05e3af-f61d-49c3-a841-fb50c6bcb00f',
    img: 'https://loremflickr.com/640/480/Paladin?lock=491147254300672',
    userId: '86c2e1a4-5f9a-4559-bda4-bfbd5eb7c18b',
    name: 'Zita Gleichner',
    gender: 'Demi-woman',
    class_type: 'Paladin',
    age: 71,
    hit_points: 17,
  },
  {
    id: 'e0c33734-a800-49c2-8db2-05fe5bde4435',
    img: 'https://loremflickr.com/640/480/sorcerer?lock=8587721012412416',
    userId: 'd672a67b-8ae3-4ed0-a3e1-1b1b8f3e859e',
    name: 'Prince Steuber',
    gender: 'male',
    class_type: 'sorcerer',
    age: 118,
    hit_points: 23,
  },
  {
    id: '3cd70690-c187-448a-aa0c-a157d8ff7331',
    img: 'https://loremflickr.com/640/480/sorcerer?lock=966813273817088',
    userId: 'd672a67b-8ae3-4ed0-a3e1-1b1b8f3e859e',
    name: 'Elise McGlynn',
    gender: 'female',
    class_type: 'sorcerer',
    age: 77,
    hit_points: 32,
  },
  {
    id: 'd00bc6bc-bba8-462b-ab70-9cc60bb4a0b7',
    img: 'https://loremflickr.com/640/480/sorcerer?lock=8952215140040704',
    userId: 'd672a67b-8ae3-4ed0-a3e1-1b1b8f3e859e',
    name: 'Elvie Schulist',
    gender: 'female',
    class_type: 'sorcerer',
    age: 75,
    hit_points: 16,
  },
  {
    id: 'f2bd72c9-826c-4ff1-b8a4-efa921131c2a',
    img: 'https://loremflickr.com/640/480?lock=2555792299393024',
    userId: '23d482fb-5efb-4fce-aa95-045dfbc00589',
    name: 'Concepcion Hammes',
    gender: 'Gender fluid',
    age: 84,
    hit_points: 22,
  },
  {
    id: '2c1c6239-f74d-41ec-a043-5f43b5ae4703',
    img: 'https://loremflickr.com/640/480?lock=8233962331701248',
    userId: '2297b0d5-09ce-4aac-86ac-7150b93d3efe',
    name: 'Jalon Schumm',
    gender: 'female',
    age: 95,
    hit_points: 26,
  },
];

module.exports = characters;
