[Caïro](https://medium.com/starkware/hello-cairo-3cb43b13b209) is een Turing-complete taal ontworpen om de juiste uitvoering van Caïro programma's in het kort te kunnen aantonen. Een Caïro programma is stateloos, wat betekent dat je geen inheemse toegang hebt tot opslag, andere programma's van Caïro of de L1-staat (hoewel u deze kunt bekijken, zoals hieronder uitgelegd). 

Aan de andere kant leven Starknetcontracten in de Starknet VM, die een aanhoudende staat heeft die smart contracts toegang kunnen krijgen en kunnen aanpassen. Deze smart contracts kunnen variabelen opslaan, communiceren met andere contracten en berichten versturen naar/van L1 ([meer lezen](https://www.cairo-lang.org/docs/hello_starknet/index.html)).