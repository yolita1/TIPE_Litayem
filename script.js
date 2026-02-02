const points = document.querySelectorAll('.point');
const tooltip = document.getElementById('tooltip');

points.forEach(point => {
  point.addEventListener('mouseenter', () => {
    tooltip.textContent = point.dataset.text;
    tooltip.style.display = 'block';
  });

  point.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});
