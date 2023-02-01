
import DeviceInfo from '../models/deviceinfo.js';

export const getAnalytics = async (req, res) => {
    try {
        const analyticsInfo = await DeviceInfo.find();
        res.status(200).json(analyticsInfo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const postAnalytics = async (req, res) =>{
    try{
        const analyticsInfo = req.body;
        const newDeviceInfo = new DeviceInfo(analyticsInfo);
        await newDeviceInfo.save();
        res.status(200).json(newDeviceInfo);
    }catch (error){
        res.status(404).json({message: error.message});
    }

}