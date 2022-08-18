export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {

        let irregularitems: Array<String> = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros']

        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i]
            
            // quality change logic
            if (!(irregularitems.includes(item.name)) && item.quality > 0) 
                {item.quality -= 1} 
                
            else {
                if (item.quality < 50) {
                    item.quality += 1

                    if (item.name == 'Backstage passes to a TAFKAL80ETC concert'){
                        let addition : number = item.sellIn<6 ? 2 : item.sellIn < 11 ?  1: 0
                        item.quality += addition
                }
                }
            }

            if (item.sellIn < 0) {

                if (!(irregularitems.includes(item.name)) && item.quality > 0 ){
                    item.quality -= 1 }
                else if (!(item.name == "Aged Brie")){
                    item.quality = 0 }
                else if (item.quality < 50) {
                    item.quality += 1
                    
                }
            }

            // sellIn change login
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
                item.sellIn -= 1;
            }
        }

        return this.items;
    }
}
