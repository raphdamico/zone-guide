# Documentation [WIP]

::: warning 🏗 WIP
For now, please reference the notes in the sidebar of the spreadsheet and ask questions in #zone-modding in discord.
:::

## The basics
* Make sure to customize `modName`, `modDescription`, `modAuthor`, and `modLink` so you can get credit for your work!

## Important
::: warning
IF YOU DON'T DO THESE THINGS, EVERYTHING WILL BREAK
1. Don't change the column names or remove any columns
2. Make sure each location has a unique key — that's the "key" column for locations is a unique piece of text that identifies it (e.g. "theForest" or "theMuseum"). If you add new locations, make sure they also have unique keys
3. You must have locations with the keys `zoneObservationFacility` and `boundary`, and type `special`. You can freely change the name or variants (e.g. renaming "The Boundary" to "The Wall")
:::

::: tip TIP
If you want to add a row or column just to use for notes or formatting your spreadsheet, you can add `#` at the start of the row or column label and it won't be imported
:::

## Length of content
"Each of the content types needs to fit on the cards in the game. Here are the recommended character counts to avoid things overflowing:

| Content type | Characters |
| --- | --- | 
| Location Variants | ~150 chars |
| Scene Prompts | ~70 chars |
| Scene Questions | ~140 chars |
| Not So Easy Prompt | ~140 chars |


## TIPS
* `-a` will mean that every row in each cell is exported as a different item in an array. This is important for the character sheets, for example

## More coming...
