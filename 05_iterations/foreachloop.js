// for each loop

const array = ["sudha","sudhanshu","aditya","ramesh","suresh"]

array.forEach(function (item){console.log(item);
}) //regular function

array.forEach( (item) => {console.log(item);
}) // arrow function

function print(item){
    console.log(item);
}

array.forEach(print) //another way

array.forEach((item,index,arr) => {console.log(`${item} is on index ${index} in array}:`, arr);
}) //declaring all the three possible parameters

console.log("\n\n\n");


const objArr = [
    {
        name: "Sudhanshu",
        age: 21,
        company: "Larsen & Toubro"
    },
    {
        name: "Aum",
        age: 21,
        company: "Ion"
    },
    {
        name: "Tushar",
        age: 20,
        company: "GoodspaceAI"
    },
    {
        name: "Vedant",
        age: 22,
        company: "ZS Associates"
    }
]

objArr.forEach((item) => {
    console.log(item.name);
})


//exercises for a big database array using forEach
const databaseMock = [
  {
    id: 1,
    user: {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      address: {
        street: "123 Maple St",
        city: "Springfield",
        zip: "62704",
        geo: { lat: "39.7817", lng: "-89.6501" }
      },
      phone: "+1-202-555-0173",
      isActive: true,
      registeredAt: "2023-03-15T10:12:45Z",
      roles: ["admin", "editor"],
    },
    cart: [
      { productId: 101, name: "Laptop", price: 999.99, quantity: 1 },
      { productId: 102, name: "Wireless Mouse", price: 25.5, quantity: 2 }
    ],
    transactions: [
      {
        id: "txn1001",
        date: "2024-01-20T15:22:31Z",
        amount: 1050.99,
        method: "credit_card",
        status: "completed"
      }
    ],
    activityLogs: [
      { timestamp: "2024-04-10T12:00:00Z", action: "login", ip: "192.168.1.1" },
      { timestamp: "2024-04-10T12:05:00Z", action: "add_to_cart", productId: 101 }
    ]
  },
  {
    id: 2,
    user: {
      name: "Bob Smith",
      email: "bob.smith@example.net",
      address: {
        street: "456 Oak Rd",
        city: "Riverside",
        zip: "92501",
        geo: { lat: "33.9533", lng: "-117.3961" }
      },
      phone: "+1-303-555-0119",
      isActive: false,
      registeredAt: "2022-09-01T08:45:30Z",
      roles: ["viewer"],
    },
    cart: [],
    transactions: [
      {
        id: "txn1002",
        date: "2023-12-14T11:10:00Z",
        amount: 39.99,
        method: "paypal",
        status: "failed"
      }
    ],
    activityLogs: [
      { timestamp: "2024-01-01T09:00:00Z", action: "password_change", ip: "10.0.0.2" }
    ]
  },
  // Repeat similar entries with varied structure
  ...Array.from({ length: 98 }, (_, i) => ({
    id: i + 3,
    user: {
      name: `User ${i + 3}`,
      email: `user${i + 3}@example.com`,
      address: {
        street: `${i + 10} Test Lane`,
        city: `City${i % 10}`,
        zip: `1000${i % 100}`,
        geo: { lat: `${35 + i * 0.1}`, lng: `-${120 + i * 0.1}` }
      },
      phone: `+1-555-00${i + 3}`,
      isActive: i % 2 === 0,
      registeredAt: new Date(Date.now() - i * 86400000).toISOString(),
      roles: i % 3 === 0 ? ["editor"] : ["viewer"]
    },
    cart: [
      {
        productId: 200 + (i % 5),
        name: `Product ${i % 5}`,
        price: parseFloat((10 + (i % 5) * 5).toFixed(2)),
        quantity: (i % 4) + 1
      }
    ],
    transactions: [
      {
        id: `txn10${i}`,
        date: new Date(Date.now() - i * 3600000).toISOString(),
        amount: parseFloat((20 + i * 1.25).toFixed(2)),
        method: ["credit_card", "paypal", "upi"][i % 3],
        status: ["completed", "pending", "failed"][i % 3]
      }
    ],
    activityLogs: Array.from({ length: 3 }, (_, j) => ({
      timestamp: new Date(Date.now() - j * 300000).toISOString(),
      action: ["login", "logout", "view_product"][j % 3],
      ip: `192.168.0.${j + 1}`
    }))
  }))
];

databaseMock.forEach((item) => {
    if(item.user.isActive){
        //console.log(item.user.name, item.user.email);
    }
})

let finalAmount = 0;
databaseMock.forEach((item) => {
    if(item.transactions.length >0){
        //finalAmount += item.transactions[0].amount
    }
})

console.log(finalAmount); // adds up only the first transactions of all the users
