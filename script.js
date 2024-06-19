document.addEventListener('DOMContentLoaded', (event) => {
    const marqueeContent = document.getElementById('marqueeContent');
    const finalContent = document.getElementById('finalContent');

    marqueeContent.addEventListener('animationend', () => {
      finalContent.classList.add('show');
    });
  });