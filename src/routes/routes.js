const express = require("express");
const bodyParser = require("body-parser");

const Parties = require("./../model/parties_model");
const Order = require("./../model/order_model");
const Item = require("./../model/inventory_item_add_model");
const Inventory = require("./../model/inventory_model");
const Purchase = require("./../model/purchase_model");
const Sales = require("./../model/sales_model");
const Collection= require("./../model/collection_model");   // <-- FIXED

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


// ------------------------ HOME ------------------------
router.get("/", (req, res) => {
    res.send("This is the Homepage!");
});


// ------------------------ PARTIES ------------------------
router.get("/parties", async (req, res) => {
    const partiesList = await Parties.find();
    res.json(partiesList);
});

router.get("/parties/:partyName", async (req, res) => {
    const partiesList = await Parties.find({ partiesName: req.params.partyName });
    res.json(partiesList);
});

router.post("/parties/addnewparty", async (req, res) => {
    const newParty = new Parties({
        id: req.body.id,
        userid: req.body.userid,
        partiesName: req.body.partiesName,
        partiesAddress: req.body.partiesAddress,
        phoneNumber: req.body.phoneNumber,
        emailAddress: req.body.emailAddress,
        openingBalance: req.body.openingBalance
    });

    await newParty.save();
    res.json({ message: "New Party Created Successfully!" });
});

router.post("/parties/delete", async (req, res) => {
    await Parties.deleteOne({ id: req.body.id });
    res.json({ message: "Party Deleted Successfully!" });
});


// ------------------------ ORDERS ------------------------
router.get("/order", async (req, res) => {
    const orderList = await Order.find();
    res.json(orderList);
});

router.get("/order/:partyName", async (req, res) => {
    const orderList = await Order.find({ partyName: req.params.partyName });
    res.json(orderList);
});

router.post("/order/addneworder", async (req, res) => {
    const newOrder = new Order({
        id: req.body.id,
        userid: req.body.userid,
        partyName: req.body.partyName,
        partyAddress: req.body.partyAddress,
        orderDate: req.body.orderDate,
        dispatchDate: req.body.dispatchDate,
        orderItems: req.body.orderItems,
        orderQuantity: req.body.orderQuantity,
        orderAmount: req.body.orderAmount,
        orderStatus: req.body.orderStatus,
        orderItemsUnit: req.body.orderItemsUnit,
        createdAt: req.body.createdAt
    });

    await newOrder.save();
    res.json({ message: "New Order Created Successfully!" });
});

router.post("/order/delete", async (req, res) => {
    await Order.deleteOne({ id: req.body.id });
    res.json({ message: "Order Deleted Successfully!" });
});


// ------------------------ INVENTORY ITEMS (for dropdown) ------------------------
router.get("/inventory", async (req, res) => {
    const itemList = await Item.find({}, "itemName itemUnit _id");  // only return useful fields
    res.json(itemList);
});
router.post("/inventory/delete", async (req, res) => {
    await Item.deleteOne({ id: req.body.id });
    res.json({ message: "Item Deleted Successfully!" });
});

router.post("/inventory/additem", async (req, res) => {
    const newItem = new Item({
        id: req.body.id,
        userid: req.body.userid,
        itemName: req.body.itemName,
        itemUnit: req.body.itemUnit,
        itemPrice: req.body.itemPrice,
        addedOn: req.body.addedOn
    });

    await newItem.save();
    res.json({ message: "Item Added Successfully!" });
});


// ------------------------ INVENTORY ENTRY  ------------------------
router.get("/inventory/stock", async (req, res) => {
    const itemList = await Inventory.find();  // only return useful fields
    res.json(itemList);
});
router.post("/inventory/stock/delete", async (req, res) => {
    await Inventory.deleteOne({ id: req.body.id });
    res.json({ message: "Stock Deleted Successfully!" });
});
router.post("/inventory/addinventory", function(req, res){
    const newInventory = new Inventory({
        id: req.body.id,
        userid: req.body.userid,
        itemName: req.body.itemName,
        itemQuantity: req.body.itemQuantity,
        itemUnit: req.body.itemUnit,
        itemPrice: req.body.itemPrice,
        createdAt: req.body.createdAt
    });

    newInventory.save();
    res.json({message: "Inventory Added Successfully!"});
})


// ------------------------ PURCHASE / SALES / COLLECTION ------------------------

router.get("/purchase", async (req, res) => {
    const itemList = await Purchase.find();  // only return useful fields
    res.json(itemList);
});
router.post("/purchase/delete", async (req, res) => {
    await Purchase.deleteOne({ id: req.body.id });
    res.json({ message: "Purchase Deleted Successfully!" });
});

router.post("/purchase/add",async function(req, res) {
    const newPurchase = await new Purchase({
        id: req.body.id,
        userid: req.body.userid,
        itemName: req.body.itemName,
        itemQuantity: req.body.itemQuantity,
        itemUnit: req.body.itemUnit,
        itemPrice: req.body.itemPrice,
        createdAt: req.body.createdAt
    });
    newPurchase.save();
});

router.get("/sales",async function(req, res){
    const salesList= await Sales.find();
    res.json(salesList);
})
router.post("/sales/delete", async (req, res) => {
    await Sales.deleteOne({ id: req.body.id });
    res.json({ message: "Sales Deleted Successfully!" });
});

router.post("/sales", function (req, res) {
    const salesList= Sales({
        id:req.body.id,
        userid: req.body.userid,
        itemName:req.body.itemName,
        itemQuantity:req.body.itemQuantity,
        itemUnit:req.body.itemUnit,
        itemPrice:req.body.itemprice,
        customerName:req.body.customerName,
        customerPhone:req.body.customerPhone,
        orderStatus:req.body.orderStatus,
        totalPrice:req.body.totalPrice,
        salesDate:req.body.salesDate
    })
    salesList.save();
    const response = {message: "Sales Added Successfully!"}
    res.json(response);
});

router.get("/collection/list", async function(req, res){
    const collectionList= await Collection.find();
    res.json(collectionList);
})
router.post("/collection/delete", async (req, res) => {
    await Collection.deleteOne({ id: req.body.id });
    res.json({ message: "Collection Deleted Successfully!" });
});

router.post("/collection", async function(req, res) {
    const collectionList= await Collection({
        id:req.body.id,
        userid:req.body.userid,
        partyName:req.body.partyName,
        collectionAmount: req.body.collectionAmount,
        createdOn:req.body.createdOn
    })
    collectionList.save();
    const response= {message: "Collection Added Successfully!"}
    res.json(response);
});
router.get("/dispatched", function(req, res) {
    res.send("This is the collection!");
});


module.exports = router;
