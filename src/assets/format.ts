export default {
  fill: (text: string | number) => {
    const tranformedText = String(text);
    return tranformedText.padStart(5, "0");
  },
  upperFirstLetter: (text: string) => {
    const firstLetter = text[0].toUpperCase();

    return firstLetter + text.slice(1);
  },
};
