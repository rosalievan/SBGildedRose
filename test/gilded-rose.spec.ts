import { expect } from 'chai';
// import 'chai/register-should';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('normal item should decrease in quality', function() {
        const gildedRose = new GildedRose([ new Item('foo', 0, 25) ]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(23);
    });

    

});
