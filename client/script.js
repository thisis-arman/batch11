document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("successModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

 const batchmates = [
  "Sabera Islam", "Rejiya Akter", "Usamong Marma", "Mohammad Arman Hossen", "Shaki Mukta",
  "Ponkos Debnath", "Joydeb Das", "Al-Amin", "Asmaul Hosna Jerin", "Nadiatul Mariam",
  "Azizul Hakim", "Sudipto Roy", "Ahsan Ullah Murad", "Umme Anjuman", "Kohinur Akter",
  "Priya Saha", "Md. Omar Faruq Mahafuz", "Ankur Kanti Dev", "Tania Sultana", "Md. Sohel",
  "Md. Hakim", "Md. Bakhtiar", "Mohin Uddin", "Rudra Nandy", "Md. Shakhawat Hossen",
  "Mohammed Osman", "Anamika Dey", "Mahin Hossin Rahat", "Reya Dey", "Md. Saif",
  "Md. Emarath Shahrear Mahi", "Jahedul Islam", "Suriaya Nowros", "Emon Das", "Fatema Tuz Tahera",
  "Tanjid Hasan Saem", "Promi Guha", "Atul Prashad Mondal", "Nayan Dev", "Md. Nuralam",
  "Yeasmin Akther", "Mohammad Armanul Haque", "Md. Masum", "Reyon Dey", "Nasrin Jahan Hera",
  "Sumaya Sultana Rafi", "Jannatul Aima", "Dipa Biswas", "Md. Shakib", "Md. Fahim",
  "Rami Dey", "Somia Habib", "Rokibul Kabir", "Joy Mazumder", "Nahim Uddin Azad",
  "Depash Sen Gupta", "Md. Arif Bin Solaman", "Novel Dev", "Nadia Islam",
  "Wahida Khanom Resma", "Aparna Rani Nathi", "Avi Das", "Uichinu Marma", "Akash Dhar",
  "Aungsa Marma", "Mohammad Sayem Miunna", "Syeda Bibi Marium Iqra", "Minhajul Abedin Emon",
  "Md. Shakil", "Promiz Das Niloy", "Mohammad Asraful Islam Sowrav", "Md. Sakib Uddin",
  "Nusrat Jahan Any", "Md. Ibrahim", "Sufratun Nisa Anita", "Md. Nazrul Islam", "Abdul Mozid",
  "Sotun Barua", "Md. Shariful Islam", "Md. Yusuf Mia", "Md. Arman Uddin", "Sachingla Marma",
  "Uzzal Tripura", "Sourav Barua Bappi", "Md. Nijam Uddin", "Anik Dey", "Tandra Majumdar",
  "Joya Sri Dey", "Monirul Islam", "Korban Ali", "Md. Sakib",
  "KORBAN ALI", "MD. SAKIB", "SAZIA AKTER", "MIA RIAD KHAN DIPU", "ROYEL KANTI NATH",
  "SOMBAIYA TRIPURA", "SETU BARUA", "SHUVO DATTA", "MD. RAKIB UDDIN", "HERO TANCHANGYA",
  "MONGSAU MARMA", "SATWAI CHING MARMA", "ATASHE BANIK", "MD. ATAUR RAHAMAN", "PRIYA SHIL",
  "NASRIN AKTER", "SHAHRIAR ALAM", "ASMA KHANOM", "EMON KUMAR NATH", "MD FARDIN AHSSAN",
  "SAMBU DEB NATH", "ANTU DEVNATH", "JOYANTA DAS", "BELAYAT HOSSEN", "ATUMA MARMA",
  "MD. HOSSAIN RAIHAN", "NILOY BARUA"
];

const namesWall = document.getElementById('names-wall');

if(namesWall) {
  batchmates.forEach(name => {
    const badge = document.createElement('div');
    badge.className = "px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm md:text-base text-neutral-300 hover:text-gold-400 hover:border-gold-500/50 hover:bg-gold-500/5 transition-all duration-300 cursor-default hover:-translate-y-1 shadow-sm";
    badge.innerText = name;
    namesWall.appendChild(badge);
  });
}

  // ১. কাউন্টডাউন টাইমার লজিক
  const targetDate = new Date("June 10, 2026 10:00:00").getTime();

  const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // সময় গণনা
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // HTML-এ আউটপুট দেখানো (Error হ্যান্ডলিং সহ)
    if (document.getElementById("days")) {
      document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
      document.getElementById("hours").innerHTML = hours.toString().padStart(2, "0");
      document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
    }

    // কাউন্টডাউন শেষ হলে
    if (distance < 0) {
      clearInterval(countdown);
      const ids = ["days", "hours", "minutes", "seconds"];
      ids.forEach(id => {
        if (document.getElementById(id)) document.getElementById(id).innerHTML = "00";
      });
    }
  }, 1000);

  // ২. মোডাল লজিক (যদি ভবিষ্যতে অন্য কোনো বাটন দিয়ে সাকসেস দেখাতে চান)
  function closeModal() {
    if (!modal) return;
    const modalContent = modal.querySelector(".modal-content");
    modalContent.classList.remove("scale-100");
    modalContent.classList.add("scale-95");

    setTimeout(() => {
      modal.classList.remove("opacity-100");
      modal.classList.add("opacity-0", "pointer-events-none");
      document.body.style.overflow = ""; 
    }, 150);
  }

  if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
  
  const modalOverlay = modal?.querySelector(".modal-overlay");
  if (modalOverlay) modalOverlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("opacity-100")) {
      closeModal();
    }
  });
});