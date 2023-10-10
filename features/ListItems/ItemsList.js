class Item {
  constructor(id, brand, model, image, price) {
    this.id = id;
    this.brand = brand;
    this.model = model;
    this.image = image;
    this.price = price;
  }
}

const initialState = {
  Cars: [
    new Item(
      'car1',
      'Bentley',
      'Continental GT',
      'https://example.com/bentley.jpg',
      250000,
    ),
    new Item(
      'car2',
      'Ferrari',
      '488 Spider',
      'https://example.com/ferrari.jpg',
      280000,
    ),
    new Item(
      'car3',
      'Lamborghini',
      'Aventador',
      'https://example.com/lamborghini.jpg',
      400000,
    ),
    new Item(
      'car4',
      'Porsche',
      '911 Turbo',
      'https://example.com/porsche.jpg',
      160000,
    ),
    new Item('car5', 'Audi', 'R8', 'https://example.com/audi.jpg', 170000),
    new Item('car6', 'BMW', 'M5', 'https://example.com/bmw.jpg', 105000),
    new Item(
      'car7',
      'Mercedes-Benz',
      'S-Class',
      'https://example.com/mercedes.jpg',
      90000,
    ),
    new Item(
      'car8',
      'Tesla',
      'Model S',
      'https://example.com/tesla.jpg',
      80000,
    ),
    new Item(
      'car9',
      'Jaguar',
      'F-Type',
      'https://example.com/jaguar.jpg',
      80000,
    ),
    new Item(
      'car10',
      'Lexus',
      'LC 500',
      'https://example.com/lexus.jpg',
      95000,
    ),
  ],
  Bikes: [
    new Item(
      'bike1',
      'Harley-Davidson',
      'Iron 883',
      'https://example.com/harley.jpg',
      9500,
    ),
    new Item(
      'bike2',
      'Ducati',
      'Monster 821',
      'https://example.com/ducati.jpg',
      11500,
    ),
    new Item(
      'bike3',
      'Yamaha',
      'MT-07',
      'https://example.com/yamaha.jpg',
      8000,
    ),
    new Item(
      'bike4',
      'Kawasaki',
      'Ninja 650',
      'https://example.com/kawasaki.jpg',
      7300,
    ),
    new Item(
      'bike5',
      'Honda',
      'CBR600RR',
      'https://example.com/honda.jpg',
      10500,
    ),
    new Item(
      'bike6',
      'Suzuki',
      'GSX-R750',
      'https://example.com/suzuki.jpg',
      9500,
    ),
    new Item(
      'bike7',
      'Triumph',
      'Street Triple',
      'https://example.com/triumph.jpg',
      9000,
    ),
    new Item('bike8', 'KTM', 'Duke 790', 'https://example.com/ktm.jpg', 9500),
    new Item(
      'bike9',
      'BMW',
      'S 1000 R',
      'https://example.com/bmw_bike.jpg',
      12700,
    ),
    new Item(
      'bike10',
      'Aprilia',
      'RSV4 1100 Factory',
      'https://example.com/aprilia.jpg',
      17500,
    ),
  ],
  Food: [
    new Item(
      'food1',
      'Burger',
      'Cheeseburger',
      'https://example.com/burger.jpg',
      5,
    ),
    new Item(
      'food2',
      'Pizza',
      'Margherita',
      'https://example.com/pizza.jpg',
      10,
    ),
    new Item(
      'food3',
      'Sushi',
      'Salmon Nigiri',
      'https://example.com/sushi.jpg',
      15,
    ),
    new Item('food4', 'Taco', 'Beef Taco', 'https://example.com/taco.jpg', 3),
    new Item(
      'food5',
      'Pasta',
      'Spaghetti Carbonara',
      'https://example.com/pasta.jpg',
      12,
    ),
    new Item(
      'food6',
      'Salad',
      'Caesar Salad',
      'https://example.com/salad.jpg',
      8,
    ),
    new Item(
      'food7',
      'Steak',
      'Ribeye Steak',
      'https://example.com/steak.jpg',
      20,
    ),
    new Item(
      'food8',
      'Sushi',
      'California Roll',
      'https://example.com/california_roll.jpg',
      10,
    ),
    new Item(
      'food9',
      'Sandwich',
      'Club Sandwich',
      'https://example.com/sandwich.jpg',
      6,
    ),
    new Item(
      'food10',
      'Pasta',
      'Linguine Pesto',
      'https://example.com/linguine_pesto.jpg',
      14,
    ),
  ],
};

const itemsReducer = (state = initialState, action) => {
  return state;
};

export default itemsReducer;
