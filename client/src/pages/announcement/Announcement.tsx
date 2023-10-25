import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAnnouncements } from '../../store/announcementSlice';
import styles from './Announcement.module.css'
import Card from '../../components/card/Card';
const Announcement = () => {
    const dispatch = useDispatch();
    const annoucements = useSelector((state) => state['announcement']['announcements']);
    console.log(annoucements);
    
    useEffect(() => {
        dispatch(fetchAnnouncements())
    }, [dispatch])

    return (
        <div className={styles.container}>
            {annoucements.map((annoucement) => <Card title="Annoucement" minWidth ="800" maxWidth ="1000">
                <div className={styles.annoucementContent}>
                    <div className={styles.profile}>
                        <h3>{annoucement.teacherName}</h3>
                        <p>{annoucement.subject}</p>
                    </div>
                    <p>{annoucement.announcementText}</p>
                </div>
            </Card>)}
        </div>
    )
}

export default Announcement