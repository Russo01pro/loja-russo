// Script para a loja Russo - Mini Rp
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('checkoutModal');
    const closeBtn = document.querySelector('.close');
    const buyButtons = document.querySelectorAll('.btn-buy');
    const nextStepBtn = document.querySelector('.next-step');
    const finishBuyBtn = document.querySelector('.finish-buy');
    
    const steps = document.querySelectorAll('.step');
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    const pixArea = document.getElementById('pixArea');
    const cardArea = document.getElementById('cardArea');

    let currentStep = 0;

    // Abrir Modal
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productName = button.getAttribute('data-product');
            document.getElementById('modalProductName').innerText = productName;
            modal.style.display = 'block';
            showStep(0);
        });
    });

    // Fechar Modal
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = 'none';
    };

    function showStep(n) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === n);
        });
        currentStep = n;
    }

    // Avançar para Pagamento
    nextStepBtn.addEventListener('click', () => {
        const name = document.getElementById('userName').value;
        if (name.length < 3) {
            alert('Por favor, digite seu nome completo.');
            return;
        }
        showStep(1);
    });

    // Trocar forma de pagamento
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            if (radio.value === 'pix') {
                pixArea.style.display = 'block';
                cardArea.style.display = 'none';
            } else {
                pixArea.style.display = 'none';
                cardArea.style.display = 'block';
            }
        });
    });

    // Finalizar Compra
    finishBuyBtn.addEventListener('click', () => {
        const name = document.getElementById('userName').value;
        document.getElementById('confirmedName').innerText = name;
        
        // Simulação de processamento
        finishBuyBtn.innerText = 'Processando...';
        finishBuyBtn.disabled = true;

        setTimeout(() => {
            showStep(2);
            
            // COLOQUE O LINK DO MEGA AQUI ABAIXO:
            const linkDoMega = 'https://mega.nz/file/AEMnGQJL#rc7CqgNOwUQqI4YMixlqLDl_k-VPgYqAeTdHLS7SgP0'; 
            
            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = linkDoMega; 
            downloadLink.target = '_blank'; // Abre em nova aba para o Mega carregar
            
            // Inicia o download automaticamente após 1 segundo
            setTimeout(() => {
                window.open(linkDoMega, '_blank');
            }, 1000);
        }, 2000);
    });

    // Lógica simples de Troca de Fotos (Preview)
    const previewImg = document.querySelector('.preview-img');
    const dots = document.querySelectorAll('.dot');
    const images = [
        'input_file_0.png',
        'input_file_1.png',
        'input_file_2.png',
        'input_file_3.png',
        'input_file_4.png'
    ];

    // Inicializa com a primeira foto
    if (previewImg) previewImg.src = images[0];

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            // Remove active de todos
            dots.forEach(d => d.classList.remove('active'));
            // Adiciona no clicado
            dot.classList.add('active');
            // Troca a imagem (apenas se o arquivo existir)
            if(images[index]) {
                previewImg.src = images[index];
            }
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
