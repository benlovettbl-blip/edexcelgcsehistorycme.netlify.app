// --- Application Entry Point ---
window.addEventListener('DOMContentLoaded', () => {
  initData();
  renderSidebarNav();
  updateGlobalStats();
  bindEvents();
  
  // Bind video modal close events
  const closeBtn = document.getElementById('video-modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeVideoModal);
  }
  const modalOverlay = document.getElementById('video-modal-overlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeVideoModal();
      }
    });
  }
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.style.display === 'flex') {
      closeVideoModal();
    }
  });
  
  // Render default Dashboard view
  switchView('dashboard');
});