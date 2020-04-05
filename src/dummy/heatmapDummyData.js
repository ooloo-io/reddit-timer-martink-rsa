const heatmapDummyData = [
  [
    8,
    6,
    2,
    4,
    5,
    6,
    8,
    3,
    5,
    8,
    3,
    4,
    8,
    1,
    3,
    2,
    6,
    4,
    3,
    7,
    5,
    3,
    6,
    8,
  ],
  [
    4,
    1,
    7,
    4,
    6,
    0,
    0,
    9,
    4,
    3,
    7,
    4,
    9,
    4,
    8,
    11,
    8,
    9,
    7,
    6,
    9,
    6,
    9,
    4,
  ],
  [
    4,
    1,
    7,
    4,
    6,
    0,
    0,
    9,
    4,
    3,
    7,
    4,
    9,
    4,
    8,
    11,
    8,
    9,
    7,
    6,
    9,
    6,
    9,
    4,
  ],
  [
    4,
    1,
    7,
    4,
    6,
    0,
    0,
    9,
    4,
    3,
    7,
    4,
    9,
    4,
    8,
    11,
    8,
    9,
    7,
    6,
    9,
    6,
    9,
    4,
  ],
  [
    4,
    1,
    7,
    4,
    6,
    0,
    0,
    9,
    4,
    3,
    7,
    4,
    9,
    4,
    8,
    11,
    8,
    9,
    7,
    6,
    9,
    6,
    9,
    4,
  ],
  [
    4,
    1,
    7,
    4,
    6,
    0,
    0,
    9,
    4,
    3,
    7,
    4,
    9,
    4,
    8,
    11,
    8,
    9,
    7,
    6,
    9,
    6,
    9,
    4,
  ],
  [
    9,
    5,
    2,
    7,
    4,
    2,
    7,
    2,
    5,
    1,
    2,
    9,
    2,
    5,
    4,
    2,
    0,
    5,
    1,
    7,
    3,
    6,
    8,
    3,
  ],
];

export default heatmapDummyData;

/* const heatmapDummyData = {
  sunday: [
    4,
    1,
    7,
    4,
    2,
    0,
    6,
    9,
    7,
    3,
    7,
    5,
    9,
    4,
    8,
    11,
    8,
    1,
    1,
    1,
    5,
    8,
    9,
    4,
  ],
  monday: [
    4,
    1,
    7,
    4,
    6,
    0,
    0,
    9,
    4,
    3,
    7,
    4,
    9,
    4,
    8,
    11,
    8,
    9,
    7,
    6,
    9,
    6,
    9,
    4,
  ],
  tuesday: [
    4,
    1,
    7,
    4,
    6,
    0,
    0,
    9,
    4,
    3,
    7,
    4,
    9,
    4,
    8,
    11,
    8,
    9,
    7,
    6,
    9,
    6,
    9,
    4,
  ],
  wednesday: [
    4,
    1,
    7,
    4,
    6,
    0,
    0,
    9,
    4,
    3,
    7,
    4,
    9,
    4,
    8,
    11,
    8,
    9,
    7,
    6,
    9,
    6,
    9,
    4,
  ],
  thursday: [
    4,
    1,
    7,
    4,
    6,
    0,
    0,
    9,
    4,
    3,
    7,
    4,
    9,
    4,
    8,
    11,
    8,
    9,
    7,
    6,
    9,
    6,
    9,
    4,
  ],
  friday: [
    4,
    1,
    7,
    4,
    6,
    0,
    0,
    9,
    4,
    3,
    7,
    4,
    9,
    4,
    8,
    11,
    8,
    9,
    7,
    6,
    9,
    6,
    9,
    4,
  ],
  saturday: [
    4,
    1,
    7,
    4,
    6,
    0,
    0,
    9,
    4,
    3,
    7,
    4,
    9,
    4,
    8,
    11,
    8,
    9,
    7,
    6,
    9,
    6,
    9,
    4,
  ],
};

export default heatmapDummyData; */

/* const heatmapDummyData = {
  sunday: {
    0: 4,
    1: 1,
    2: 7,
    3: 4,
    4: 2,
    5: 0,
    6: 6,
    7: 9,
    8: 7,
    9: 3,
    10: 7,
    11: 5,
    12: 9,
    13: 4,
    14: 8,
    15: 11,
    16: 8,
    17: 1,
    18: 1,
    19: 1,
    20: 5,
    21: 8,
    22: 9,
    23: 4,
  },
  monday: {
    0: 4,
    1: 1,
    2: 7,
    3: 4,
    4: 6,
    5: 0,
    6: 0,
    7: 9,
    8: 4,
    9: 3,
    10: 7,
    11: 4,
    12: 9,
    13: 4,
    14: 8,
    15: 11,
    16: 8,
    17: 9,
    18: 7,
    19: 6,
    20: 9,
    21: 6,
    22: 9,
    23: 4,
  },
  tuesday: {
    0: 4,
    1: 1,
    2: 7,
    3: 4,
    4: 6,
    5: 0,
    6: 0,
    7: 9,
    8: 4,
    9: 3,
    10: 7,
    11: 4,
    12: 9,
    13: 4,
    14: 8,
    15: 11,
    16: 8,
    17: 9,
    18: 7,
    19: 6,
    20: 9,
    21: 6,
    22: 9,
    23: 4,
  },
  wednesday: {
    0: 4,
    1: 1,
    2: 7,
    3: 4,
    4: 6,
    5: 0,
    6: 0,
    7: 9,
    8: 4,
    9: 3,
    10: 7,
    11: 4,
    12: 9,
    13: 4,
    14: 8,
    15: 11,
    16: 8,
    17: 9,
    18: 7,
    19: 6,
    20: 9,
    21: 6,
    22: 9,
    23: 4,
  },
  thursday: {
    0: 4,
    1: 1,
    2: 7,
    3: 4,
    4: 6,
    5: 0,
    6: 0,
    7: 9,
    8: 4,
    9: 3,
    10: 7,
    11: 4,
    12: 9,
    13: 4,
    14: 8,
    15: 11,
    16: 8,
    17: 9,
    18: 7,
    19: 6,
    20: 9,
    21: 6,
    22: 9,
    23: 4,
  },
  friday: {
    0: 4,
    1: 1,
    2: 7,
    3: 4,
    4: 6,
    5: 0,
    6: 0,
    7: 9,
    8: 4,
    9: 3,
    10: 7,
    11: 4,
    12: 9,
    13: 4,
    14: 8,
    15: 11,
    16: 8,
    17: 9,
    18: 7,
    19: 6,
    20: 9,
    21: 6,
    22: 9,
    23: 4,
  },
  saturday: {
    0: 4,
    1: 1,
    2: 7,
    3: 4,
    4: 6,
    5: 0,
    6: 0,
    7: 9,
    8: 4,
    9: 3,
    10: 7,
    11: 4,
    12: 9,
    13: 4,
    14: 8,
    15: 11,
    16: 8,
    17: 9,
    18: 7,
    19: 6,
    20: 9,
    21: 6,
    22: 9,
    23: 4,
  },
};

export default heatmapDummyData;
 */