const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia";
const tempDisorderFormat = originalDisorderFormat.split("|$|");
let finalDisorderFormat = tempDisorderFormat.join("</li><li>");
console.log(`<li>${finalDisorderFormat}</li>`);
