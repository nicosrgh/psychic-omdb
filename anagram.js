function main() {
    const words = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
    var anagrams = []
    var key = []
    for (var i in words) {
        var word = words[i];

        var sorted = sortString(word);

        if (!key.includes(sorted)) {
            key.push(sorted)
        }
        if (anagrams[sorted] != null) {
            anagrams[sorted].push(word);
        }
        else {
            anagrams[sorted] = [ word ];
        }
    }

    for (i = 0; i < key.length; i ++) {
        console.log(anagrams[key[i]])
    }
}

function sortString(string) {
    return string.split('').sort().join('')
}

main()