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
    {
      id: 'cars1',
      brand: 'Bentley',
      model: 'Continental GT',
      image:
        'data:image/jpeg;base64,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2EvA4DU5IYlfgMiVOT9ddqN4T6EfRwMsPoZDtAgfO2JoMgK1EOq1ucANbLdrWuNpHeZFqLh1uVVw1rC7AjPbnq6xyy2z6Hr8laD3DIhB4qJi63s3wLbaCj8JZf8AaRA+f8TiB2AZAXJCi99VbnITHs5Y/pPoY+yrAfuv9b/q09X2XYMbEI7GMDg2CwzKwYixGYG8HcZml0vXGyo/5jOw/wDjPDcG8Z5/4zw3FvGByReUGJGys/5jLy8qcWPt3/MZ1YezPDcX8R9JUvs2w38fjA5anLDGj7d/GXV5aY79+3gPpOpp7OsKPhbxl9OQGEHwHxgclq8rsa6sj1SyMLMrIjKwO0EEWImt1NH65JAK33KLDuGwT6GTkVhR9kJKp8lsKuyivhA+b00EW+/4CZfRegwjBjQ95bc4Yr+UEA98+g6eg6K7KaflEkJgEGxFHcIHPdEaYxSIqJQVUXIKiaijsAyE2rAaQxDW1qdpnloKNwlzVECxQdjtFpIEWnsBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERED//2Q==',
      price: 950000,
    },
    {
      id: 'cars2',
      brand: 'Ferrari',
      model: '488 Spider',
      image:
        'https://i.etsystatic.com/39770957/r/il/69f760/4656643198/il_1588xN.4656643198_5cso.jpg',
      price: 780000,
    },
    {
      id: 'cars3',
      brand: 'Lamborghini',
      model: 'Aventador',
      image: 'https://storage.googleapis.com/pod_public/1300/164885.jpg',
      price: 800000,
    },
    {
      id: 'cars4',
      brand: 'Porsche',
      model: '911 Turbo',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9yc2NoZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      price: 860000,
    },
    {
      id: 'cars5',
      brand: 'Audi',
      model: 'R8',
      image:
        'https://i.etsystatic.com/42285193/r/il/163f7f/4865429805/il_1588xN.4865429805_914i.jpg',
      price: 950000,
    },
    {
      id: 'cars6',
      brand: 'BMW',
      model: 'M5',
      image:
        'https://stmstyling.com/cdn/shop/files/FullBodyKit-MP-FitsBMWF80F82F83M3M4-CarbonLook1_1024x1024@2x.png?v=1694591784',
      price: 905000,
    },
    {
      id: 'cars7',
      brand: 'Mercedes-Benz',
      model: 'S-Class',
      image:
        'https://www.financialexpress.com/wp-content/uploads/2021/04/image.MQ4_.8.20210319141906.jpeg?w=313',
      price: 890000,
    },
    {
      id: 'cars8',
      brand: 'Tesla',
      model: 'Model S',
      image:
        'https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVzbGElMjBjYXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      price: 980000,
    },
    {
      id: 'cars9',
      brand: 'Jaguar',
      model: 'F-Type',
      image: 'https://media.cdn-jaguarlandrover.com/api/v2/images/89478/w/680',
      price: 980000,
    },
    {
      id: 'cars10',
      brand: 'Lexus',
      model: 'LC 500',
      image:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lexus-es-hero-modelpage-desktop-1669848992.jpeg?crop=0.5520833333333334xw:1xh;center,top&resize=1200:*',
      price: 795000,
    },
  ],
  Bikes: [
    {
      id: 'bikes1',
      brand: 'Harley-Davidson',
      model: 'Iron 883',
      image:
        'https://i.etsystatic.com/41267848/r/il/bd6cf1/4689105949/il_1588xN.4689105949_eipr.jpg',
      price: 99500,
    },
    {
      id: 'bikes2',
      brand: 'Ducati',
      model: 'Monster 821',
      image:
        'https://onyerbike.net/storage/product-images/item_474502102_897779.jpg',
      price: 111500,
    },

    {
      id: 'bikes3',
      brand: 'Yamaha',
      model: 'MT-07',
      image:
        'https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20221018120157_Yamaha%20Oct%20price%20hike.jpg&w=700&q=90&c=1',
      price: 98000,
    },
    {
      id: 'bikes4',
      brand: 'Kawasaki',
      model: 'Ninja 650',
      image:
        'https://www.bennetts.co.uk/-/media/bikesocial/2022-november-images/kawasaki-reveals-electric-hybrid-and-hydrogen-future/kawasaki-reveals-electric-hybrid-and-hydrogen-future01.ashx?h=493&la=en&w=740&hash=DF175128E3319CE54FFDE51ABAC8D8199BAE61FD',
      price: 97300,
    },
    {
      id: 'bikes5',
      brand: 'Honda',
      model: 'CBR600RR',
      image:
        'https://www.hondaofbournemouth.co.uk/cdn/shop/products/CBR500_1800x.jpg?v=1694167169',
      price: 110500,
    },
    {
      id: 'bikes6',
      brand: 'Suzuki',
      model: 'GSX-R750',
      image:
        'https://bikes.suzuki.co.uk/media/19888/gsx-r125rlxm3_ysf_diagonal_2000x1500.png',
      price: 99500,
    },
    {
      id: 'bikes7',
      brand: 'Triumph',
      model: 'Street Triple',
      image:
        'https://www.drummondcentral.co.uk/media/tpanurbu/dc-chrome-collection_1-1.jpg',
      price: 99000,
    },
    {
      id: 'bikes8',
      brand: 'KTM',
      model: 'Duke 790',
      image:
        'https://www.muthootcap.com/wp-content/uploads/2022/11/KTM-RC-200.jpg',
      price: 99500,
    },
    {
      id: 'bikes9',
      brand: 'BMW',
      model: 'S 1000 R',
      image:
        'https://cdn.ecommercedns.uk/files/9/238169/2/16944162/mai39191z.jpg',
      price: 92700,
    },
    {
      id: 'bikes10',
      brand: 'Aprilia',
      model: 'RSV4 1100 Factory',
      image:
        'https://images.moneycontrol.com/static-mcnews/2020/10/Aprilia-RS660.jpg?impolicy=website&width=1600&height=900',
      price: 97500,
    },
  ],
  Food: [
    {
      id: 'food1',
      brand: 'Burger',
      model: 'Cheeseburger',
      image:
        'https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg',
      price: 10,
    },
    {
      id: 'food2',
      brand: 'Pizza',
      model: 'Margherita',
      image:
        'https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg',
      price: 26,
    },
    {
      id: 'food3',
      brand: 'Sushi',
      model: 'Salmon Nigiri',
      image:
        'https://img.freepik.com/premium-photo/salmon-nigiri-sushi_17766-11.jpg',
      price: 30,
    },
    {
      id: 'food4',
      brand: 'Taco',
      model: 'Beef Taco',
      image:
        'https://assets.onbuy.com/i21/product/b00b9512bb3949a5806624482cdcdbbb-m286064239/46x31-cm-18x12in-tacos-canvas-mexican-restaurant-food-canvas-wall-art-picture-print-home-decor.jpg',
      price: 23,
    },
    {
      id: 'food5',
      brand: 'Pasta',
      model: 'Spaghetti Carbonara',
      image:
        'https://www.fielddoctor.co.uk/cdn/shop/products/sq_FieldDoctor27_carb_1200x.jpg?v=1628585332',
      price: 12,
    },
    {
      id: 'food6',
      brand: 'Salad',
      model: 'Caesar Salad',
      image:
        'https://i.etsystatic.com/38845654/r/il/732b56/5360112644/il_1588xN.5360112644_3y2g.jpg',
      price: 8,
    },
    {
      id: 'food7',
      brand: 'Steak',
      model: 'Ribeye Steak',
      image:
        'https://www.ocado.com/productImages/561/561713011_0_640x640.jpg?identifier=8f67875df883fb3226a4b0f9a8eb0c6d',
      price: 30,
    },
    {
      id: 'food8',
      brand: 'Sushi',
      model: 'California Roll',
      image:
        'https://i.etsystatic.com/14675479/r/il/195e58/5173524257/il_1588xN.5173524257_frrj.jpg',
      price: 30,
    },
    {
      id: 'food9',
      brand: 'Sandwich',
      model: 'Club Sandwich',
      image:
        'https://i.etsystatic.com/12227591/r/il/03b6aa/4860729408/il_1588xN.4860729408_snxh.jpg',
      price: 16,
    },
  ],
};

const itemsReducer = (state = initialState, action) => {
  return state;
};

export default itemsReducer;
