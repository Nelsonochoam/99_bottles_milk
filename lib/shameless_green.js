export class Bottles {
  verse(number) {
    
    if (number === 0) {
      return 'No more bottles of beer on the wall, ' +
        'no more bottles of beer.\n' +
        'Go to the store and buy some more, ' +
        '99 bottles of beer on the wall.\n';
    }
    
    if (number === 1) {
      return '1 bottle of beer on the wall, ' +
        '1 bottle of beer.\n' +
        'Take it down and pass it around, ' +
        'no more bottles of beer on the wall.\n';
    }
    
    if (number === 2) {
      return '2 bottles of beer on the wall, ' +
        '2 bottles of beer.\n' +
        'Take one down and pass it around, ' +
        '1 bottle of beer on the wall.\n';
    }
    
    return `${number} bottles of beer on the wall, ` +
      `${number} bottles of beer.\n` +
      'Take one down and pass it around, ' +
      `${number - 1 } bottles of beer on the wall.\n`;
  }
  
  verses(startingVerse, endingVerse, joinChar = "\n") {
    const verses = []
    while (startingVerse >= endingVerse) {
      verses.push(this.verse(startingVerse))
      startingVerse--
    }
    
    return verses.join(joinChar)
  }
  
  song() {
    return this.verses(99, 0, "");
  }
}
