import { useParams } from 'react-router-dom';
import trainers from './TrainersMock';

function TrainerDetails() {
    const { id } = useParams();
    const trainer = trainers.find(t => t.trainerId === parseInt(id));

    if (!trainer) return <p>Trainer not found</p>;

    return (
        <div>
            <h1>Trainers Details</h1>
            <h2>{trainer.name}</h2>
            <p><strong>Email:</strong> {trainer.email}</p>
            <p><strong>Phone:</strong> {trainer.phone}</p>
            <p><strong>Technology:</strong> {trainer.technology}</p>
            <p><strong>Skills:</strong> {trainer.skills}</p>
        </div>
    );
}

export default TrainerDetails;
