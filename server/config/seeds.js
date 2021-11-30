const db = require('./connection');
const { User, Product, Category, Blog } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Complete Fly Boxes' },
    { name: 'Flies' },
    { name: 'Custom Flies' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Full Fly Box',
      description:
        'A fully loaded assortment that covers all of your nymph fishing bases from #20 midges to #8 stones and everything in between. Similar to the Pocket Box, the Fulling Mill Stealth Box contains most of my year round favorite patterns as well as a few more specialized patterns like perdigons and midges. I have fished these patterns all over the country with great success',
      image: 'flybox1.jpg',
      category: categories[0]._id,
      price: 375.00,
      quantity: 5
    },
    {
      name: 'Half Fly Box',
      description:
        'A fully loaded assortment that covers all of your nymph fishing bases from #20 midges to #8 stones and everything in between. Similar to the Pocket Box, the Fulling Mill Stealth Box contains most of my year round favorite patterns as well as a few more specialized patterns like perdigons and midges.',
      image: 'flybox2.jpg',
      category: categories[0]._id,
      price: 199.00,
      quantity: 5
    },
    {
      name: 'Full Pocket Box',
      category: categories[0]._id,
      description:
        'This is a special selection to me. Prior to beginning this full time tying operation I took a 6 week road trip fishing up and down the east coast. During this trip I scaled my fly selection down to a small handful of patterns. Since that trip this group of flies have proven themselves all across the country and has become my core year round selection. Offered on half(36 flies) and full(72 flies) boxes. These are now housed in a Fulling Mill Pocket Box.',
      image: 'flybox3.jpg',
      price: 225.00,
      quantity: 20
    },
    {
      name: 'Half Pocket Box',
      category: categories[0]._id,
      description:
        'This is a special selection to me. Prior to beginning this full time tying operation I took a 6 week road trip fishing up and down the east coast. During this trip I scaled my fly selection down to a small handful of patterns. Since that trip this group of flies have proven themselves all across the country and has become my core year round selection. Offered on half(36 flies) and full(72 flies) boxes. These are now housed in a Fulling Mill Pocket Box.',
      image: 'flybox4.jpg',
      price: 120.00,
      quantity: 20
    },
    {
      name: 'Mop Fly (3)',
      category: categories[1]._id,
      description:
        'Tied on #12 barbless jig hooks with 4mm black nickel tungsten beads',
      image: 'mopfly.jpg',
      price: 14.99,
      quantity: 20
    },
    {
      name: 'Zebra Midge (3)',
      category: categories[1]._id,
      description:
        'These are tied on Fasna jig hooks with 2mm tungsten beads and coated with solarez bonedry for added durability. ',
      image: 'zebra.jpg',
      price: 9.00,
      quantity: 20
    },
    {
      name: 'Jigged Wooly Bugger (3)',
      category: categories[1]._id,
      description:
        'The UV ice dub adds some good flash and the cdc hackle provides tons of movement. I increase durability by over ribbing the cdc with tippet.',
      image: 'woolybugger.jpg',
      price: 199.99,
      quantity: 20
    },
    {
      name: 'Custom Fly',
      category: categories[2]._id,
      description:
        'Feel free to contact me with custom and bulk inquiries. Pricing and turnaround time varies. johnoh@usc.edu',
      image: 'custom.jpg',
      price: 0,
      quantity: 0
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });


await Blog.insertMany([
    {
      title: 'Making hooks',
      text: "making hooks is easy!!!",
      image:"mopfly.jpg"
    },
    {
      title: "Casting line",
      text: "pull back & releasing is the best way to get the line in the water",
      image: "flybox1.jpg"
    }
  ]);
  console.log("Blogs seeded!");

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
