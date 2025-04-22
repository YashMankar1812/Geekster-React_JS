import React, { useState } from 'react';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import styles from './EducationPlanner.module.css';

const EducationPlanner = () => {
  const [subjectName, setSubjectName] = useState('');
  const [subjectHours, setSubjectHours] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddSubject = () => {
    if (subjectName && subjectHours) {
      setSubjects([...subjects, { 
        name: subjectName, 
        hours: Math.max(0, parseInt(subjectHours)) || 0 
      }]);
      setSubjectName('');
      setSubjectHours('');
      setIsAdding(false);
    }
  };

  const handleRemoveSubject = (index) => {
    const updatedSubjects = subjects.filter((_, i) => i !== index);
    setSubjects(updatedSubjects);
  };

  const handleHourChange = (index, value) => {
    const updatedSubjects = subjects.map((subject, i) =>
      i === index ? { ...subject, hours: Math.max(0, value) } : subject
    );
    setSubjects(updatedSubjects);
  };

  const totalHours = subjects.reduce((sum, subject) => sum + subject.hours, 0);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h1 className={styles.title}>Education Planner</h1>
          <p className={styles.subtitle}>Plan your study schedule effectively</p>
        </header>

        {!isAdding ? (
          <button 
            className={styles.primaryButton} 
            onClick={() => setIsAdding(true)}
          >
            Add New Subject
          </button>
        ) : (
          <div className={styles.inputForm}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                placeholder="Subject name"
                className={styles.input}
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
                autoFocus
              />
              <input
                type="number"
                placeholder="Hours"
                min="0"
                className={styles.input}
                value={subjectHours}
                onChange={(e) => setSubjectHours(e.target.value)}
              />
            </div>
            <div className={styles.formActions}>
              <button 
                className={styles.secondaryButton}
                onClick={() => setIsAdding(false)}
              >
                Cancel
              </button>
              <button 
                className={styles.primaryButton} 
                onClick={handleAddSubject}
                disabled={!subjectName || !subjectHours}
              >
                Add Subject
              </button>
            </div>
          </div>
        )}

        {subjects.length > 0 && (
          <div className={styles.summary}>
            <div className={styles.summaryItem}>
              <span>Total Subjects:</span>
              <span className={styles.summaryValue}>{subjects.length}</span>
            </div>
            <div className={styles.summaryItem}>
              <span>Total Hours:</span>
              <span className={styles.summaryValue}>{totalHours}</span>
            </div>
          </div>
        )}

        <div className={styles.subjectsList}>
          {subjects.map((subject, index) => (
            <div className={styles.subjectCard} key={index}>
              <div className={styles.subjectInfo}>
                <h3 className={styles.subjectName}>{subject.name}</h3>
                <div className={styles.hoursControl}>
                  <button 
                    className={styles.hoursButton}
                    onClick={() => handleHourChange(index, subject.hours - 1)}
                    aria-label="Decrease hours"
                  >
                    <FaMinus />
                  </button>
                  <span className={styles.hoursValue}>{subject.hours} hrs</span>
                  <button 
                    className={styles.hoursButton}
                    onClick={() => handleHourChange(index, subject.hours + 1)}
                    aria-label="Increase hours"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <button
                className={styles.deleteButton}
                onClick={() => handleRemoveSubject(index)}
                aria-label="Remove subject"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        {subjects.length === 0 && !isAdding && (
          <div className={styles.emptyState}>
            <p>No subjects added yet</p>
            <p>Click "Add New Subject" to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationPlanner;
