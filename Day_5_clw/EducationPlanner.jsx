import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './EducationPlanner.module.css'; // Import the CSS module

const EducationPlanner = () => {
  const [subjectName, setSubjectName] = useState('');
  const [subjectHours, setSubjectHours] = useState('');
  const [subjects, setSubjects] = useState([]);

  const handleAddSubject = () => {
    if (subjectName && subjectHours) {
      setSubjects([...subjects, { name: subjectName, hours: parseInt(subjectHours) }]);
      setSubjectName('');
      setSubjectHours('');
    }
  };

  const handleRemoveSubject = (index) => {
    const updatedSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(updatedSubjects);
  };

  const handleIncrementHours = (index) => {
    const updatedSubjects = subjects.map((subject, i) =>
      i === index ? { ...subject, hours: subject.hours + 1 } : subject
    );
    setSubjects(updatedSubjects);
  };

  const handleDecrementHours = (index) => {
    const updatedSubjects = subjects.map((subject, i) =>
      i === index && subject.hours > 0 ? { ...subject, hours: subject.hours - 1 } : subject
    );
    setSubjects(updatedSubjects);
  };

  return (
    <div className={styles.container}>
      <div className={styles.App}>
        <h1>Geekster Education Planner</h1>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Subject"
            className={styles.subjectInput}
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Hours"
            className={styles.hoursInput}
            value={subjectHours}
            onChange={(e) => setSubjectHours(e.target.value)}
          />
          <button className={styles.addButton} onClick={handleAddSubject}>
            Add
          </button>
        </div>
        {subjects.map((subject, index) => (
          <div className={styles.subjectItem} key={index}>
            <div>{subject.name} - {subject.hours} hours</div>
            <button
              className={styles.incrementButton}
              onClick={() => handleIncrementHours(index)}
            >
              +
            </button>
            <button
              className={styles.decrementButton}
              onClick={() => handleDecrementHours(index)}
            >
              -
            </button>
            <button
              className={styles.deleteButton}
              onClick={() => handleRemoveSubject(index)}
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPlanner;
