// src/components/DailyRoutine.jsx
import React, { useState, useEffect } from 'react';
import { routineData, dayKeys, dayMap, getWeeklyStats, getBatchSubjects } from './routineData';

const DailyRoutine = () => {
  const [selectedDay, setSelectedDay] = useState('shani');
  const [completedTasks, setCompletedTasks] = useState({});
  const [showStats, setShowStats] = useState(false);
  const [showBatchDetails, setShowBatchDetails] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // লোকাল স্টোরেজ থেকে ডেটা লোড
  useEffect(() => {
    const saved = localStorage.getItem('routineTasks');
    if (saved) {
      setCompletedTasks(JSON.parse(saved));
    }
  }, []);

  // লোকাল স্টোরেজে সেভ
  useEffect(() => {
    localStorage.setItem('routineTasks', JSON.stringify(completedTasks));
  }, [completedTasks]);

  // রিয়েল টাইম ঘড়ি
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const currentRoutine = routineData[selectedDay];
  const currentDayName = dayMap[selectedDay];
  const stats = getWeeklyStats();
  const batchSubjects = getBatchSubjects();

  // টাস্ক টগল
  const toggleTask = (index) => {
    const taskId = `${selectedDay}-${index}`;
    setCompletedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };

  // অ্যালার্ম ফাংশন
  const setAlarm = (time, title) => {
    if (!("Notification" in window)) {
      alert("এই ব্রাউজারে নোটিফিকেশন সাপোর্ট করে না।");
      return;
    }

    if (Notification.permission === "granted") {
      // ১২ ঘন্টা ফরম্যাট থেকে ২৪ ঘন্টায় কনভার্ট
      let hours = parseInt(time.split(':')[0]);
      const minutes = parseInt(time.split(':')[1].split(' ')[0]);
      const ampm = time.split(' ')[1];
      
      if (ampm === 'PM' && hours !== 12) hours += 12;
      if (ampm === 'AM' && hours === 12) hours = 0;

      const now = new Date();
      const alarmTime = new Date();
      alarmTime.setHours(hours, minutes, 0, 0);

      const diff = alarmTime - now;
      if (diff > 0) {
        setTimeout(() => {
          new Notification(`⏰ রিমাইন্ডার: ${title}`, {
            body: `আপনার "${title}" এর সময় হয়েছে!`,
            icon: '📚'
          });
        }, diff);
        alert(`✅ "${title}" এর জন্য ${time} টায় অ্যালার্ম সেট করা হয়েছে!`);
      } else {
        alert(`⚠️ "${title}" এর সময় ইতিমধ্যে পার হয়ে গেছে।`);
      }
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          setAlarm(time, title);
        }
      });
    }
  };

  // টাইপ অনুযায়ী ব্যাকগ্রাউন্ড কালার
  const getTypeColor = (type) => {
    switch (type) {
      case 'class': return 'border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20';
      case 'book': return 'border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20';
      case 'sheet': return 'border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20';
      case 'webdev': return 'border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20';
      case 'ibadah': return 'border-l-4 border-amber-500 bg-amber-50 dark:bg-amber-900/20';
      case 'rest': return 'border-l-4 border-gray-400 bg-gray-50 dark:bg-gray-800/30';
      default: return 'border-l-4 border-gray-300 bg-gray-50 dark:bg-gray-800/20';
    }
  };

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

  // ব্যাচ ব্যাজ
  const getBatchBadge = (batch, subject) => {
    const colors = {
      'Batch-1': 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
      'Batch-2': 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
      'Batch-3': 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
      'Batch-4': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
      'Batch-5': 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
      'Batch-6': 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300',
    };
    return `${colors[batch] || 'bg-gray-100 text-gray-800'} px-2 py-0.5 rounded-full text-xs font-medium`;
  };

  // কমপ্লিটেড টাস্ক কাউন্ট
  const getCompletedCount = () => {
    const dayTasks = currentRoutine.slots;
    let count = 0;
    dayTasks.forEach((_, index) => {
      if (completedTasks[`${selectedDay}-${index}`]) count++;
    });
    return count;
  };

  const totalTasks = currentRoutine.slots.length;
  const completedCount = getCompletedCount();
  const progressPercentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl transition-all duration-300">
      
      {/* হেডার */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          📋 দৈনিক রুটিন ড্যাশবোর্ড
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
          মাধ্যমিক পদার্থ ও রসায়ন শিক্ষক - সাপ্তাহিক সময়সূচী
        </p>
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          🕐 বর্তমান সময়: {currentTime.toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      {/* ডে সিলেক্টর */}
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

      {/* প্রগ্রেস বার */}
      <div className="mb-4 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div 
          className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-4">
        <span>অগ্রগতি: {completedCount}/{totalTasks}</span>
        <span>{progressPercentage}% সম্পন্ন</span>
      </div>

      {/* মেইন কন্টেন্ট */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* রুটিন লিস্ট */}
        <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              📅 {currentDayName}
            </h2>
            <span className="text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full">
              {totalTasks} টি কাজ
            </span>
          </div>

          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-2">
            {currentRoutine.slots.map((slot, index) => {
              const taskId = `${selectedDay}-${index}`;
              const isCompleted = completedTasks[taskId] || false;

              return (
                <div
                  key={index}
                  className={`${getTypeColor(slot.type)} p-3 rounded-r-lg flex flex-col md:flex-row md:items-start justify-between gap-2 transition-all hover:shadow-md group`}
                >
                  <div className="flex items-start gap-3 flex-1">
                    {/* চেকবক্স */}
                    <input
                      type="checkbox"
                      checked={isCompleted}
                      onChange={() => toggleTask(index)}
                      className="mt-1 w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 cursor-pointer"
                    />

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-2 py-0.5 rounded border border-gray-200 dark:border-gray-700">
                          {slot.time}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                          {getTypeBadge(slot.type)}
                        </span>
                        {/* ব্যাচ ব্যাজ */}
                        {slot.batch && (
                          <span className={getBatchBadge(slot.batch, slot.subject)}>
                            {slot.batch} - {slot.subject}
                          </span>
                        )}
                      </div>
                      <p className={`text-sm font-medium text-gray-800 dark:text-gray-200 mt-1 ${isCompleted ? 'line-through opacity-60' : ''}`}>
                        {slot.title}
                      </p>
                    </div>
                  </div>

                  {/* অ্যাকশন বাটন */}
                  <div className="flex items-center gap-2 ml-8 md:ml-0">
                    <button
                      onClick={() => setAlarm(slot.time.split(' - ')[0], slot.title)}
                      className="text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded hover:bg-indigo-200 dark:hover:bg-indigo-800/40 transition"
                      title="অ্যালার্ম সেট করুন"
                    >
                      ⏰
                    </button>
                    <span className="text-lg opacity-60">
                      {slot.type === 'class' && '🏫'}
                      {slot.type === 'book' && '📚'}
                      {slot.type === 'sheet' && '📄'}
                      {slot.type === 'webdev' && '⚛️'}
                      {slot.type === 'ibadah' && '🤲'}
                      {slot.type === 'rest' && '😌'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* সাইডবার - স্ট্যাটিস্টিক্স */}
        <div className="space-y-4">
          {/* স্ট্যাটিস্টিক্স টগল */}
          <button
            onClick={() => setShowStats(!showStats)}
            className="w-full bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium py-2 px-4 rounded-lg transition"
          >
            {showStats ? '📊 স্ট্যাটিস্টিক্স লুকান' : '📊 সাপ্তাহিক পরিসংখ্যান দেখুন'}
          </button>

          {showStats && (
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-3">📊 সাপ্তাহিক পরিসংখ্যান</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">📚 মোট কাজ:</span>
                  <span className="font-bold text-gray-800 dark:text-white">{stats.totalTasks}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">✅ সম্পন্ন কাজ:</span>
                  <span className="font-bold text-green-600 dark:text-green-400">
                    {Object.keys(completedTasks).filter(key => completedTasks[key]).length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">🏫 ক্লাস ঘন্টা:</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">{stats.classHours}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">💻 ওয়েব ডেভ ঘন্টা:</span>
                  <span className="font-bold text-purple-600 dark:text-purple-400">{stats.webDevHours}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">🕌 ইবাদত:</span>
                  <span className="font-bold text-amber-600 dark:text-amber-400">{stats.ibadahTasks}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">📖 বই/শীট:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{stats.bookSheetTasks}</span>
                </div>
              </div>
            </div>
          )}

          {/* ব্যাচ ডিটেইলস টগল */}
          <button
            onClick={() => setShowBatchDetails(!showBatchDetails)}
            className="w-full bg-purple-50 dark:bg-purple-900/20 hover:bg-purple-100 dark:hover:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium py-2 px-4 rounded-lg transition"
          >
            {showBatchDetails ? '📚 ব্যাচ লুকান' : '📚 ব্যাচের বিস্তারিত দেখুন'}
          </button>

          {showBatchDetails && (
            <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-3">📚 ব্যাচের বিবরণ</h3>
              <div className="space-y-3">
                {Object.keys(batchSubjects).map((batch) => (
                  <div key={batch} className="border-b border-gray-200 dark:border-gray-700 pb-2 last:border-0">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm text-gray-800 dark:text-white">{batch}</span>
                      <span className="text-xs bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-full">
                        {stats.batchDetails[batch] || 0} ক্লাস
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <span className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
                        📖 {batchSubjects[batch].subject}
                      </span>
                      <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded">
                        👨‍🎓 {batchSubjects[batch].students}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded border border-yellow-200 dark:border-yellow-800/30">
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  💡 Batch-1 থেকে Batch-4: রসায়ন/পদার্থ (মাধ্যমিক) <br/>
                  💡 Batch-5 ও Batch-6: বিভিন্ন ক্লাসের ছাত্র-ছাত্রী (গণিত/বিজ্ঞান/গ্রামার)
                </p>
              </div>
            </div>
          )}

          {/* টিপস */}
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800/30">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              💡 <span className="font-semibold">টিপস:</span> প্রতি কাজের জন্য নির্ধারিত সময় শেষ হলে পরবর্তী কাজে চলে যান। 
              ইবাদত ট্র্যাক করতে চেকবক্স ব্যবহার করুন। অ্যালার্ম বাটনে ক্লিক করে কাজের রিমাইন্ডার সেট করুন।
            </p>
          </div>

          {/* প্রিন্ট বাটন */}
          <button
            onClick={() => window.print()}
            className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2 px-4 rounded-lg transition"
          >
            🖨️ রুটিন প্রিন্ট করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyRoutine;