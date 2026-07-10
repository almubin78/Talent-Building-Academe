// src/components/DailyRoutine.jsx
import React, { useState } from 'react';
import { routineData, dayKeys, dayMap } from '../MyRoutine/routineData';

const DailyRoutine = () => {
  const [selectedDay, setSelectedDay] = useState('shani'); // ডিফল্ট শনিবার
  const [completedTasks, setCompletedTasks] = useState({}); // টাস্ক কমপ্লিট ট্র্যাকার

  const currentRoutine = routineData[selectedDay];
  const currentDayName = dayMap[selectedDay];

  // টাস্ক টগল ফাংশন (ইবাদত ট্র্যাকিংয়ের জন্য)
  const toggleTask = (index) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [`${selectedDay}-${index}`]: !prev[`${selectedDay}-${index}`],
    }));
  };

  // টাইপ অনুযায়ী ব্যাকগ্রাউন্ড কালার
  const getTypeColor = (type) => {
    switch (type) {
      case 'class':
        return 'border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20';
      case 'book':
        return 'border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20';
      case 'sheet':
        return 'border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20';
      case 'webdev':
        return 'border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20';
      case 'ibadah':
        return 'border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/20';
      case 'rest':
        return 'border-l-4 border-gray-400 bg-gray-50 dark:bg-gray-800/30';
      default:
        return 'border-l-4 border-gray-300 bg-gray-50 dark:bg-gray-800/20';
    }
  };

  // টাইপ অনুযায়ী ব্যাজ
  const getTypeBadge = (type) => {
    const badges = {
      class: '🔴 ক্লাস',
      book: '📖 বই',
      sheet: '📝 শীট',
      webdev: '💻 ওয়েব ডেভ',
      ibadah: '🕌 ইবাদত',
      rest: '☕ বিশ্রাম',
    };
    return badges[type] || type;
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl transition-all duration-300">
      {/* হেডার */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          📋 দৈনিক রুটিন ড্যাশবোর্ড
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          মাধ্যমিক পদার্থ ও রসায়ন শিক্ষক - সাপ্তাহিক সময়সূচী
        </p>
      </div>

      {/* ডে সিলেক্টর - বাটন গ্রুপ */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {dayKeys.map((key) => (
          <button
            key={key}
            onClick={() => setSelectedDay(key)}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
              selectedDay === key
                ? 'bg-indigo-600 text-white shadow-lg scale-105'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {dayMap[key]}
          </button>
        ))}
      </div>

      {/* সিলেক্টেড ডে এর রুটিন */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            📅 {currentDayName}
          </h2>
          <span className="text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full">
            {currentRoutine.slots.length} টি কাজ
          </span>
        </div>

        {/* টাইমলাইন */}
        <div className="space-y-3">
          {currentRoutine.slots.map((slot, index) => {
            const taskId = `${selectedDay}-${index}`;
            const isCompleted = completedTasks[taskId] || false;

            return (
              <div
                key={index}
                className={`${getTypeColor(
                  slot.type
                )} p-3 md:p-4 rounded-r-lg flex flex-col md:flex-row md:items-center justify-between gap-2 transition-all hover:shadow-md`}
              >
                <div className="flex items-start gap-3 flex-1">
                  {/* ইবাদতের জন্য চেকবক্স (শুধু ইবাদত টাইপের জন্য) */}
                  {slot.type === 'ibadah' && (
                    <input
                      type="checkbox"
                      checked={isCompleted}
                      onChange={() => toggleTask(index)}
                      className="mt-1 w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 cursor-pointer"
                    />
                  )}

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs md:text-sm font-bold text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                        {slot.time}
                      </span>
                      <span
                        className={`text-[10px] md:text-xs px-2 py-0.5 rounded-full font-medium ${
                          slot.type === 'ibadah'
                            ? 'bg-amber-200 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300'
                            : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {getTypeBadge(slot.type)}
                      </span>
                    </div>
                    <p
                      className={`text-sm md:text-base font-medium text-gray-800 dark:text-gray-200 mt-1 ${
                        isCompleted ? 'line-through opacity-60' : ''
                      }`}
                    >
                      {slot.title}
                    </p>
                  </div>
                </div>

                {/* ছোট আইকন */}
                <div className="text-lg md:text-xl opacity-60 self-end md:self-center">
                  {slot.type === 'class' && '🏫'}
                  {slot.type === 'book' && '📚'}
                  {slot.type === 'sheet' && '📄'}
                  {slot.type === 'webdev' && '⚛️'}
                  {slot.type === 'ibadah' && '🤲'}
                  {slot.type === 'rest' && '😌'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ফুটার - আজকের পরামর্শ */}
      <div className="mt-6 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-800/30">
        <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
          💡 <span className="font-semibold">টিপস:</span> প্রতি কাজের জন্য নির্ধারিত সময় শেষ হলে পরবর্তী কাজে চলে যান। 
          {' '}ইবাদত ট্র্যাক করতে চেকবক্স ব্যবহার করুন।
        </p>
      </div>
    </div>
  );
};

export default DailyRoutine;