// code to build and initialize DB goes here
const {
  client
  // other db methods 
} = require('./index');

async function buildTables() {
	try {
		await client.connect();

		// drop tables in correct order
		console.log('Dropping All Tables...');

    await client.query(`
            DROP TABLE IF EXISTS messages;
            DROP TABLE IF EXISTS reviews;
            DROP TABLE IF EXISTS products;
            DROP TABLE IF EXISTS order_products;
            DROP TABLE IF EXISTS orders;
            
            
            DROP TABLE IF EXISTS users;
            
            
            
            
			
			
            `);

		console.log('Finished dropping tables!');

		// build tables in correct order
		console.log('Starting to build tables...');

    await client.query(`

    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      name varchar(255) UNIQUE NOT NULL,
      address VARCHAR(255) NOT NULL,
      imageURL VARCHAR(255) DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'
      );
    
      CREATE TABLE messages(
      id SERIAL PRIMARY KEY,
      status VARCHAR(255) DEFAULT 'unread',
      "userId" INTEGER REFERENCES users(id),
      "dateSent" Timestamp DEFAULT NOW()
      );
      CREATE TABLE products(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        price NUMERIC(10,2) NOT NULL,
        imageURL VARCHAR(255) DEFAULT 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png',
        "inStock" BOOLEAN DEFAULT true,
        useByDate VARCHAR(255) UNIQUE NOT NULL,
        category VARCHAR(255) NOT NULL
        );

      CREATE TABLE reviews(
				id SERIAL PRIMARY KEY,
				content VARCHAR(255) DEFAULT null, 
				"userId" INTEGER REFERENCES users(id),
				"productId" INTEGER references products(id)
      );
      
      CREATE TABLE orders(
        id SERIAL PRIMARY KEY,
        "productId" INTEGER REFERENCES products(id),
        price NUMERIC(10,2) NOT NULL,
        "datePlaced" Timestamp DEFAULT NOW()
      );

      CREATE TABLE order_products(
        id SERIAL PRIMARY KEY,
        "productId" INTEGER REFERENCES products(id),
        "orderId" INTEGER REFERENCES orders(id),
        price NUMERIC(10,2) NOT NULL,
        quantity NUMERIC(10,2) DEFAULT 0 NOT NULL
        );
    
    `);

		console.log('Finished constructing tables!');
	} catch (error) {
		console.error('Error constructing tables!');
		throw error;
	}
}

async function createInitialProducts() {
	console.log('Starting to create products...');
	try {
		const beef = await createProducts({
			name: 'Steak',
			description: 'Great Marbling',
			price: '8.99',
      imageurl: 'https://i.ytimg.com/vi/GI4iAcTA9KY/maxresdefault.jpg',
      inStock: true,
      useByDate : '03/05/2021',
			category: 'beef'
		});
		const chicken = await createProducts({
			name: 'Chicken Breast',
			description: '100% organic chicken breast',
			price: '5.99',
			imageurl: 'https://cdn.mos.cms.futurecdn.net/gfSKxAQ8ZCoknoctJgFDZa.jpg',
      inStock: true,
      useByDate : '03/01/2021',
			category: 'poultry'
		});

		const turkey = await createProducts({
			name: 'Turkey Breast',
			description: '100% organic turkey breast',
			price: '4.99',
			imageurl: 'https://exelbyfoods.co.uk/wp-content/uploads/2015/11/Turkey-Slices.jpg',
      inStock: true,
      useByDate : '02/29/2021',
			category: 'poultry'
		});

		const roastbeef = await createProducts({
			name: 'Roast Beef',
			description: 'Premium deli-quality, thin sliced roast beef, black pepper encrusted ',
			price: '9.99',
			imageurl: 'https://i.pinimg.com/originals/84/a0/17/84a017de7ecd74bb411b367f34448aee.jpg',
      inStock: true,
      useByDate : '03/03/2021',
			category: 'beef'
		});
		
		const bluefin = await createProducts({
			name: 'Blue-Fin Tuna',
			description: 'Japanese Blue-Fin Tuna, seasonal availability ',
			price: '15.99',
			imageurl: 'https://cdn.shopify.com/s/files/1/2270/4111/products/AdobeStock_111821811_345x345@2x.jpeg?v=1503861129',
      inStock: false,
      useByDate : '02/29/2021',
			category: 'seafood'
		});

		const pork = await createProducts({
			name: 'Pork Chops',
			description: 'Bone in pork chop',
			price: '4.99',
			imageurl: 'https://porterandyork.com/wp-content/uploads/Pork-Chop-e1540411361635.jpg',
      inStock: true,
      useByDate : '03/10/2021',
			category: 'pork'
		});

		const shrimp = await createProducts({
			name: 'Shrimp',
			description: 'whole jumbo shrimp, fresh as can be!',
			price: '7.99',
			imageurl: 'https://i.pinimg.com/originals/cc/60/ef/cc60ef0db54e9f746f709fdfd4cc9f10.jpg',
      inStock: true,
      useByDate : '02/28/2021',
			category: 'seafood'
		});

		const scallops = await createProducts({
			name: 'Scallops',
			description: 'beautfiful medallion scallops, tender & fresh as can be!',
			price: '10.99',
			imageurl: 'https://johnnysfinefoods.com/wp-content/uploads/2011/12/baked-scallops.jpg',
      inStock: true,
      useByDate : '03/05/2021',
			category: 'seafood'
		});

		const salmon = await createProducts({
			name: 'Salmon',
			description: 'gorgeous fillets with perfect marbling, tender & fresh as can be!',
			price: '7.99',
			imageurl: 'https://cdn.shopify.com/s/files/1/0008/6890/9116/products/Wild_King_Green_ca97a7f2-a382-4e17-8c12-967a4b80af48_1024x1024@2x.jpg?v=1552620838',
      inStock: true,
      useByDate : '02/29/2021',
			category: 'seafood'
		});

		const kobebeef = await createProducts({
			name: 'Kobe Wagyu Beef',
			description: "Japanese Kobe Wagyu Beef,  from the Tajima strain of Japanese Black cattle, raised in Japan's, Hyōgo Prefecture seasonal availability",
			price: '17.99',
			imageurl: 'https://3.bp.blogspot.com/-jmqHlos0jws/WAiPIbK1ekI/AAAAAAAAGVk/OvNBp6UTyWUiPAqmH5giSR594CQtRDrMACLcB/s1600/Origins-of-Beef-wagyu.jpg',
      inStock: false,
      useByDate : '03/02/2021',
			category: 'beef'
		});

		const alpastor = await createProducts({
			name: 'al Pastor',
			description: 'Delicious pork product, pairs with pineapple, amazing for tacos',
			price: '6.99',
			imageurl: 'https://thetacotrail.files.wordpress.com/2014/05/slide4.jpg',
      inStock: true,
      useByDate : '03/01/2021',
			category: 'pork'
		});

		const pastrami = await createProducts({
			name: 'Pastrami',
			description: 'Artisan, pepper-crusted pastrami. Cows locally and ethically raised',
			price: '9.99',
			imageurl: 'https://www.meatpoultrynutrition.org/sites/default/files/metatag/Slices%20Pastrami.jpg',
      inStock: true,
      useByDate : '03/10/2021',
			category: 'beef'
		});


		console.log('Products created:');
		console.log(beef, chicken, pork, shrimp, scallops, salmon, alpastor, turkey, roastbeef, bluefin, pastrami);
		console.log('Finished creating Products!');
	} catch (error) {
		console.error('Error creating Products!');
		throw error;
	}
}

