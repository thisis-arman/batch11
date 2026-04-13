document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("successModal");
  const closeModalBtn = document.getElementById("closeModalBtn");

  // ১. কাউন্টডাউন টাইমার লজিক
  const targetDate = new Date("May 20, 2026 10:00:00").getTime();

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