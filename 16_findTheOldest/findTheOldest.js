const findTheOldest = function(people) {
	const maped = people.map(element=>{
		if (!('yearOfDeath' in element))
			element.yearOfDeath = 2025;
		return element;
	})
	const sorted = maped.sort((a, b)=>{
		const aAge = a.yearOfDeath - a.yearOfBirth;
		const bAge = b.yearOfDeath - b.yearOfBirth;
		return aAge - bAge;
	});
	return (sorted[sorted.length - 1]);
};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
