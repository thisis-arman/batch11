document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('regForm');
    const modal = document.getElementById('successModal');
    const modalOverlay = modal.querySelector('.modal-overlay');
    const modalContent = modal.querySelector('.modal-content');
    const closeModalBtn = document.getElementById('closeModalBtn');
  
    function openModal() {
      modal.classList.remove('opacity-0', 'pointer-events-none');
      modal.classList.add('opacity-100');
      // Add slight delay for the scale effect for smoothness
      setTimeout(() => {
          modalContent.classList.remove('scale-95');
          modalContent.classList.add('scale-100');
      }, 50);
      document.body.style.overflow = 'hidden'; // Prevent scrolling background
    }
  
    function closeModal() {
       modalContent.classList.remove('scale-100');
       modalContent.classList.add('scale-95');
       
       setTimeout(() => {
          modal.classList.remove('opacity-100');
          modal.classList.add('opacity-0', 'pointer-events-none');
          document.body.style.overflow = ''; // Restore scrolling
       }, 150); // Wait for scale down animation to finish
    }
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Here you would usually send data to a backend server
      console.log("Form submitted!"); 
      
      openModal();
      form.reset();
    });
  
    // Close modal clicking button or overlay
    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
  
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('opacity-100')) {
            closeModal();
        }
    });
  });