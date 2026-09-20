/**
 * Configuration file for the Birthday Gift Website.
 * Easy to customize all texts, photos, names, dates, and audio link!
 */

export const BIRTHDAY_CONFIG = {
  // Recipient & Sender Names
  recipientName: "Sayang",
  senderName: "Someone who still remembers 🤍",
  birthdayDate: "11 November 2025",
  targetDate: "2025-11-11T00:00:00",

  // Audio Music Configuration
  music: {
    url: "/music.mp3", // Place your MP3 file in public/music.mp3 or use an external URL
    title: "Romantic Melody",
  },

  // Halaman 1: Welcome Section
  welcome: {
    title: "The Beginning of Our Memories 🤍",
    subtext: "A date that became a small part of our story.",
    buttonText: "Buka Hadiah 💝",
    countdownTitle: "11 November 2025 ⏳",
  },

  // Halaman 2: Birthday Main Wish
  birthday: {
    title: "A collection of memories from 21 November 2025",
    photo: "/images/1.jpeg", // Path inside public directory
    photoCaption: "Salah satu awal dari banyak cerita yang pernah kita punya",
    message: "Semoga hari ini dipenuhi hal-hal baik, tawa, dan semua kebahagiaan yang kamu pantas dapatkan.",
    subMessage: "Terima kasih sudah hadir dan menjadi alasan dibalik senyumku setiap hari."
  },

  // Halaman 3: Memories Section (5-6 Photos)
  memoriesTitle: "Our Memories 📸",
  memoriesSubtext: "Kumpulan momen manis yang selalu bikin aku tersenyum saat mengingatnya.",
  memories: [
    {
      id: 1,
      image: "/images/2.jpeg",
      caption: "Dulu, kita cuma bermain bersama. Tapi tanpa sadar, banyak kenangan yang tercipta",
      date: "Memori Manis #1",
      rotation: "-4deg"
    },
    {
      id: 2,
      image: "/images/3.jpeg",
      caption: "Sesederhana bermain bersama, tapi kenangannya nggak sesederhana itu",
      date: "Memori Manis #2",
      rotation: "3deg"
    },
    {
      id: 3,
      image: "/images/4.jpeg",
      caption: "Dua avatar, satu dunia, dan begitu banyak cerita di dalamnya",
      date: "Memori Manis #3",
      rotation: "-2deg"
    },
    {
      id: 4,
      image: "/images/5.jpeg",
      caption: "Ada masa ketika duduk di sampingmu di dunia virtual saja sudah cukup bikin bahagia",
      date: "Memori Manis #4",
      rotation: "5deg"
    },
    {
      id: 5,
      image: "/images/6.jpeg",
      caption: "Nggak semua kenangan harus sempurna untuk tetap berarti",
      date: "Memori Manis #5",
      rotation: "-3deg"
    },
    {
      id: 6,
      image: "/images/7.jpeg",
      caption: "I'm glad I could get to know you",
      date: "Memori Manis #6",
      rotation: "-3deg"
    },
  ],

  // Halaman 4: Little Love Letter
  letter: {
    title: "A Little Letter About Our Memories 💌",
    subtext: "Tekan tombol di bawah untuk membuka surat kecil ini",
    buttonText: "Read My Letter 💗",
    envelopeLabel: "Special Delivery For You 🌸",
    content: [
      "",
      "Mungkin bagi orang lain itu hanya sebuah tanggal biasa, tapi buatku tanggal itu menyimpan banyak cerita. Dari sekadar bermain, bercanda, menghabiskan waktu bersama, sampai menciptakan momen-momen kecil yang akhirnya menjadi kenangan.",
      "Sekarang mungkin semuanya sudah menjadi bagian dari masa lalu. Tapi aku tetap bersyukur pernah mengenalmu dan pernah punya cerita seperti ini bersamamu.",
      "Terima kasih untuk semua waktu, tawa, perhatian, dan momen sederhana yang pernah kita bagi. Mungkin kita nggak tahu akan sampai di mana cerita kita, tapi setidaknya kita pernah punya sesuatu yang indah untuk dikenang.Some memories don't need to come back. They just need to be remembered",

    ]
  },

  // Ending Section
  ending: {
    title: "Stay my favorite person",
    subtext: "",
    buttonText: "Play Again ♡"
  }
};
