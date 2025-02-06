document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('card');
    const gradientStop = document.querySelector('.gradient-stop');
    const gradient = document.getElementById('emeraldGradient');

    function updateGradient(event) {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        // Converter as coordenadas para porcentagem
        const cxPercentage = (x / rect.width) * 100 - 24;
        const cyPercentage = (y / rect.height) * 100;
        
        // Atualizar o centro do gradiente
        gradient.setAttribute('cx', `${cxPercentage}%`);
        gradient.setAttribute('cy', `${cyPercentage}%`);
    }

    card.addEventListener('mouseenter', () => {
        gradientStop.setAttribute('stop-color', '#10b981');
    });

    card.addEventListener('mouseleave', () => {
        gradientStop.setAttribute('stop-color', '#404040');
    });

    card.addEventListener('mousemove', updateGradient);
});
