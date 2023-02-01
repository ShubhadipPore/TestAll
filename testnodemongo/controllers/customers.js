import Customer from '../models/customers.js';
import { mockDataCustomers } from '../data/data.js';
import { response } from 'express';


 export const getCustomers = async (req, res) => {
    try {
        const customersInfo = await Customer.find();

        res.status(200).json(customersInfo);
       // response.send(res, "Data Fetched", customersInfo);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const postCustomers = async (req, res) =>{
    try{
        const customersInfo = req.body;
        const newCustomer = new Customer(customersInfo);
        await newCustomer.save();
        res.status(200).json(newCustomer);
    }catch (error){
        res.status(404).json({message: error.message});
    }

}
