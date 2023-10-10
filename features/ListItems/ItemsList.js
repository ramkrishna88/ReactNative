class Item {
  constructor(id, name, price, image) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}

const initialState = {
  cars: [
    new Item(
      'car1',
      'Car 1',
      30000,
      'https://m.media-amazon.com/images/I/71qKpIG4Q2L._AC_SL1500_.jpg',
    ),
    new Item(
      'car2',
      'Car 2',
      40000,
      'https://m.media-amazon.com/images/I/71qKpIG4Q2L._AC_SL1500_.jpg',
    ),
    new Item(
      'car3',
      'Car 3',
      50000,
      'https://m.media-amazon.com/images/I/71qKpIG4Q2L._AC_SL1500_.jpg',
    ),
    new Item(
      'car4',
      'Car 4',
      60000,
      'https://m.media-amazon.com/images/I/71qKpIG4Q2L._AC_SL1500_.jpg',
    ),
    new Item(
      'car5',
      'Car 5',
      70000,
      'https://m.media-amazon.com/images/I/71qKpIG4Q2L._AC_SL1500_.jpg',
    ),
  ],
  mobiles: [new Item('mobile1', 'Mobile 1', 800, 'mobile1.jpg')],
  food: [new Item('food1', 'Food 1', 10, 'food1.jpg')],
  bikes: [new Item('bike1', 'Bike 1', 500, 'bike1.jpg')],
};

const itemsReducer = (state = initialState, action) => {
  return state;
};

export default itemsReducer;
