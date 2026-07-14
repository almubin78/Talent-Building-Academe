// src/data/routineData.js

export const routineData = {
  shani: {
    day: "শনি",
    date: "2026-07-12",
    slots: [
      // সকালের রুটিন
      { 
        time: "০৫:০০ AM - ০৫:৩০ AM", 
        title: "পবিত্র কুরআন তিলাওয়াত ও আয়াত মুখস্থ", 
        type: "ibadah" 
      },
      { 
        time: "০৫:৩০ AM - ০৫:৪৫ AM", 
        title: "ফজরের সালাত ও দুয়া", 
        type: "ibadah" 
      },
      { 
        time: "০৫:৪৫ AM - ০৬:০০ AM", 
        title: "প্রাত্যহিক প্রস্তুতি (গোসল/ওজু, নাস্তা)", 
        type: "rest" 
      },
      { 
        time: "০৬:০০ AM - ০৭:০০ AM", 
        title: "ক্লাসের প্রস্তুতি ও ব্যাচ-১ এর জন্য নোট প্রস্তুত", 
        type: "class" 
      },
      { 
        time: "০৭:০০ AM - ০৮:০০ AM", 
        title: "ব্যাচ-১ (রসায়ন) - রাসায়নিক বন্ধন", 
        type: "class",
        batch: "Batch-1",
        subject: "রসায়ন"
      },
      { 
        time: "০৮:০০ AM - ০৯:০০ AM", 
        title: "ব্যাচ-২ (পদার্থ) - বল ও গতি", 
        type: "class",
        batch: "Batch-2",
        subject: "পদার্থ"
      },
      { 
        time: "০৯:০০ AM - ১০:০০ AM", 
        title: "ব্যাচ-৩ (রসায়ন) - এসিড, ক্ষার ও লবণ", 
        type: "class",
        batch: "Batch-3",
        subject: "রসায়ন"
      },
      { 
        time: "১০:০০ AM - ১১:২০ AM", 
        title: "স্থানীয় স্কুলে ক্লাস", 
        type: "class" 
      },
      { 
        time: "১১:২০ AM - ১২:০০ PM", 
        title: "বাসায় ফেরা ও দুপুরের খাবার", 
        type: "rest" 
      },
      { 
        time: "১২:৩০ PM - ০১:৩০ PM", 
        title: "বই পড়া (পদার্থ) - অধ্যায় ৫: তাপগতিবিদ্যা", 
        type: "book" 
      },
      { 
        time: "০১:৩০ PM - ০২:৩০ PM", 
        title: "MERN: ফ্রন্টএন্ড কম্পোনেন্ট ডিজাইন", 
        type: "webdev" 
      },
      { 
        time: "০২:৩০ PM - ০৩:০০ PM", 
        title: "জোহরের সালাত ও বিশ্রাম", 
        type: "ibadah" 
      },
      { 
        time: "০৩:০০ PM - ০৩:৩০ PM", 
        title: "বিকেলের নাস্তা ও ক্লাসের প্রস্তুতি", 
        type: "rest" 
      },
      { 
        time: "০৩:৩০ PM - ০৪:৩০ PM", 
        title: "ব্যাচ-৪ (পদার্থ) - আলো ও প্রতিফলন", 
        type: "class",
        batch: "Batch-4",
        subject: "পদার্থ"
      },
      { 
        time: "০৪:৩০ PM - ০৫:০০ PM", 
        title: "বিশ্রাম ও পরবর্তী ক্লাসের প্রস্তুতি", 
        type: "rest" 
      },
      { 
        time: "০৫:০০ PM - ০৫:৪৫ PM", 
        title: "ব্যাচ-৫ (গণিত) - বীজগণিত", 
        type: "class",
        batch: "Batch-5",
        subject: "গণিত"
      },
      { 
        time: "০৫:৪৫ PM - ০৬:৪৫ PM", 
        title: "ব্যাচ-৬ (বিজ্ঞান) - জীববিজ্ঞান", 
        type: "class",
        batch: "Batch-6",
        subject: "বিজ্ঞান"
      },
      { 
        time: "০৬:৪৫ PM - ০৭:১৫ PM", 
        title: "মাগরিব সালাত ও কুরআন তিলাওয়াত", 
        type: "ibadah" 
      },
      { 
        time: "০৭:১৫ PM - ০৮:০০ PM", 
        title: "রাতের খাবার ও বিশ্রাম", 
        type: "rest" 
      },
      { 
        time: "০৮:০০ PM - ০৯:৩০ PM", 
        title: "MERN: ডকুমেন্টেশন পড়া (Express.js)", 
        type: "webdev" 
      },
      { 
        time: "০৯:৩০ PM - ১০:০০ PM", 
        title: "ইশার সালাত ও দিনের পর্যালোচনা", 
        type: "ibadah" 
      },
      { 
        time: "১০:০০ PM - ০৫:০০ AM", 
        title: "রাতের ঘুম (৭ ঘন্টা)", 
        type: "rest" 
      },
    ]
  },
  
  robi: {
    day: "রবি",
    date: "2026-07-13",
    slots: [
      { 
        time: "০৫:০০ AM - ০৫:৩০ AM", 
        title: "পবিত্র কুরআন তিলাওয়াত ও আয়াত মুখস্থ", 
        type: "ibadah" 
      },
      { 
        time: "০৫:৩০ AM - ০৫:৪৫ AM", 
        title: "ফজরের সালাত ও দুয়া", 
        type: "ibadah" 
      },
      { 
        time: "০৫:৪৫ AM - ০৬:০০ AM", 
        title: "প্রাত্যহিক প্রস্তুতি (গোসল/ওজু, নাস্তা)", 
        type: "rest" 
      },
      { 
        time: "০৬:০০ AM - ০৭:০০ AM", 
        title: "ক্লাসের প্রস্তুতি ও ব্যাচ-১ এর জন্য নোট প্রস্তুত", 
        type: "class" 
      },
      { 
        time: "০৭:০০ AM - ০৮:০০ AM", 
        title: "ব্যাচ-১ (পদার্থ) - নিউটনের গতিসূত্র", 
        type: "class",
        batch: "Batch-1",
        subject: "পদার্থ"
      },
      { 
        time: "০৮:০০ AM - ০৯:০০ AM", 
        title: "ব্যাচ-২ (রসায়ন) - পর্যায় সারণী", 
        type: "class",
        batch: "Batch-2",
        subject: "রসায়ন"
      },
      { 
        time: "০৯:০০ AM - ১০:০০ AM", 
        title: "ব্যাচ-৩ (পদার্থ) - কাজ, ক্ষমতা ও শক্তি", 
        type: "class",
        batch: "Batch-3",
        subject: "পদার্থ"
      },
      { 
        time: "১০:০০ AM - ১১:২০ AM", 
        title: "স্থানীয় স্কুলে ক্লাস", 
        type: "class" 
      },
      { 
        time: "১১:২০ AM - ১২:০০ PM", 
        title: "বাসায় ফেরা ও দুপুরের খাবার", 
        type: "rest" 
      },
      { 
        time: "১২:৩০ PM - ০১:৩০ PM", 
        title: "শীট লেখা (রসায়ন) - রাসায়নিক বন্ধন", 
        type: "sheet" 
      },
      { 
        time: "০১:৩০ PM - ০২:৩০ PM", 
        title: "MERN: API ইন্টিগ্রেশন ও টেস্টিং", 
        type: "webdev" 
      },
      { 
        time: "০২:৩০ PM - ০৩:০০ PM", 
        title: "জোহরের সালাত ও বিশ্রাম", 
        type: "ibadah" 
      },
      { 
        time: "০৩:০০ PM - ০৩:৩০ PM", 
        title: "বিকেলের নাস্তা ও ক্লাসের প্রস্তুতি", 
        type: "rest" 
      },
      { 
        time: "০৩:৩০ PM - ০৪:৩০ PM", 
        title: "ব্যাচ-৪ (রসায়ন) - জৈব রসায়ন", 
        type: "class",
        batch: "Batch-4",
        subject: "রসায়ন"
      },
      { 
        time: "০৪:৩০ PM - ০৫:০০ PM", 
        title: "বিশ্রাম ও পরবর্তী ক্লাসের প্রস্তুতি", 
        type: "rest" 
      },
      { 
        time: "০৫:০০ PM - ০৫:৪৫ PM", 
        title: "ব্যাচ-৫ (গ্রামার) - Parts of Speech", 
        type: "class",
        batch: "Batch-5",
        subject: "গ্রামার"
      },
      { 
        time: "০৫:৪৫ PM - ০৬:৪৫ PM", 
        title: "ব্যাচ-৬ (গণিত) - জ্যামিতি", 
        type: "class",
        batch: "Batch-6",
        subject: "গণিত"
      },
      { 
        time: "০৬:৪৫ PM - ০৭:১৫ PM", 
        title: "মাগরিব সালাত ও হাদীস অধ্যয়ন", 
        type: "ibadah" 
      },
      { 
        time: "০৭:১৫ PM - ০৮:০০ PM", 
        title: "রাতের খাবার ও বিশ্রাম", 
        type: "rest" 
      },
      { 
        time: "০৮:০০ PM - ০৯:৩০ PM", 
        title: "React Hooks - গভীর প্র্যাকটিস", 
        type: "webdev" 
      },
      { 
        time: "০৯:৩০ PM - ১০:০০ PM", 
        title: "ইশার সালাত ও দিনের পর্যালোচনা", 
        type: "ibadah" 
      },
      { 
        time: "১০:০০ PM - ০৫:০০ AM", 
        title: "রাতের ঘুম (৭ ঘন্টা)", 
        type: "rest" 
      },
    ]
  },
  
  som: {
    day: "সোম",
    date: "2026-07-14",
    slots: [
      { 
        time: "০৫:০০ AM - ০৫:৩০ AM", 
        title: "পবিত্র কুরআন তিলাওয়াত ও আয়াত মুখস্থ", 
        type: "ibadah" 
      },
      { 
        time: "০৫:৩০ AM - ০৫:৪৫ AM", 
        title: "ফজরের সালাত ও দুয়া", 
        type: "ibadah" 
      },
      { 
        time: "০৫:৪৫ AM - ০৬:০০ AM", 
        title: "প্রাত্যহিক প্রস্তুতি (গোসল/ওজু, নাস্তা)", 
        type: "rest" 
      },
      { 
        time: "০৬:০০ AM - ০৭:০০ AM", 
        title: "ক্লাসের প্রস্তুতি ও ব্যাচ-১ এর জন্য নোট প্রস্তুত", 
        type: "class" 
      },
      { 
        time: "০৭:০০ AM - ০৮:০০ AM", 
        title: "ব্যাচ-১ (পদার্থ) - তাপ ও তাপমাত্রা", 
        type: "class",
        batch: "Batch-1",
        subject: "পদার্থ"
      },
      { 
        time: "০৮:০০ AM - ০৯:০০ AM", 
        title: "ব্যাচ-২ (রসায়ন) - তড়িৎ বিশ্লেষণ", 
        type: "class",
        batch: "Batch-2",
        subject: "রসায়ন"
      },
      { 
        time: "০৯:০০ AM - ১০:০০ AM", 
        title: "ব্যাচ-৩ (পদার্থ) - মহাকর্ষ", 
        type: "class",
        batch: "Batch-3",
        subject: "পদার্থ"
      },
      { 
        time: "১০:০০ AM - ১১:২০ AM", 
        title: "স্থানীয় স্কুলে ক্লাস", 
        type: "class" 
      },
      { 
        time: "১১:২০ AM - ১২:০০ PM", 
        title: "বাসায় ফেরা ও দুপুরের খাবার", 
        type: "rest" 
      },
      { 
        time: "১২:৩০ PM - ০১:৩০ PM", 
        title: "বই পড়া (রসায়ন) - জৈব রসায়ন", 
        type: "book" 
      },
      { 
        time: "০১:৩০ PM - ০২:৩০ PM", 
        title: "MERN: ডেটাবেজ মডেল ডিজাইন", 
        type: "webdev" 
      },
      { 
        time: "০২:৩০ PM - ০৩:০০ PM", 
        title: "জোহরের সালাত ও বিশ্রাম", 
        type: "ibadah" 
      },
      { 
        time: "০৩:০০ PM - ০৩:৩০ PM", 
        title: "বিকেলের নাস্তা ও ক্লাসের প্রস্তুতি", 
        type: "rest" 
      },
      { 
        time: "০৩:৩০ PM - ০৪:৩০ PM", 
        title: "ব্যাচ-৪ (পদার্থ) - শব্দ ও তরঙ্গ", 
        type: "class",
        batch: "Batch-4",
        subject: "পদার্থ"
      },
      { 
        time: "০৪:৩০ PM - ০৫:০০ PM", 
        title: "বিশ্রাম ও পরবর্তী ক্লাসের প্রস্তুতি", 
        type: "rest" 
      },
      { 
        time: "০৫:০০ PM - ০৫:৪৫ PM", 
        title: "ব্যাচ-৫ (বিজ্ঞান) - পরিবেশ বিজ্ঞান", 
        type: "class",
        batch: "Batch-5",
        subject: "বিজ্ঞান"
      },
      { 
        time: "০৫:৪৫ PM - ০৬:৪৫ PM", 
        title: "ব্যাচ-৬ (গ্রামার) - Tense", 
        type: "class",
        batch: "Batch-6",
        subject: "গ্রামার"
      },
      { 
        time: "০৬:৪৫ PM - ০৭:১৫ PM", 
        title: "মাগরিব সালাত ও কুরআন তিলাওয়াত", 
        type: "ibadah" 
      },
      { 
        time: "০৭:১৫ PM - ০৮:০০ PM", 
        title: "রাতের খাবার ও বিশ্রাম", 
        type: "rest" 
      },
      { 
        time: "০৮:০০ PM - ০৯:৩০ PM", 
        title: "JavaScript Async/Await প্র্যাকটিস", 
        type: "webdev" 
      },
      { 
        time: "০৯:৩০ PM - ১০:০০ PM", 
        title: "ইশার সালাত ও দিনের পর্যালোচনা", 
        type: "ibadah" 
      },
      { 
        time: "১০:০০ PM - ০৫:০০ AM", 
        title: "রাতের ঘুম (৭ ঘন্টা)", 
        type: "rest" 
      },
    ]
  },
  
  mongol: {
    day: "মঙ্গল",
    date: "2026-07-15",
    slots: [
      { 
        time: "০৫:০০ AM - ০৫:৩০ AM", 
        title: "পবিত্র কুরআন তিলাওয়াত ও আয়াত মুখস্থ", 
        type: "ibadah" 
      },
      { 
        time: "০৫:৩০ AM - ০৫:৪৫ AM", 
        title: "ফজরের সালাত ও দুয়া", 
        type: "ibadah" 
      },
      { 
        time: "০৫:৪৫ AM - ০৬:০০ AM", 
        title: "প্রাত্যহিক প্রস্তুতি (গোসল/ওজু, নাস্তা)", 
        type: "rest" 
      },
      { 
        time: "০৬:০০ AM - ০৭:০০ AM", 
        title: "ক্লাসের প্রস্তুতি ও ব্যাচ-১ এর জন্য নোট প্রস্তুত", 
        type: "class" 
      },
      { 
        time: "০৭:০০ AM - ০৮:০০ AM", 
        title: "ব্যাচ-১ (রসায়ন) - দ্রবণ ও ঘনমাত্রা", 
        type: "class",
        batch: "Batch-1",
        subject: "রসায়ন"
      },
      { 
        time: "০৮:০০ AM - ০৯:০০ AM", 
        title: "ব্যাচ-২ (পদার্থ) - তরলের চাপ", 
        type: "class",
        batch: "Batch-2",
        subject: "পদার্থ"
      },
      { 
        time: "০৯:০০ AM - ১০:০০ AM", 
        title: "ব্যাচ-৩ (রসায়ন) - গ্যাসের আচরণ", 
        type: "class",
        batch: "Batch-3",
        subject: "রসায়ন"
      },
      { 
        time: "১০:০০ AM - ১১:২০ AM", 
        title: "স্থানীয় স্কুলে ক্লাস (ছুটি)", 
        type: "rest" 
      },
      { 
        time: "১১:২০ AM - ১২:০০ PM", 
        title: "বাসায় ফেরা ও দুপুরের খাবার", 
        type: "rest" 
      },
      { 
        time: "১২:৩০ PM - ০১:৩০ PM", 
        title: "শীট লেখা (পদার্থ) - গতিবিদ্যা", 
        type: "sheet" 
      },
      { 
        time: "০১:৩০ PM - ০২:৩০ PM", 
        title: "MERN: ব্যাকএন্ড রাউট ও কন্ট্রোলার", 
        type: "webdev" 
      },
      { 
        time: "০২:৩০ PM - ০৩:০০ PM", 
        title: "জোহরের সালাত ও বিশ্রাম", 
        type: "ibadah" 
      },
      { 
        time: "০৩:০০ PM - ০৩:৩০ PM", 
        title: "বিকেলের নাস্তা ও ক্লাসের প্রস্তুতি", 
        type: "rest" 
      },
      { 
        time: "০৩:৩০ PM - ০৪:৩০ PM", 
        title: "ব্যাচ-৪ (পদার্থ) - চৌম্বকত্ব", 
        type: "class",
        batch: "Batch-4",
        subject: "পদার্থ"
      },
      { 
        time: "০৪:৩০ PM - ০৫:০০ PM", 
        title: "বিশ্রাম ও পরবর্তী ক্লাসের প্রস্তুতি", 
        type: "rest" 
      },
      { 
        time: "০৫:০০ PM - ০৫:৪৫ PM", 
        title: "ব্যাচ-৫ (গণিত) - অনুপাত ও সমানুপাত", 
        type: "class",
        batch: "Batch-5",
        subject: "গণিত"
      },
      { 
        time: "০৫:৪৫ PM - ০৬:৪৫ PM", 
        title: "ব্যাচ-৬ (বিজ্ঞান) - রক্ত সঞ্চালন", 
        type: "class",
        batch: "Batch-6",
        subject: "বিজ্ঞান"
      },
      { 
        time: "০৬:৪৫ PM - ০৭:১৫ PM", 
        title: "মাগরিব সালাত ও হাদীস অধ্যয়ন", 
        type: "ibadah" 
      },
      { 
        time: "০৭:১৫ PM - ০৮:০০ PM", 
        title: "রাতের খাবার ও বিশ্রাম", 
        type: "rest" 
      },
      { 
        time: "০৮:০০ PM - ০৯:৩০ PM", 
        title: "JWT অথেনটিকেশন প্র্যাকটিস", 
        type: "webdev" 
      },
      { 
        time: "০৯:৩০ PM - ১০:০০ PM", 
        title: "ইশার সালাত ও দিনের পর্যালোচনা", 
        type: "ibadah" 
      },
      { 
        time: "১০:০০ PM - ০৫:০০ AM", 
        title: "রাতের ঘুম (৭ ঘন্টা)", 
        type: "rest" 
      },
    ]
  },
  
  budh: {
    day: "বুধ",
    date: "2026-07-16",
    slots: [
      { 
        time: "০৫:০০ AM - ০৫:৩০ AM", 
        title: "পবিত্র কুরআন তিলাওয়াত ও আয়াত মুখস্থ", 
        type: "ibadah" 
      },
      { 
        time: "০৫:৩০ AM - ০৫:৪৫ AM", 
        title: "ফজরের সালাত ও দুয়া", 
        type: "ibadah" 
      },
      { 
        time: "০৫:৪৫ AM - ০৬:০০ AM", 
        title: "প্রাত্যহিক প্রস্তুতি (গোসল/ওজু, নাস্তা)", 
        type: "rest" 
      },
      { 
        time: "০৬:০০ AM - ০৭:০০ AM", 
        title: "ক্লাসের প্রস্তুতি ও ব্যাচ-১ এর জন্য নোট প্রস্তুত", 
        type: "class" 
      },
      { 
        time: "০৭:০০ AM - ০৮:০০ AM", 
        title: "ব্যাচ-১ (পদার্থ) - চল তড়িৎ", 
        type: "class",
        batch: "Batch-1",
        subject: "পদার্থ"
      },
      { 
        time: "০৮:০০ AM - ০৯:০০ AM", 
        title: "ব্যাচ-২ (রসায়ন) - রাসায়নিক বিক্রিয়া", 
        type: "class",
        batch: "Batch-2",
        subject: "রসায়ন"
      },
      { 
        time: "০৯:০০ AM - ১০:০০ AM", 
        title: "ব্যাচ-৩ (পদার্থ) - স্থির তড়িৎ", 
        type: "class",
        batch: "Batch-3",
        subject: "পদার্থ"
      },
      { 
        time: "১০:০০ AM - ১১:২০ AM", 
        title: "স্থানীয় স্কুলে ক্লাস", 
        type: "class" 
      },
      { 
        time: "১১:২০ AM - ১২:০০ PM", 
        title: "বাসায় ফেরা ও দুপুরের খাবার", 
        type: "rest" 
      },
      { 
        time: "১২:৩০ PM - ০১:৩০ PM", 
        title: "বই পড়া (পদার্থ+রসায়ন) - সূত্র বিশ্লেষণ", 
        type: "book" 
      },
      { 
        time: "০১:৩০ PM - ০২:৩০ PM", 
        title: "MERN: এরর হ্যান্ডলিং মেকানিজম", 
        type: "webdev" 
      },
      { 
        time: "০২:৩০ PM - ০৩:০০ PM", 
        title: "জোহরের সালাত ও বিশ্রাম", 
        type: "ibadah" 
      },
      { 
        time: "০৩:০০ PM - ০৩:৩০ PM", 
        title: "বিকেলের নাস্তা ও ক্লাসের প্রস্তুতি", 
        type: "rest" 
      },
      { 
        time: "০৩:৩০ PM - ০৪:৩০ PM", 
        title: "ব্যাচ-৪ (রসায়ন) - খনিজ ও ধাতু", 
        type: "class",
        batch: "Batch-4",
        subject: "রসায়ন"
      },
      { 
        time: "০৪:৩০ PM - ০৫:০০ PM", 
        title: "বিশ্রাম ও পরবর্তী ক্লাসের প্রস্তুতি", 
        type: "rest" 
      },
      { 
        time: "০৫:০০ PM - ০৫:৪৫ PM", 
        title: "ব্যাচ-৫ (গ্রামার) - Sentence Structure", 
        type: "class",
        batch: "Batch-5",
        subject: "গ্রামার"
      },
      { 
        time: "০৫:৪৫ PM - ০৬:৪৫ PM", 
        title: "ব্যাচ-৬ (গণিত) - ত্রিকোণমিতি", 
        type: "class",
        batch: "Batch-6",
        subject: "গণিত"
      },
      { 
        time: "০৬:৪৫ PM - ০৭:১৫ PM", 
        title: "মাগরিব সালাত ও কুরআন তিলাওয়াত", 
        type: "ibadah" 
      },
      { 
        time: "০৭:১৫ PM - ০৮:০০ PM", 
        title: "রাতের খাবার ও বিশ্রাম", 
        type: "rest" 
      },
      { 
        time: "০৮:০০ PM - ০৯:৩০ PM", 
        title: "MERN Best Practices পড়া", 
        type: "webdev" 
      },
      { 
        time: "০৯:৩০ PM - ১০:০০ PM", 
        title: "ইশার সালাত ও দিনের পর্যালোচনা", 
        type: "ibadah" 
      },
      { 
        time: "১০:০০ PM - ০৫:০০ AM", 
        title: "রাতের ঘুম (৭ ঘন্টা)", 
        type: "rest" 
      },
    ]
  },
  
  bruhospoti: {
    day: "বৃহস্পতি",
    date: "2026-07-17",
    slots: [
      { 
        time: "০৫:০০ AM - ০৫:৩০ AM", 
        title: "পবিত্র কুরআন তিলাওয়াত ও আয়াত মুখস্থ", 
        type: "ibadah" 
      },
      { 
        time: "০৫:৩০ AM - ০৫:৪৫ AM", 
        title: "ফজরের সালাত ও দুয়া", 
        type: "ibadah" 
      },
      { 
        time: "০৫:৪৫ AM - ০৬:০০ AM", 
        title: "প্রাত্যহিক প্রস্তুতি (গোসল/ওজু, নাস্তা)", 
        type: "rest" 
      },
      { 
        time: "০৬:০০ AM - ০৭:০০ AM", 
        title: "ক্লাসের প্রস্তুতি ও ব্যাচ-১ এর জন্য নোট প্রস্তুত", 
        type: "class" 
      },
      { 
        time: "০৭:০০ AM - ০৮:০০ AM", 
        title: "ব্যাচ-১ (রসায়ন) - তাপ রসায়ন", 
        type: "class",
        batch: "Batch-1",
        subject: "রসায়ন"
      },
      { 
        time: "০৮:০০ AM - ০৯:০০ AM", 
        title: "ব্যাচ-২ (পদার্থ) - কোয়ান্টাম তত্ত্ব", 
        type: "class",
        batch: "Batch-2",
        subject: "পদার্থ"
      },
      { 
        time: "০৯:০০ AM - ১০:০০ AM", 
        title: "ব্যাচ-৩ (রসায়ন) - জৈব রাসায়নিক শিল্প", 
        type: "class",
        batch: "Batch-3",
        subject: "রসায়ন"
      },
      { 
        time: "১০:০০ AM - ১১:২০ AM", 
        title: "স্থানীয় স্কুলে ক্লাস", 
        type: "class" 
      },
      { 
        time: "১১:২০ AM - ১২:০০ PM", 
        title: "বাসায় ফেরা ও দুপুরের খাবার", 
        type: "rest" 
      },
      { 
        time: "১২:৩০ PM - ০১:৩০ PM", 
        title: "শীট লেখা (মিক্স) - কুইজ শীট", 
        type: "sheet" 
      },
      { 
        time: "০১:৩০ PM - ০২:৩০ PM", 
        title: "MERN: UI রিফাইনমেন্ট", 
        type: "webdev" 
      },
      { 
        time: "০২:৩০ PM - ০৩:০০ PM", 
        title: "জোহরের সালাত ও বিশ্রাম", 
        type: "ibadah" 
      },
      { 
        time: "০৩:০০ PM - ০৩:৩০ PM", 
        title: "বিকেলের নাস্তা ও ক্লাসের প্রস্তুতি", 
        type: "rest" 
      },
      { 
        time: "০৩:৩০ PM - ০৪:৩০ PM", 
        title: "ব্যাচ-৪ (পদার্থ) - পারমাণবিক পদার্থবিজ্ঞান", 
        type: "class",
        batch: "Batch-4",
        subject: "পদার্থ"
      },
      { 
        time: "০৪:৩০ PM - ০৫:০০ PM", 
        title: "বিশ্রাম ও পরবর্তী ক্লাসের প্রস্তুতি", 
        type: "rest" 
      },
      { 
        time: "০৫:০০ PM - ০৫:৪৫ PM", 
        title: "ব্যাচ-৫ (বিজ্ঞান) - রোগ প্রতিরোধ", 
        type: "class",
        batch: "Batch-5",
        subject: "বিজ্ঞান"
      },
      { 
        time: "০৫:৪৫ PM - ০৬:৪৫ PM", 
        title: "ব্যাচ-৬ (গ্রামার) - Narration", 
        type: "class",
        batch: "Batch-6",
        subject: "গ্রামার"
      },
      { 
        time: "০৬:৪৫ PM - ০৭:১৫ PM", 
        title: "মাগরিব সালাত ও হাদীস অধ্যয়ন", 
        type: "ibadah" 
      },
      { 
        time: "০৭:১৫ PM - ০৮:০০ PM", 
        title: "রাতের খাবার ও বিশ্রাম", 
        type: "rest" 
      },
      { 
        time: "০৮:০০ PM - ০৯:৩০ PM", 
        title: "ফর্ম হ্যান্ডলিং প্র্যাকটিস", 
        type: "webdev" 
      },
      { 
        time: "০৯:৩০ PM - ১০:০০ PM", 
        title: "ইশার সালাত ও দিনের পর্যালোচনা", 
        type: "ibadah" 
      },
      { 
        time: "১০:০০ PM - ০৫:০০ AM", 
        title: "রাতের ঘুম (৭ ঘন্টা)", 
        type: "rest" 
      },
    ]
  },
  
  shukro: {
    day: "শুক্রবার (ছুটির দিন)",
    date: "2026-07-18",
    slots: [
      { 
        time: "০৫:০০ AM - ০৫:৩০ AM", 
        title: "পবিত্র কুরআন তিলাওয়াত ও আয়াত মুখস্থ", 
        type: "ibadah" 
      },
      { 
        time: "০৫:৩০ AM - ০৫:৪৫ AM", 
        title: "ফজরের সালাত ও দুয়া", 
        type: "ibadah" 
      },
      { 
        time: "০৫:৪৫ AM - ০৭:০০ AM", 
        title: "বিশ্রাম ও পারিবারিক সময়", 
        type: "rest" 
      },
      { 
        time: "০৭:০০ AM - ০৮:০০ AM", 
        title: "সাপ্তাহিক রিভিউ ও প্ল্যানিং", 
        type: "book" 
      },
      { 
        time: "০৮:০০ AM - ০৯:০০ AM", 
        title: "হালকা ক্লাস (ঐচ্ছিক)", 
        type: "class" 
      },
      { 
        time: "০৯:০০ AM - ১০:০০ AM", 
        title: "বিশ্রাম ও পারিবারিক সময়", 
        type: "rest" 
      },
      { 
        time: "১০:০০ AM - ১১:২০ AM", 
        title: "হালকা ক্লাস (ঐচ্ছিক)", 
        type: "class" 
      },
      { 
        time: "১১:২০ AM - ১২:০০ PM", 
        title: "দুপুরের খাবার", 
        type: "rest" 
      },
      { 
        time: "১২:৩০ PM - ০১:৩০ PM", 
        title: "ভুল-ত্রুটি সংশোধন", 
        type: "sheet" 
      },
      { 
        time: "০১:৩০ PM - ০২:৩০ PM", 
        title: "টিউটোরিয়াল দেখা (MERN)", 
        type: "webdev" 
      },
      { 
        time: "০২:৩০ PM - ০৩:০০ PM", 
        title: "জোহরের সালাত ও বিশ্রাম", 
        type: "ibadah" 
      },
      { 
        time: "০৩:০০ PM - ০৩:৩০ PM", 
        title: "বিকেলের নাস্তা ও ক্লাসের প্রস্তুতি", 
        type: "rest" 
      },
      { 
        time: "০৩:৩০ PM - ০৪:৩০ PM", 
        title: "ব্যাচ-৪ (পদার্থ) - রিভিশন ক্লাস", 
        type: "class",
        batch: "Batch-4",
        subject: "পদার্থ"
      },
      { 
        time: "০৪:৩০ PM - ০৫:০০ PM", 
        title: "বিশ্রাম ও পরবর্তী ক্লাসের প্রস্তুতি", 
        type: "rest" 
      },
      { 
        time: "০৫:০০ PM - ০৫:৪৫ PM", 
        title: "ব্যাচ-৫ (গণিত) - রিভিশন", 
        type: "class",
        batch: "Batch-5",
        subject: "গণিত"
      },
      { 
        time: "০৫:৪৫ PM - ০৬:৪৫ PM", 
        title: "ব্যাচ-৬ (বিজ্ঞান) - রিভিশন", 
        type: "class",
        batch: "Batch-6",
        subject: "বিজ্ঞান"
      },
      { 
        time: "০৬:৪৫ PM - ০৭:১৫ PM", 
        title: "মাগরিব সালাত ও কুরআন তিলাওয়াত", 
        type: "ibadah" 
      },
      { 
        time: "০৭:১৫ PM - ০৮:০০ PM", 
        title: "রাতের খাবার ও বিশ্রাম", 
        type: "rest" 
      },
      { 
        time: "০৮:০০ PM - ০৯:৩০ PM", 
        title: "বিনোদন ও পরিবারের সাথে সময়", 
        type: "rest" 
      },
      { 
        time: "০৯:৩০ PM - ১০:০০ PM", 
        title: "ইশার সালাত ও দিনের পর্যালোচনা", 
        type: "ibadah" 
      },
      { 
        time: "১০:০০ PM - ০৫:০০ AM", 
        title: "রাতের ঘুম (৭ ঘন্টা)", 
        type: "rest" 
      },
    ]
  }
};

