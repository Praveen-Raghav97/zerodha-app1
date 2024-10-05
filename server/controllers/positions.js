import { PositionsModel  } from "../models/PostionsModel.js";


const getAllPositions= async(req, res ,next) =>{
    try {
        const allPositions = await PositionsModel.find({});
        if (!allPositions) {
            return res.json({message:"There Are no Positions"})
        }

        return res.status(200).json(allPositions)
    } catch (error) {
       return next(error) 
    }
}

export {
    getAllPositions,
}