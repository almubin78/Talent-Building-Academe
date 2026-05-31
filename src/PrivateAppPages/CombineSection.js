// client/src/components/CombineSection.js
import React from 'react';

const CombineSection = () => {
  const subjects = [
    { name: 'Physics', icon: '⚛️', description: 'Conceptual clarity with practical examples. Daily MCQ practice with solutions.' },
    { name: 'Chemistry', icon: '🧪', description: 'Organic, Inorganic & Physical Chemistry. Problem-solving techniques.' },
    { name: 'Math', icon: '📐', description: 'Algebra, Calculus, Trigonometry. Regular assignments and doubt sessions.' }
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">HOW TO TEACH - MCQ Focus</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <div key={subject.name} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-4">{subject.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{subject.name}</h3>
            <p className="text-gray-600">{subject.description}</p>
            <div className="mt-4 inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
              Daily MCQ Practice
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CombineSection;