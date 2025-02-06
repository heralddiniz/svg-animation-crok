document.addEventListener('DOMContentLoaded', () => {
    const textContainer = document.querySelector('.text-container');
    const gradient = document.getElementById('textGradient');
    const gradientStop = document.querySelector('.gradient-stop');

    // Cores do gradiente
    const startColor = '#10b981';
    const endColor = '#404040';

    // Cache do rect para performance
    let rect = textContainer.getBoundingClientRect();
    let isHovered = false;
    let requestAnimationFrameId = null;

    // Atualizar rect no redimensionamento
    window.addEventListener('resize', () => {
        rect = textContainer.getBoundingClientRect();
    });

    // Função otimizada para atualizar o gradiente
    function updateGradient(x, y) {
        const cxPercentage = (x / rect.width) * 100;
        const cyPercentage = (y / rect.height) * 100;

        requestAnimationFrameId = requestAnimationFrame(() => {
            gradient.setAttribute('cx', `${cxPercentage}%`);
            gradient.setAttribute('cy', `${cyPercentage}%`);
        });
    }

    // Eventos do mouse com throttle
    let lastMove = 0;
    const moveThrottle = 1000 / 60; // 60fps

    textContainer.addEventListener('mouseenter', () => {
        isHovered = true;
        gradientStop.setAttribute('stop-color', startColor);
    });

    textContainer.addEventListener('mouseleave', () => {
        isHovered = false;
        gradientStop.setAttribute('stop-color', endColor);
        if (requestAnimationFrameId) {
            cancelAnimationFrame(requestAnimationFrameId);
        }
    });

    textContainer.addEventListener('mousemove', (event) => {
        if (!isHovered) return;

        const now = Date.now();
        if (now - lastMove >= moveThrottle) {
            lastMove = now;
            updateGradient(
                event.clientX - rect.left,
                event.clientY - rect.top
            );
        }
    });
});
