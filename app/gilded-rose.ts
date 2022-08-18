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
            let name: String = this.items[i].name;
            let quality: Number = this.items[i].quality
            let sellIn: Number = this.items[i].sellIn

            if (
                !(irregularitems.includes(name)) && quality > 0) {
                    this.items[i].quality = this.items[i].quality - 1
            } else {
                if (quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1
                    if (name == 'Backstage passes to a TAFKAL80ETC concert'){if (this.items[i].sellIn < 11 && quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1
                    
                }
                if (this.items[i].sellIn < 6 && quality < 50) {

                    this.items[i].quality = this.items[i].quality + 1
                }
            }}}

            if (name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            if (this.items[i].sellIn < 0) {
                if (name != 'Aged Brie') {
                    if (name != 'Backstage passes to a TAFKAL80ETC concert') {
                        if (this.items[i].quality > 0) {
                            if (name != 'Sulfuras, Hand of Ragnaros') {
                                this.items[i].quality = this.items[i].quality - 1
                            }
                        }
                    } else {
                        this.items[i].quality = 0
                    }
                } else {
                    if (quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }
        }

        return this.items;
    }
}
