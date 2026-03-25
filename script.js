// Script simples para interatividade básica no site de vendas VIP
document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.btn');

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            const vipName = card.querySelector('h3').innerText;
            const price = card.querySelector('.price').innerText;

            console.log(`Usuário clicou para comprar: ${vipName} por ${price}`);
            // Aqui, o redirecionamento ocorre naturalmente pelo atributo 'href' no HTML
        });
    });

    // Animação de entrada dos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `all 0.5s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});
