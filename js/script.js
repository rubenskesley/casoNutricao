/**
 * js/script.js - Versão 3.0 (Troca Instantânea de Conteúdo)
 * Ao clicar na timeline, a tela direita muda o conteúdo instantaneamente (sem rolagem da tela principal).
 */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Seletores dos elementos chave
    const timelineItems = document.querySelectorAll('.timeline li');
    const contentStops = document.querySelectorAll('.content-stop');

    /**
     * Função que troca o conteúdo visível: esconde todos e mostra o alvo.
     * @param {string} targetId - O ID da seção de conteúdo alvo (ex: 'stop-1').
     */
    function showContentStop(targetId) {
        const targetStop = document.getElementById(targetId);

        if (targetStop) {
            // 1. Esconde TODAS as seções de conteúdo
            contentStops.forEach(stop => {
                stop.classList.remove('active');
            });

            // 2. Mostra a seção de conteúdo alvo
            targetStop.classList.add('active');
            
            // 3. ATIVAÇÃO VISUAL na timeline
            timelineItems.forEach(item => item.classList.remove('active'));
            const activeTimelineItem = document.querySelector(`.timeline li[data-target="${targetId}"]`);
            if (activeTimelineItem) {
                activeTimelineItem.classList.add('active');
            }
        }
    }

    // 4. Adiciona Event Listener de clique (Gatilho da Troca de Conteúdo)
    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            showContentStop(targetId);
        });
    });

    // 5. Inicializa: Garante que o primeiro stop esteja visível e ativo ao carregar.
    showContentStop('stop-1');
});