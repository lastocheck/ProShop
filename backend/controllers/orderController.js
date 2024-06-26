import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

//@desc    Create new order
//@route   POST /api/orders
//@access  Private
const addOrderItems = asyncHandler(async (req, res) => {
    const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body

    if (orderItems && orderItems.lengths === 0) {
        res.status(400)
        throw new Error('No order items')
    } else {
       const order = new Order({
        orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice
       })

       const createdOrder = await order.save()

       res.status(201).json(ceratedOrder)
    }
})

export { addOrderItems }