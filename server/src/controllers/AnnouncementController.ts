import  express  from 'express';
import Announcement from "../models/AnnouncementModel";


export const getAnnouncement = async (req :express.Request, res : express.Response, next :express.NextFunction) => {
    try {
        const announcements = await Announcement.find();
        res.status(200).json(announcements)
    }
    catch (error : any) {
        res.status(500).json({ error: error.message })
    }
}


export const getAnnouncementById = async (req :express.Request, res : express.Response, next :express.NextFunction) => {
    try {
        const announcement = await Announcement.findById(req.params.id);
        if (!announcement) {
            return res.status(404).json({ error: 'Announcement not found' });
        }
        res.status(200).json(announcement);
    }
    catch (error : any) {
        res.status(500).json({ error: error.message })
    }
}
export const updateAnnouncement = async (req :express.Request, res : express.Response, next :express.NextFunction) => {
    try {
        const updatedAnnouncement = await Announcement.findByIdAndUpdate(req.params.id);
        if (!updatedAnnouncement) {
            return res.status(404).json({ error: 'Announcement not found' });
        }
        res.status(200).json(updatedAnnouncement);
    }
    catch (error : any) {
        res.status(500).json({ error: error.message })
    }
}

export const addAnnouncement = async (req :express.Request, res : express.Response, next :express.NextFunction) => {
    try {
        const newAnnouncement = await Announcement.create(req.body);
        res.status(201).json(newAnnouncement);
    }
    catch (error : any) {
        res.status(500).json({ error: error.message })
    }
}

export const deleteAnnouncement = async (req :express.Request, res : express.Response, next :express.NextFunction) => {
    try {
        const deletedAnnoucement = await Announcement.findByIdAndDelete(req.params.id);
        if (!deletedAnnoucement) {
            return res.status(404).json({ error: 'Announcement not found' });
        }
        res.status(204).json({
            status: 'sucsses',
            data: null
        });
    }
    catch (error : any) {
        res.status(500).json({ error: error.message })
    }
}
