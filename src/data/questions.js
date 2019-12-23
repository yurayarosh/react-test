export default [
  {
    id: 'test-1',
    title: 'Test 1',
    questions: [
      {
        id: 1,
        title: 'How many hours in a day',
        rightAnswer: 4,
        currentAnswer: null,
        answers: [
          { isHandling: false, id: 1, title: '48' },
          { isHandling: false, id: 2, title: '12' },
          { isHandling: false, id: 3, title: '18' },
          { isHandling: false, id: 4, title: '24' },
        ],
      },
      {
        id: 2,
        title: 'How many wheels does bike have',
        rightAnswer: 2,
        currentAnswer: null,
        answers: [
          { isHandling: false, id: 1, title: 'One' },
          { isHandling: false, id: 2, title: 'Two' },
          { isHandling: false, id: 3, title: 'Three' },
          { isHandling: false, id: 4, title: `It does'nt has any whells` },
        ],
      },
      {
        id: 3,
        title: 'How many is 2 + 2',
        rightAnswer: 3,
        currentAnswer: null,
        answers: [
          { isHandling: false, id: 1, title: '9' },
          { isHandling: false, id: 2, title: '10' },
          { isHandling: false, id: 3, title: '4' },
          { isHandling: false, id: 4, title: '1' },
        ],
      },
    ],
  },
  {
    id: 'test-2',
    title: 'Test 2',
    questions: [
      {
        id: 1,
        title: 'What is the capital of Ukraine',
        rightAnswer: 2,
        currentAnswer: null,
        answers: [
          { isHandling: false, id: 1, title: 'Minsk' },
          { isHandling: false, id: 2, title: 'Kiev' },
          { isHandling: false, id: 3, title: 'Paris' },
          { isHandling: false, id: 4, title: 'London' },
        ],
      },
      {
        id: 2,
        title: 'What is the longest river in the world',
        rightAnswer: 3,
        currentAnswer: null,
        answers: [
          { isHandling: false, id: 1, title: 'Amazon' },
          { isHandling: false, id: 2, title: 'Mississippi' },
          { isHandling: false, id: 3, title: 'Nile' },
          { isHandling: false, id: 4, title: `Dnieper` },
        ],
      },
      {
        id: 3,
        title: 'What color sky is',
        rightAnswer: 4,
        currentAnswer: null,
        answers: [
          { isHandling: false, id: 1, title: 'Black' },
          { isHandling: false, id: 2, title: 'White' },
          { isHandling: false, id: 3, title: 'Orange' },
          { isHandling: false, id: 4, title: 'Blue' },
        ],
      },
    ],
  },
]
