module.exports = (express)=>{
  const router=express.Router();
  const fs= require('fs');
  const path=require('path')
  require("dotenv").config();
  router.use(express.json());
  router.use(express.urlencoded({ extended: false }));
  //Cart cache

  //knex config
  const knexConfig = require("../knexfile").development;
  const knex = require("knex")(knexConfig);
  const CartService = require('../services/CartService');
  const cartService = new CartService(knex);

  //Updating DB when adding item to cart
  router.post("/addtocart", (req,res)=>{
      let id=req.body.id
      res.status(200)
      return cartService.addItem(id)
      .catch((err) => console.log(err));
  });

  //Updating DB when removing quantity from cart
  router.post("/removequantity", (req,res)=>{
    let id=req.body.id
    return cartService.reduceQuantity(id)
    .catch((err) => console.log(err));
  })

  //Updated DB to restore quantity of deleted item
  router.post('/deletefromcart', (req,res)=>{
    let id=req.body.id
    let initQuant=req.body.initQuant
    console.log(initQuant)
    return cartService.deleteFromCart(id,initQuant)
    .catch((err) => console.log(err));
  })

  //Writing the JSON file
  router.post("/cartstatechange",(req,res)=>{
   let state=req.body.state;
   res.status(200)
    fs.writeFile(path.resolve(__dirname,'../data/cart.json'), JSON.stringify(state), {encoding:'utf-8'},(err)=>{
      if(err){
        console.log(err)
      }
    })
})
  //Getting the cart items from JSON file
  router.get('/cartitems',(req,res)=>{
    fs.readFile(path.resolve(__dirname,'../data/cart.json'),'utf-8',(err,data)=>{
      res.send(data)
    })
  })


  //Commit Transaction to Cart Table
    router.post('/cartcommit', (req,res)=>{
      let id=req.body.id
      let items=req.body.items
      items.map(item=>{
        return cartService.cartCommit(id,item.id,item.quantity)
      })
    })

    router.post('/paymentsuccess', async(req,res)=>{
      let userID=req.body.id;
      return cartService.orderCreation(userID)
        .then((orderId)=>{
          return cartService.getPaymentSuccess()
            .then(data=>{
              cartData= data.map(item=>{
              return cartService.orderCommit(orderId[0],item.inventory_id,item.quantity)
              })
            })
            .then(fs.writeFile(path.resolve(__dirname,'../data/cart.json'), "", {encoding:'utf-8'},(err)=>{
              if(err){
                console.log(err)
              } else console.log('cart empty')
            }))
              .then(()=>{return cartService.cartClear(userID)})
        });
    });

    router.post('paymentcancelled',async(req,res)=>{
      let userID=req.body.id;
      return cartService.cartClear(userID)
        .then(fs.writeFile(path.resolve(__dirname,'../data/cart.json'), "", {encoding:'utf-8'},(err)=>{
          if(err){
            console.log(err)
          } else console.log('cart empty')
        }))
    })

return router;
}