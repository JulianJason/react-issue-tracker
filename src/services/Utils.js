export function countFrequencies(friendList, allEmails) {

    // calculates the frequency count of emails in the all emails array
    // returns mapped frequency dictionary
    const allMailFrequencies = allEmails.reduce(function(map, email) {
        map[email] = (map[email] || 0)+1;
        return map;
    }, Object.create(null));

    // remove duplicates from friend list
    const uniqueFriends = Array.from(new Set(friendList));

    // iterates through the friend list and sums the email frequencies from the frequency dictionary
    const friendCount = uniqueFriends.reduce(function(accumulator, email) {
        accumulator += allMailFrequencies[email] || 0;
        return accumulator
    }, 0);

    // return can be moved
    return friendCount;
}
