var toEmoji = [
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
];
export const convertToEmoji = (selectedColor, toEmoji, mykey) => {
  var title;
  if (selectedColor === '#E6E7E7') {
    selectedColor = '⬜';
  }
  if (selectedColor === '#31373D') {
    selectedColor = '⬛';
  }
  if (selectedColor === '#C1694F') {
    selectedColor = '🟫';
  }
  if (selectedColor === '#55B1ED') {
    selectedColor = '🟦';
  }
  if (selectedColor === '#78B159') {
    selectedColor = '🟩';
  }
  if (selectedColor === '#A98ED6') {
    selectedColor = '🟪';
  }
  if (selectedColor === '#DE2E44') {
    selectedColor = '🟥';
  }
  if (selectedColor === '#FACB58') {
    selectedColor = '🟨';
  }
  if (selectedColor === '#FFFFFF') {
    selectedColor = '  ';
  }

  toEmoji.splice(mykey, 1, selectedColor);
  title = toEmoji.join('');
  console.log(title);
};
