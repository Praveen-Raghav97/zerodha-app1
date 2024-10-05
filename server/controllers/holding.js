import { HoldingsModel } from "../models/HoldingsModel.js";


const getAllHoldings= async(req, res ,next) =>{
    try {
        const allHoldings = await HoldingsModel.find({});
        if (!allHoldings) {
            return res.json({message:"There Are no Holdings"})
        }

        return res.status(200).json(allHoldings)
    } catch (error) {
       return next(error) 
    }
}

export {
    getAllHoldings
}