// বাংলা দিনের নামের সাথে ইংলিশ কী ম্যাপিং
export const dayMap = {
  shani: "শনি",
  robi: "রবি",
  som: "সোম",
  mongol: "মঙ্গল",
  budh: "বুধ",
  bruhospoti: "বৃহস্পতি",
  shukro: "শুক্রবার"
};

export const dayKeys = ["shani", "robi", "som", "mongol", "budh", "bruhospoti", "shukro"];

// সাপ্তাহিক পরিসংখ্যানের জন্য হেল্পার ফাংশন
export const getWeeklyStats = () => {
  const stats = {
    totalTasks: 0,
    completedTasks: 0,
    classHours: 0,
    webDevHours: 0,
    ibadahTasks: 0,
    bookSheetTasks: 0,
    batchDetails: {
      'Batch-1': 0,
      'Batch-2': 0,
      'Batch-3': 0,
      'Batch-4': 0,
      'Batch-5': 0,
      'Batch-6': 0
    }
  };

  Object.keys(routineData).forEach(day => {
    const slots = routineData[day].slots;
    stats.totalTasks += slots.length;
    
    slots.forEach(slot => {
      if (slot.type === 'class') stats.classHours += 1;
      if (slot.type === 'webdev') stats.webDevHours += 1;
      if (slot.type === 'ibadah') stats.ibadahTasks += 1;
      if (slot.type === 'book' || slot.type === 'sheet') stats.bookSheetTasks += 1;
      
      // ব্যাচ কাউন্ট
      if (slot.batch) {
        stats.batchDetails[slot.batch] = (stats.batchDetails[slot.batch] || 0) + 1;
      }
    });
  });

  return stats;
};

// ব্যাচের বিষয় স্ট্যাটাস
export const getBatchSubjects = () => {
  const subjects = {
    'Batch-1': { subject: 'রসায়ন/পদার্থ', students: 'মাধ্যমিক' },
    'Batch-2': { subject: 'পদার্থ/রসায়ন', students: 'মাধ্যমিক' },
    'Batch-3': { subject: 'রসায়ন/পদার্থ', students: 'মাধ্যমিক' },
    'Batch-4': { subject: 'পদার্থ/রসায়ন', students: 'মাধ্যমিক' },
    'Batch-5': { subject: 'গণিত/বিজ্ঞান/গ্রামার', students: 'বিভিন্ন ক্লাস' },
    'Batch-6': { subject: 'বিজ্ঞান/গ্রামার/গণিত', students: 'বিভিন্ন ক্লাস' }
  };
  return subjects;
};