async function createInitialReviews() {
	console.log('Starting to create Reviews...');
	try {
		const newReview = await createReview({ productId : 1, content : "My family can't get enough" , userId : 2})	

		console.log('Review created:');
		console.log(newReview);
		console.log('Finished creating Reviews!');
	} catch (error) {
		console.error('Error creating Reviews!');
		throw error;
	}
}

async function createInitialUsers() {
	console.log('Starting to create users...');
	try {
		const joseph = await createUser({
			firstName: 'Joseph',
			lastName: 'Malotte',
			email: 'jmalotte510@gmail.com',
			imageUrl: 'http://www.pennlalsa.org/uploads/1/3/4/8/13489220/current-anthony-headshot_orig.png',
			username: 'Joeyisafoodie',
			password : 'splenda1984',
			isAdmin : 'false'
		});
		const martin = await createUser({
			firstName: 'Martin',
			lastName: 'Phillips',
			email: 'phillipsconstruction@gmail.com',
			imageUrl: 'https://www.thomharrisdesign.com/wp-content/uploads/2011/06/Phillips-Construction-blog-500x384.jpg',
			username: 'Hammer-Time',
			password: 'nailedit',
			isAdmin : 'false'
		});
		const jessie = await createUser({
			firstName: 'Jessie',
			lastName: 'Nguyen',
			email: 'lockjessmonster@gmail.com',
			imageUrl: 'https://static.standard.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2014/10/27/11/lochnessmonster2710a.jpg',
			username: 'tinker-tailor',
			password: 'mossy+bossy',
			isAdmin: 'true'
		});
		console.log(joseph, martin, jessie)
		console.log('Users created:');
		console.log('Finished creating Users!');
	} catch (error) {
		console.error('Error creating Users!');
		throw error;
	}
}

async function createInitialOrders() {
	console.log('Starting to create orders...');
	try {
		const pending = await createOrder(
			'Pending',
			1
		);
		const delivered = await createOrder(
			'Delivered',
			3
		);
		const returnOrder = await createOrder(
			'return',
			2
		);
		console.log(pending, delivered, returnOrder )
		console.log('Orders created:');
		console.log('Finished creating Orders!');
	} catch (error) {
		console.error('Error creating Orders!');
		throw error;
	}
}

async function createInitialOrderProducts() {
	console.log('Starting to create order_products...');
	try {
		const order1 = await addProductToOrder({
			orderId: 1, 
			productId: 1, 
			price: 8.99,
			quantity: 1
		});
		const order2 = await addProductToOrder({
			orderId: 2, 
			productId: 2, 
			price: 8.98,
			quantity: 1.5
		});
		const order3 = await addProductToOrder({
			orderId: 3, 
			productId: 3, 
			price: 9.98,
			quantity: 2
		});
		console.log(order1, order2, order3 )
		console.log('order_products created:');
		console.log('Finished creating order_products!');
	} catch (error) {
		console.error('Error creating order_products!');
		throw error;
	}
}

async function populateInitialData() {
	try {
		await createInitialProducts();
		await createInitialUsers();
		await createInitialOrders();
		await createInitialOrderProducts();
		await createInitialReviews();
		// create useful starting data
	} catch (error) {
		throw error;
	}
}

buildTables()
  // .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());