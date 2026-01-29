/**
 * 
 * 
 * Input:
const mapping = {
  a: ['b', 'c'],
  b: ['d', 'g'],
  d: ['p', 'q'],
  l: ['x', 'y']
};

console.log(friends(mapping, 'a'));

Output:
["b","c","d","g","p","q"]

// a -> [b, c]
// b -> [d, g]
// d -> [p, q]


 */

const mapping = {
  a: ['b', 'c'],
  b: ['d', 'g'],
  d: ['p', 'q'],
  l: ['x', 'y']
};


function getFriends(mapping, person){
    let friends = mapping[person]
    if(!friends) return [];

    const friendList = [...friends];
    for(let friend of friends){
        const mutualFriends = getFriends(mapping, friend);
        friendList.push(...mutualFriends)
    }
    return friendList;

}

console.log(getFriends(mapping, "a"))