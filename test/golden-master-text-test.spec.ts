import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

// Add a master test here

describe('Gilded Rose', function () {

    it('Golden master test', function() {
        let items = [
            new Item('normal item', 1, 1),
            new Item('another normal item', 1, 50),
            new Item('yet another normal item', 10, 10),
            new Item('Aged Brie', 1, 5),
            new Item('Aged Brie', 5, 49),
            new Item('Sulfuras, Hand of Ragnaros', 1, 80),
            new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 11, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 7, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 2, 20),

        ]
        const gildedRose = new GildedRose(items);

        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        
        for (let i in items){
            console.log(items[i])
        }

        expect(items[0].sellIn).to.equal(-3)
        expect(items[0].quality).to.equal(0)

        expect(items[1].sellIn).to.equal(-3)
        expect(items[1].quality).to.equal(43)

        expect(items[2].sellIn).to.equal(6)
        expect(items[2].quality).to.equal(6)

        expect(items[3].sellIn).to.equal(-3)
        expect(items[3].quality).to.equal(12)

        expect(items[4].sellIn).to.equal(1)
        expect(items[4].quality).to.equal(50)

        expect(items[5].sellIn).to.equal(1)
        expect(items[5].quality).to.equal(80)

        expect(items[6].sellIn).to.equal(11)
        expect(items[6].quality).to.equal(24)

        expect(items[7].sellIn).to.equal(7)
        expect(items[7].quality).to.equal(27)

        expect(items[8].sellIn).to.equal(3)
        expect(items[8].quality).to.equal(30)

        expect(items[9].sellIn).to.equal(-2)
        expect(items[9].quality).to.equal(0)

    });

    

});