'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert (
      'Alcohol',
      [
        {
          type: 'Scotch Whisky',
          brandStyle: 'Glenlivet 18yr',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 700,
          gramsPerOunce: 12,
          image: 'http://www.lcbo.com/content/dam/lcbo/products/335901.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
          tastingNotes: 'Full and rich with notes of chewy, tannic oak. Manuka honey and walnut with Cox’s apples and orange peels. Cut herbs - fennel and spearmint.',
        },

        {
          type: 'Scotch Whisky',
          brandStyle: 'Glenlivet 12yr',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 900,
          gramsPerOunce: 12.5,
          image: 'http://cdn2.bigcommerce.com/server4900/7a906/images/stencil/750x750/products/1514/8881/the_glenlivet_12_1_75__46008.1438272123.jpg?c=2',
          tastingNotes: 'Apple cores, fresh and fruity trifle and creamy citrus.',
        },

        {
          type: 'Scotch Whisky',
          brandStyle: 'Glenlivet 12yr',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 685,
          gramsPerOunce: 12.5,
          image: 'http://cdn2.bigcommerce.com/server4900/7a906/images/stencil/750x750/products/1514/8881/the_glenlivet_12_1_75__46008.1438272123.jpg?c=2',
          tastingNotes: 'Apple cores, fresh and fruity trifle and creamy citrus.',
        },

        {
          type: 'Scotch Whisky',
          brandStyle: 'Johnnie Walker 12yr Black Label',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 873,
          gramsPerOunce: 13.3,
          image: 'https://ifallon777.files.wordpress.com/2013/04/johnnie-walker-black_label_new.jpg',
          tastingNotes: 'Rich and full with notes of wood smoke and dry spice, hints of barley and cereal with creamy toffee and a distinct herbal note.',
        },

        {
          type: 'Scotch Whisky',
          brandStyle: 'Laphroig 10yr',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 617,
          gramsPerOunce: 11,
          image: 'https://www.celticwhiskeyshop.com/image/Scotch%20Whisky/laphroaig_10_YR.jpg',
          tastingNotes: 'Seaweed-led, with a hint of vanilla ice cream and more than a whiff of notes from the first aid box (TCP, plasters etc). The oak is big, and muscles its way into the fore as you hold this whisky over your tongue. An upsurge of spices develop – cardamom/black pepper/chilli.',
        },

        {
          type: 'Irish Whisky',
          brandStyle: 'Jameson',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 673,
          gramsPerOunce: 10,
          image: 'http://www.celticwhiskeyshop.com/image/data/Whiskey/Jameson_700ml.jpg',
          tastingNotes: 'Thick and of good body with notes of orchard fruits, both fresh and cooked with a little vanilla cream.',
        },

        {
          type: 'Japanese Whisky',
          brandStyle: 'Chichibu Ichiro’s Malt and Grain',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 603,
          gramsPerOunce: 12,
          image: 'http://jwhisky.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/c/h/chichibu_ichiro_s_malt_grain_white_label_001.jpg',
          tastingNotes: 'Toffee first and foremost, with notes of barley malt, gingerbread, tropical fruits, honeyed pipe tobacco lveas, black pepper, roasted chestnut and freshly cut hay.',
        },

        {
          type: 'Japanese Whisky',
          brandStyle: 'Togouchi Chugoku Jo',
          sizeML: 700,
          sizeOZ: 25.36,
          emptyBottleWeight: 569,
          gramsPerOunce: 12,
          image: 'http://www.whisky-japonais.net/wp-content/uploads/2016/02/togouchi-premium.png',
          tastingNotes: 'liquorice, sweet, smooth',
        },

        {
          type: 'Japanese Whisky',
          brandStyle: 'Nikka Coffey Grain',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 542,
          gramsPerOunce: 13,
          image: 'https://www.midorinoshima.com/1082-thickbox_default/whisky-japonais-nikka-coffey-grain.jpg',
          tastingNotes: 'Sweet, fruity flavours of melon, grapefruit and thick syrup, balanced by crunchy biscuits and fresh vanilla.',
        },

        {
          type: 'Japanese Whisky',
          brandStyle: 'Nikka Coffey Malt',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 586,
          gramsPerOunce: 12,
          image: 'https://www.whisky.com/fileadmin/_processed_/csm_0_f1921d_nikkacoma_aw_88af696362.jpg',
          tastingNotes: 'Malt, fruit, nuts, vanilla, butterscotch, toasted pastries and light notes of spice, minerals and toasted grain.',
        },

        {
          type: 'Japanese Whisky',
          brandStyle: 'Nikka Miyagikyo',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 588,
          gramsPerOunce: 14,
          image: 'https://wine-searcher1.freetls.fastly.net/images/labels/93/70/nikka-miyagikyo-single-malt-japanese-whisky-japan-10829370.jpg',
          tastingNotes: 'Firm, lively. Malted barley is at the heart of the palate, coated in herbaceous, liquorice, spiced (ginger, cinnamon) and chocolate tones. Very elegant, the mid-palate also delivers plenty of energy and as it draws to a close, fresh tobacco leaves and coconut intertwine to create a natural symphony of aromas.',
        },

        {
          type: 'Japanese Whisky',
          brandStyle: 'Nikka Taketsuru',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 602,
          gramsPerOunce: 15.5,
          image: 'https://img.thewhiskyexchange.com/900/japan_tak5.jpg',
          tastingNotes: "Espresso beans, milk chocolate, tobacco leaf and lingering sherried fruit. There's a slight touch of smoke as it develops...",
        },

        {
          type: 'Japanese Whisky',
          brandStyle: 'Ohishi Sherry Cask',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 712,
          gramsPerOunce: 12,
          image: 'https://static.whiskybase.com/storage/whiskies/1/0/9146/178123-big.jpg',
          tastingNotes: 'A sherry bomb explodes on the palate sending shrapnel of rich vanilla, citrus, dried dark fruit, oily nuts, ash, oak and a strange but alluring sweetness. Like the aroma it has a bit of pepper to it and hints at opening up to more complexity with time.',
        },

        {
          type: 'Japanese Whisky',
          brandStyle: 'Suntory Hakshu 12yr',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 645,
          gramsPerOunce: 15,
          image: 'http://www.whisky.fr/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/m/6/m629_2.jpg',
          tastingNotes: 'The herbs are very up front with this one. Peppermint, pine and pleasant grassy notes. Cucumber and melon.',
        },

        {
          type: 'Japanese Whisky',
          brandStyle: 'Suntory Hibiki Non Vintage',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 643,
          gramsPerOunce: 13,
          image: 'http://www.japanese-whisky.com/wp-content/uploads/2015/02/HibikiJapaneseHarmony.jpg',
          tastingNotes: 'Melted butter and caramelized dates. A hint of fragrant sandalwood develops into warming, oaky spice.',
        },

        {
          type: 'Japanese Whisky',
          brandStyle: 'Suntory Toki',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 666,
          gramsPerOunce: 15,
          image: 'https://img.thewhiskyexchange.com/900/japan_sun15.jpg',
          tastingNotes: 'More green apple on the palate leads along bright citrus notes from pink grapefruit. Bitter herbs, toasted almonds and vanilla oak linger underneath.',
        },

        {
          type: 'Japanese Whisky',
          brandStyle: 'Suntory Yamazaki 12yr',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 696,
          gramsPerOunce: 16,
          image: 'https://www.forwhiskeylovers.com/sites/default/files/whiskey-word/CDewar/ThisWeeksDram/yamazaki%2012.jpg',
          tastingNotes: 'Smooth and soft with good sweetness and winter spice. A lovely citrus note develops with more tropical fruit notes and a little rum.',
        },

        {
          type: 'Japanese Whisky',
          brandStyle: 'Suntory Yamazaki Non Vintage',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 587,
          gramsPerOunce: 12.5,
          image: 'http://f3.wine-searcher.net/images/labels/07/45/the-yamazaki-distiller-s-reserve-single-malt-whisky-japan-10630745.jpg',
          tastingNotes: "The dried berries remain lively on the palate (it even develops some raspberry notes along the way), but they're dialed back a bit to make room for light oak, white peach and a small amount of spice.",
        },

        {
          type: 'American Whiskey',
          brandStyle: 'Jack Daniel’s No. 7',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 845,
          gramsPerOunce: 12,
          image: 'http://cdn.atlantamagazine.com/wp-content/uploads/sites/12/2017/09/Jack_Daniels_oneuseonly_for_web.jpg',
          tastingNotes: 'The nose is quite light and smooth with plenty of sweetness. There are hints of dry spice and oily nuts, a touch of smoke. The palate is quite smooth and soft with notes of banana milkshake, a mixed nut note, a touch of caramel with crème anglaise. The finish is quite sweet with a little cereal sweetness and toasty oak.',
        },

        {
          type: 'American Whiskey',
          brandStyle: 'Jim Beam',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 880,
          gramsPerOunce: 14,
          image: 'http://www.lcbo.com/content/dam/lcbo/products/021378.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
          tastingNotes: 'Quite sweet with gentle notes of vanilla and cut hay, a touch of fresh corn fields and a little cereal sweetness, like the bluegrass fields of Kentucky.  Good body with notes of toasty oak and all the requisite notes of vanilla and crème anglaise, a little spice and pepper with an acetone note.',
        },

        {
          type: 'American Whiskey',
          brandStyle: 'Knob Creek',
          sizeML: 700,
          sizeOZ: 33.81,
          emptyBottleWeight: 864,
          gramsPerOunce: 10,
          image: 'https://img.thewhiskyexchange.com/900/brbon_kno1.jpg',
          tastingNotes: 'Quite spicy and sweet. Melted salty butter on granary toast, toasty oak and a touch of rye with caramel sweetness.  Peppy and full. Notes of candy floss and nut oil, a touch of spice and dark chocolate, a little spice and charred oak.',
        },

        {
          type: 'American Whiskey',
          brandStyle: 'Maker’s Mark',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 903,
          gramsPerOunce: 12,
          image: 'https://img.thewhiskyexchange.com/900/brbon_mak17.jpg',
          tastingNotes: 'Nose: Fruity and rich. There are lovely notes of spiced honey and mixed peels, a little malmsey, hazelnut and a touch of cut fruit with toasty oak providing a backbone.  Palate: Rich and full. There are notes of rye and spice, barley malt, a little nut oil with butterscotch and vanilla.  Finish: Quite sweet with butterscotch and dry oak spice.',
        },

        {
          type: 'American Whiskey',
          brandStyle: 'Old Overholdt',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 765,
          gramsPerOunce: 13,
          image: 'https://img.thewhiskyexchange.com/900/brbon_ove3.jpg',
          tastingNotes: "Nose: Not as 'in your face' as rye can be, but the mild spice is there, alongside some sweetness and fruitiness, especially apples.  Palate: Vanilla, then that rye spice, summer fruits with some darker spices developing.  Finish: More prominent rye on the finish.  Overall: A cocktail-making American classic.",
        },

        {
          type: 'American Whiskey',
          brandStyle: 'Rebel Yell',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 700,
          gramsPerOunce: 17,
          image: 'https://drizly-products0.imgix.net/ci_4114.png?auto=format%2Ccompress&fm=jpeg&q=20',
          tastingNotes: 'Nose: Honey, vanilla, slightly woody raisin and candy sticks.  Palate: Sultanas, nectarine and hints of prune. Vanilla throughout.  Finish: Warming pressed apple.  Overall: Still enjoyable in the midnight hour.',
        },

        {
          type: 'American Whiskey',
          brandStyle: 'Westland Peated',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 659,
          gramsPerOunce: 12.5,
          image: 'http://whiskeyreviewer.com/wp-content/uploads/2016/04/westland-peated-american-single-malt-whiskey.jpg',
          tastingNotes: 'Nose: Orange and lemon peel at first, before a wave of smoky peat rolls in.  Palate: Smoky peanut shells and a little medicinal malt, alongside leafy mint.  Finish: Fruity esters and a pinch of ground pepper.',
        },

        {
          type: 'American Whiskey',
          brandStyle: 'Basil Hayden’s',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 597,
          gramsPerOunce: 14,
          image: 'http://whiskeyreviewer.com/wp-content/uploads/2016/04/basil-hayden.jpg',
          tastingNotes: 'Nose: The aroma is light and fruity with notes of spice, citrus, dark sweets and vanilla. Some weak notes of wood, blackberry licorice, new leather and root beer popsicles add a bit of dimension. Palate: Oak, caramel, vanilla and baking spices dominate the palate, but don’t achieve the richness they should. A bit of minerality, leather and pepper pop up towards the end and leave me wanting more substance. It’s nice, but like the nose, it’s light.  Finish:  Short and oaky with light notes of leather, pepper and dark sweets.',
        },

        {
          type: 'American Whiskey',
          brandStyle: 'Yellowstone',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 777,
          gramsPerOunce: 15,
          image: 'https://static.whiskybase.com/storage/whiskies/3/2/026/73822-big.jpg',
          tastingNotes: 'Nose: Dry oak, menthol, dark fruit. Subtle smokiness develops after a minute.  Palate: Rather creamy with plenty of vanilla fudge notes. A burst of herbaceous spice appears on the mid-palate.  Finish: Lasting cardamom and nutmeg heat.',
        },

        {
          type: 'American Whiskey',
          brandStyle: 'bulleit Bourbon',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 679,
          gramsPerOunce: 14,
          image: 'http://www.lcbo.com/content/dam/lcbo/products/054866.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
          tastingNotes: 'Nose: Bright with orange zest, toasted oak and vanilla.  Palate: Further orange notes, followed by some warming winter spices and a hint of tobacco leaf.  Finish: Smooth and spicy.',
        },

        {
          type: 'American Whiskey',
          brandStyle: 'Bulleit Rye',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 665,
          gramsPerOunce: 13,
          image: 'https://www.missionliquor.com/images/products/9362_d841e51d44aa4c1c16de0150626ddb60.png',
          tastingNotes: 'Nose: Big heaps of cherries and vanilla, with subtle notes of leather and tobacco.  Palate: Rather hot at first, the spices coming to the forefront. This is followed by peaches, more cherries and a little bit of orange zest.  Finish: A smoky finish, carried by cinnamon, allspice and a hint of sweeties.',
        },

        {
          type: 'Cognac',
          brandStyle: 'Remy Martin VSOP',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 643,
          gramsPerOunce: 12,
          image: 'http://www.lcbo.com/content/dam/lcbo/products/004101.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
          tastingNotes: 'Nose: Berry fruits and sweet cereals. White grape, a touch of black olive and custard cream.  Palate: Vanilla, manuka honey and red berry coulis. Dried figs, banana chips and a touch of spice.  Finish: Truffle and honey.',
        },

        {
          type: 'Cognac',
          brandStyle: 'Remy Martin XO',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 700,
          gramsPerOunce: 13,
          image: 'https://d1oa3u4kzgx3yy.cloudfront.net/52/258.jpg',
          tastingNotes: 'Nose: Fruity with dates and peels, honey and a little marmalade, overripe grape and warm pastries.  Palate: Spicy with warm pastries, overripe grape, fruits, spices, warm pastries and orange peel.  Finish: Long with spices, fruits and peels.',
        },

        {
          type: 'Cognac',
          brandStyle: 'Courvoisier VSOP',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 590,
          gramsPerOunce: 12,
          image: 'http://www.lcbo.com/content/dam/lcbo/products/009902.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
          tastingNotes: 'Nose: Whole coffee beans, mint leaves, kumquat and red grape notes appear at first. Give it a minute and more savoury elements appear, with hints of buttered brown bread and a little whiff of sawdust.  Palate: More coffee notes as it opens (this would be really good partner to an espresso after a big meal). Develops touches of brown sugar, waxy apple peels, sweet pea and a fragrant oakiness.  Finish: Ooh, a nice waft of almost-smoky cinnamon on the finish. Slowly becomes sweeter with fresh pear and gummy bears.',
        },

        {
          type: 'Gin',
          brandStyle: 'Beefeater',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 612,
          gramsPerOunce: 13,
          image: 'http://www.ginfoundry.com/wp-content/uploads/2013/10/beefeater1-700x700-min.jpg',
          tastingNotes: 'Nose: Clean & earthy, with juniper & citrus  Palate: Smooth & clean, with orange & coriander   Finish: Sweet & lingering, with orange & coriander',
        },

        {
          type: 'Gin',
          brandStyle: 'Bombay Sapphire',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 615,
          gramsPerOunce: 12,
          image: 'https://groceries.morrisons.com/productImages/217/217561011_0_640x640.jpg?identifier=90e3a2f6a1b7d5bae6c31352da30f592',
          tastingNotes: 'Nose: Sweet & aromatic, with citrus & juniper.  Palate: Initially light, followed by spices & earthy notes  Finish: Sweet & lingering, with juniper & peppery spices',
        },

        {
          type: 'Gin',
          brandStyle: 'Martin Millers Westebourne Strength',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 667,
          gramsPerOunce: 13,
          image: 'http://2.bp.blogspot.com/-PRtldRw7bpo/To5t0YvVqZI/AAAAAAAAAKU/ljEO7h5GmBo/s1600/Martin_Miller_Gin_Westbourne.jpg',
          tastingNotes: 'Clear color. Perfumed aromas and flavors of myrrh, eucalyptus, musk, aloe vera, frankincense, geranium, orris root, and juniper with a velvety, vibrant, dryish light-to-medium body and a warming, complex, long finish that shows shades of rose, tarragon, and leather conditioner finish. A masculine-of-center, perfumed gin of the highest order; will create one-of-a-kind cocktails with a signature aroma.',
        },

        {
          type: 'Gin',
          brandStyle: 'Hendrick’s',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 700,
          gramsPerOunce: 12.5,
          image: 'http://www.lcbo.com/content/dam/lcbo/products/637504.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
          tastingNotes: 'Nose: Fresh & floral, with sweet lime & light spices  Palate: Smooth, with rose & sweet citrus  Finish: Long & floral, with rose',
        },

        {
          type: 'Gin',
          brandStyle: 'Tanqueray',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 708,
          gramsPerOunce: 13,
          image: 'https://img.thewhiskyexchange.com/900/gin_tan17.jpg',
          tastingNotes: 'Nose: Fresh & smooth, with juniper & citrus  Palate: Balanced & dry, with juniper, coriander & liqourice  Finish: Long & full, with juniper & a hint of pepper/spice',
        },

        {
          type: 'Gin',
          brandStyle: 'Gordon’s',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 645,
          gramsPerOunce: 12,
          image: 'http://www.ginfoundry.com/wp-content/uploads/2013/10/gordons-gin-.jpg',
          tastingNotes: 'Nose: Fresh, with juniper and citrus  Palate: Dry and fresh, with juniper and citrus  Finish: Short and light, with juniper and citrus ',
        },

        {
          type: 'Gin',
          brandStyle: 'Plymouth',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 734,
          gramsPerOunce: 15,
          image: 'http://3.bp.blogspot.com/-MdNKsgnAuuc/T6KKvmhLKyI/AAAAAAAAC1Y/mCZUZ7P1tDI/s1600/Plymouth+Gin_classic.jpg',
          tastingNotes: 'Plymouth Gin is a classic gin, with an appealing balance of citrus and earthiness, and slightly softer juniper than expected in traditional gins. Completed with a pleasingly full and slightly oily mouthfeel, it is a must-try gin and should have its place on every gin shelf for both its history and the quality of spirit.',
        },

        {
          type: 'Rum',
          brandStyle: 'Bacardi Superior',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 749,
          gramsPerOunce: 14,
          image: 'https://corporategift.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/a/bacardi_superior_rum_2.jpg',
          tastingNotes: 'The nose is light and fresh with a little spice and pepper, quite spirity. The palate is of medium-body with hints of tropical fruit and a note of dark brown sugar and winter spice. The finish is good with smooth vanilla spice notes.',
        },

        {
          type: 'Rum',
          brandStyle: 'Gosling’s Black Seal',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 698,
          gramsPerOunce: 12,
          image: 'https://img.thewhiskyexchange.com/900/rum_gos1.jpg',
          tastingNotes: 'Nose: Sweet, dark, cooked fruits. Fruitcake, spice, herbal.  Palate: Balanced with thick, sweet spices, stewed fruits.  Finish: Spiced, crisp, tingling.',
        },

        {
          type: 'Rum',
          brandStyle: 'Ron Zacapa 23 Year Centenario',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 712,
          gramsPerOunce: 14,
          image: 'http://www.lcbo.com/content/dam/lcbo/products/273516.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
          tastingNotes: 'Nose: Very sweet and nutty, honey and chocolate. Dark brown sugar, gentle smoke. Pipe tobacco.  Palate: Very sweet and soft. Dark brown sugar, molasses, rounded, so gentle!  Finish: Thick, medium length, hint of smoke on the tail.',
        },

        {
          type: 'Rum',
          brandStyle: 'Zaya 12yr',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 815,
          gramsPerOunce: 15,
          image: 'http://cellar.com/images/inventory/zoom/131641.jpg',
          tastingNotes: 'Buttery biscuits, Curaçao orange, brown sugar, walnut, fresh vanilla pod, a enjoyably savoury hint of olive oil on rye bread, Brazil nut.',
        },

        {
          type: 'Vodka',
          brandStyle: 'Absolut',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 667,
          gramsPerOunce: 12,
          image: 'https://d3r6kbofdnmd8.cloudfront.net/media/catalog/product/cache/image/1536x/a4e40ebdc3e371adff845072e1c73f37/9/9/99033_absolut_1l_edo_3.jpg',
          tastingNotes: 'Clean and elegant, with touches of peppery grains (somewhat reminiscent of rye) and vanilla pod.',
        },

        {
          type: 'Vodka',
          brandStyle: 'Chopin',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 645,
          gramsPerOunce: 12.5,
          image: 'https://www.thedrinksbasket.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/h/chopin-potato-vodka/Chopin-Potato-Vodka-70cl-30.jpg',
          tastingNotes: 'Subtle green apple and vanilla nose.  Creamy and earthy taste.  Full bodied mouth-feel Long, clean finish, no burn',
        },

        {
          type: 'Vodka',
          brandStyle: 'Grey Goose',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 623,
          gramsPerOunce: 12,
          image: 'https://drizly-products1.imgix.net/ci_4899.png?auto=format%2Ccompress&fm=jpg&q=20',
          tastingNotes: 'Nose: Clean, grainy nose with hints of almond and black pepper.  Palate: Very peppery, perfumy palate with hints of star anise and rye.  Finish: Spicy, warming, creamy finish.',
        },

        {
          type: 'Vodka',
          brandStyle: 'Hangar One',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 543,
          gramsPerOunce: 13,
          image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.lcbo.com%2Fcontent%2Fdam%2Flcbo%2Fproducts%2F446492.jpg%2Fjcr%3Acontent%2Frenditions%2Fcq5dam.web.1280.1280.jpeg&f=1',
          tastingNotes: 'Floral, honeysuckle, asian pear',
        },

        {
          type: 'Vodka',
          brandStyle: 'Stolichnaya',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 703,
          gramsPerOunce: 13,
          image: 'http://vodkabuzz.com/uploads/2012/04/stolichnaya_stoli2-640x853.jpg',
          tastingNotes: 'On the nose, a potent strong alcohol smell is instantly recognizable with a sharp citrus kick following. The aromas mellow out fairly quickly into scents of almond and aniseed. A smooth taste of aniseed on the palate, with a slight harshness on the tongue. Floral extracts are noticeable with a tingle after-taste to wet the appetite for more.',
        },

        {
          type: 'Vodka',
          brandStyle: 'Ketel One',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 687,
          gramsPerOunce: 13,
          image: 'http://vodkabuzz.com/uploads/2009/11/ketel_one-640x853.jpg',
          tastingNotes: 'Slight citrus aromas on the nose leading to a smooth offering of wheat with a slight sweetness following. A developing hint of spice near the end creates a long, crisp finish.',
        },

        {
          type: 'Vodka',
          brandStyle: 'Tito’s',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 702,
          gramsPerOunce: 12,
          image: 'https://www.haskells.com/media/catalog/product/cache/1/image/816x1200/040ec09b1e35df139433887a97daa66f/1/0/102060_0_1_1.jpg',
          tastingNotes: 'Tito’s offers a slightly sweet, peppery scent on the nose, then coats the palate with a creamy body, finishing nice and smooth, leaving a hint of sweet corn and spice.',
        },

        {
          type: 'Tequila',
          brandStyle: 'Sauza Silver',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 650,
          gramsPerOunce: 13,
          image: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.haskells.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fimage%2F816x1200%2F040ec09b1e35df139433887a97daa66f%2F1%2F3%2F131950_0_1_1.jpg&f=1',
          tastingNotes: 'A clean, clear tequila, with subtle notes of green apple, grapefruit and peppery touches throughout.',
        },

        {
          type: 'Tequila',
          brandStyle: 'Sauza Reposado',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 650,
          gramsPerOunce: 14,
          image: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.thewhiskyexchange.com%2F900%2Fteqla_sau18.jpg&f=1',
          tastingNotes: 'A premium Reposado from Sauza, this is aged in American white oak barrels for four months, offering a mellow, spicy, sweet flavor.',
        },

        {
          type: 'Tequila',
          brandStyle: 'Sauza Conmemorativo',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 650,
          gramsPerOunce: 14.5,
          image: 'http://cdn2.bigcommerce.com/server5500/tpbc2s65/products/647/images/680/sauza_anejo_conmemorativo750_new__38726__91709.1358534100.1280.1280.jpg',
          tastingNotes: 'Dry fruit and agave nectar notes. Sweet toasted oak touch increases aromatic complexity.  Highlighted sweetness, mild tannins, lightly sweet toasted oak and vanilla with mild astringency.',
        },

        {
          type: 'Tequila',
          brandStyle: 'Sauza Hornitos',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 650,
          gramsPerOunce: 12.5,
          image: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.lcbo.com%2Fcontent%2Fdam%2Flcbo%2Fproducts%2F143040.jpg%2Fjcr%3Acontent%2Frenditions%2Fcq5dam.web.1280.1280.jpeg&f=1',
          tastingNotes: 'Fine agave, herbal & green apple notes.  Balanced agave with apple & herbal notes, slightly woody.  Medium to full-bodied spirit with warm, slightly astringent finish.',
        },

        {
          type: 'Tequila',
          brandStyle: 'Fortaleza Reposado',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 668,
          gramsPerOunce: 12,
          image: 'https://dandm.com/image/cache/215182_11-700x1000.jpg',
          tastingNotes: 'Exotic citrus, popcorn, earthy caramel, wood spice, rich agave, orchard fruit, complex herbal notes. Really top stuff.',
        },

        {
          type: 'Tequila',
          brandStyle: 'Fortaleza Blanco',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 668,
          gramsPerOunce: 13,
          image: 'https://cdna2.zoeysite.com/Adzpo594RQGDpLcjBynL1z/cache=expiry:31536000/compress/https://s3.amazonaws.com/zcom-media/sites/a0iE000000B0omIIAR/media/catalog/product/f/o/fortalezablanco_base_4.jpg',
          tastingNotes: 'Everything a good tequila should be with herbaceous, vegetal agave, citrus, green olives and brine as well as a creaminess that carries into rich buttery character.',
        },

        {
          type: 'Tequila',
          brandStyle: 'Fortaleza Anejo',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 668,
          gramsPerOunce: 12,
          image: 'http://tequilafortaleza.com/media/fortaleza-anejo.jpg',
          tastingNotes: 'A beautiful combination of agave and butterscotch, sultana and mixed peels. Oily, complex, outstanding.',
        },

        {
          type: 'Tequila',
          brandStyle: 'Don Julio Blanco',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 637,
          gramsPerOunce: 14,
          image: 'http://www.dateeats.com/wp-content/uploads/2014/05/Don-Julio-silver.jpg',
          tastingNotes: 'Citrussy and fresh, Don Julio\'s Blanco tequila was rated as "Classic" by Wine Enthusiast Magazine. This is their highest commendation, and it was awarded after their noted critic, F Paul Pacult after he tasted over 250 spirits.',
        },

        {
          type: 'Tequila',
          brandStyle: 'Don Julio Reposado',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 637,
          gramsPerOunce: 13,
          image: 'http://www.drinkspirits.com/wp-content/uploads/2010/11/reposado.jpg',
          tastingNotes: 'Barrel aged for 8 months. Soft lemon and fruit aromas on the nose followed by delicate hit of spice. Very soft on the palate with vanilla and cinnamon mixing well. Sweet ending.',
        },

        {
          type: 'Tequila',
          brandStyle: 'Don Julio Anejo',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 637,
          gramsPerOunce: 12,
          image: 'http://cdn2.bigcommerce.com/server4900/7a906/products/945/images/1033/don-julio-anejo-750__26643.1335464513.1280.1280.jpg',
          tastingNotes: 'A fresh blend of lime, grapefruit and mandarin citrus aromas with a rich touch of caramel.  Full-bodied and complex with expressions of cooked agave, wild honey and oak-infused butterscotch.  Bright and lightly spiced finish with the essence of wild honey.',
        },

        {
          type: 'Tequila',
          brandStyle: 'Don Julio 1942',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 712,
          gramsPerOunce: 15,
          image: 'https://www.wallywine.com/media/catalog/product/cache/1/image/1800x/9df78eab33525d08d6e5fb8d27136e95/0/4/040335.jpg',
          tastingNotes: 'Rich caramel and chocolate.  Warm oak, vanilla and roasted agave.  Lingering oak and rich vanilla.',
        },

        {
          type: 'Tequila',
          brandStyle: 'Casa Noble Crystal',
          sizeML: 1000,
          sizeOZ: 33.81,
          emptyBottleWeight: 665,
          gramsPerOunce: 12,
          image: 'http://professorcocktail.com/wp-content/uploads/2014/07/Casa-Noble-Crystal-Tequila.jpg',
          tastingNotes: 'The clean, crisp taste of our Blanco tequila celebrates the fresh flavor of the noble Blue Weber Agave. Enticing aromas set the palate for flavors of honey, buttery-sweet cooked agave and a hint of citrus. Triple distilled for a well-balanced and smoother-than-glass finish, this Blanco is in a class by itself.',
        },

        {
          type: 'Tequila',
          brandStyle: 'Casa Noble Reposado',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 665,
          gramsPerOunce: 13,
          image: 'https://www.abc.virginia.gov/library/product-images/2018-02-15/casa-noble-tequila-reposado.jpg?h=400&w=400&la=en&hash=2DE961865DE31723D145BD57F9C6B00880F27511',
          tastingNotes: 'Aromas of vanilla, lemongrass, and floral notes are balanced with flavors of sweet cooked agave and toasted oak. Aged for 364 days in French white oak barrels (other Reposados are aged for four–six months).',
        },

        {
          type: 'Tequila',
          brandStyle: 'Casa Noble Anejo',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 665,
          gramsPerOunce: 15,
          image: 'https://spiritedgifts.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/a/casa_noble_anejo.jpg',
          tastingNotes: 'Patience is the secret ingredient of our acclaimed Añejo. Aged for a full two years in French white oak barrels, the complex aromas of dried fruits and spice complement flavors of toasted oak, butterscotch, vanilla, and sweet cooked agave.',
        },

        {
          type: 'Amaro',
          brandStyle: 'Fernet Branca',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 605,
          gramsPerOunce: 14,
          image: 'https://img.thewhiskyexchange.com/900/vermo_fer13.jpg',
          tastingNotes: 'Nose: Marmalade, hints of fresh mint and pepper. Very aromatic.  Palate: Perfumed notes of potpourri, fruits, peppermint and zest. Rich.  Finish: Dry, oaky finish. Very herbal.',
        },

        {
          type: 'Amaro',
          brandStyle: 'Amargo Valet',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 700,
          gramsPerOunce: 15,
          image: 'https://img.thewhiskyexchange.com/540/liq_ama20.jpg',
          tastingNotes: 'Vallet Amargo Angostura is a 90 Proof bitter liqueur made from Angostura bark and a maceration of cherry fruits, cloves and other roots and spices. Herbal notes of bittersweet dark chocolate and citrus rind balance an earthly richness to create this delightful elixir.',
        },

        {
          type: 'Amaro',
          brandStyle: 'Amaro Nonino',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 703,
          gramsPerOunce: 14,
          image: 'http://www.lcbo.com/content/dam/lcbo/products/933796.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg',
          tastingNotes: 'The opening pass is like an open market for mountain herbs, flowers, and spices. The midpalate explodes with herbal/rooty/floral tastes including dried fruit, fruit peel, quinine, cassia bark, and fruit stone.',
        },

        {
          type: 'Amaro',
          brandStyle: 'Cynar',
          sizeML: 750,
          sizeOZ: 25.36,
          emptyBottleWeight: 688,
          gramsPerOunce: 16,
          image: 'https://www.drinksupermarket.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/c/y/cynar-artichoke-liqueur-70cl_temp.jpg',
          tastingNotes: 'The artichoke liqueur known for its versatility and taste Cynar is an artichoke based bitter. Its distinctive flavour is enriched from an infusion of 13 herbs and plants, making it a completely natural drink, rich in scents and a unique taste . It perfectly conserves all the health properties of the ingredients used in its preparation. Only moderately alcoholic (16.5%) Cynar is a modern and versatile drink that is always welcome',
        },
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete ('Alcohol', null, {});
  },
};
