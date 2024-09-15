export default {
  fill: (text: string | number) => {
    const tranformedText = String(text);
    return tranformedText.padStart(4, "0");
  },
};
