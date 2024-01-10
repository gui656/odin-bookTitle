const getTheTitles = require('./bookTitle');

test('It should be these exact book titles.', () => {
    // Call the function
    const result = getTheTitles();
  
    // Make assertions
    expect(result).toEqual([
        'Peter Pan',
        'The Chronicles of Narnia',
        'Harry Potter',
        'The Wonderful Wizard of Oz'
      ])
  });
  
