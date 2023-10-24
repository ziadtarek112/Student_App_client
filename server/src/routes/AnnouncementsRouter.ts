import { Router } from "express";
import { addAnnouncement, deleteAnnouncement, getAnnouncement, getAnnouncementById, updateAnnouncement } from "../controllers/AnnouncementController";

const announcementRouter = Router();

announcementRouter.get('/', getAnnouncement);
announcementRouter.get('/:id', getAnnouncementById);
announcementRouter.post('/', addAnnouncement);
announcementRouter.patch('/:id', updateAnnouncement);
announcementRouter.delete('/:id', deleteAnnouncement);

export default announcementRouter;