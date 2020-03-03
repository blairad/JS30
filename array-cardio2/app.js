const people = [{
        name: 'andrew',
        year: 1985
    },
    {
        name: 'helen',
        year: 1986
    },
    {
        name: 'wes',
        year: 1988
    },
    {
        name: 'clarence',
        year: 1955
    },
    {
        name: 'will',
        year: 2016
    },
    {
        name: 'clarence',
        year: 2015
    }
]

const comments = [{
        text: 'something nice',
        id: 12345
    },
    {
        text: 'nice (Y)',
        id: 123456
    },
    {
        text: 'this is great',
        id: 585843
    },
    {
        text: 'i will learn',
        id: 348534
    },
    {
        text: 'feeling good',
        id: 385854
    },
    {
        text: 'yep yep',
        id: 339449
    }
]

const isAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 18;
    }
);
// implicit return
const isAdultTwo = people.some(person => ((new Date()).getFullYear()) - person.year >= 18)


const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 18)

console.log(allAdults)
console.log({isAdult})
console.log({isAdultTwo})

const comment = comments.find((comment) => comment.id === 385854 );
//as it is boolean it doesn't need the... ? true : false
console.log(comment)

 const index = comments.findIndex(comment => comment.id === 12345)
 
 console.log(index)
 comments.splice(index, 1)
 console.table(comments)

