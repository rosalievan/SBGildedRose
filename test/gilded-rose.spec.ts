import { expect } from 'chai';
// import 'chai/register-should';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('normal item should decrease in quality', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 25) ]);
        const items = gildedRose.updateQuality();
        console.log(items);
        expect(items[0].quality).to.equal(23);
    });

    it('Backstage passes to a TAFKAL80ETC concert increases in quality', function (){
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC', 4, 25) ]);
        const items = gildedRose.updateQuality();
        console.log(items);
        expect(items[0].quality).to.equal(28);
    });

});
