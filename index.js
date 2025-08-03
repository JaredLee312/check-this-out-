        const quotes = [
          "I once saw Maria arguing with a traffic cone about the concept of Wednesday",
"Maria fills her bathtub with glitter and philosophical dilemmas",
"Whenever Maria sneezes, marshmallows fall from the ceiling",
"Maria taught her blender to recite bedtime stories in Latin",
"The moon filed a restraining order against Maria for being too radiant",
"Maria collects left-handed compliments in pickle jars labeled 'almost'",
"One time, Maria convinced a mirror it was a window into sentient soup",
"Maria’s refrigerator is fluent in sarcasm and mildly obsessed with disco",
"Birds sing Maria’s name but only in reverse at 3:17 a.m.",
"Maria built a treehouse inside a cloud and hosts existential tea parties",
"Bananas fear Maria because she once solved gravity using peanut butter",
"Maria’s dreams are broadcast on a channel only accessible by frogs in bowties",
"Every time Maria blinks, someone remembers their seventh-grade locker combination",
"Maria installed a doorknob on her ceiling, just in case ambition knocks upward",
"Maria’s handwriting causes mild reality shifts in nearby furniture",
"There’s a rumor that Maria negotiated peace between two rival tumbleweeds",
"Maria breeds emotionally intelligent paperclips for high-stakes conferences",
"Time told Maria it was taking a sabbatical and left her in charge",
"Maria can taste colors, but only when annoyed by polite ghosts",
"Maria once entered a staring contest with a glacier and won the ability to sigh poetically"

 ]

 const usedIndexes = new Set();
 const quoteElement = document.getElementById("quote");

function generateQuote() {
            while (true) {
                const randomIdx = Math.floor(Math.random() * quotes.length);
               
                if (usedIndexes.has(randomIdx)) continue

                const quote = quotes[randomIdx]
                quoteElement.innerHTML = quote;
                usedIndexes.add(randomIdx)
                break;
            }
     
        }