import { useEffect, useState } from 'react';
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Image} from "@nextui-org/image";

export const StudyStreak = () => {
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        let currentStreak = localStorage.getItem('studyStreak');
        if (!currentStreak) {
            currentStreak = '0';
            localStorage.setItem('studyStreak', currentStreak);
        }
        setStreak(parseInt(currentStreak, 10));
    }, []);

    return (
        <Card>
            <CardHeader>Current Streak:</CardHeader>
            <CardBody>
                <p>{streak}</p>
            </CardBody>
        </Card>
    );
}