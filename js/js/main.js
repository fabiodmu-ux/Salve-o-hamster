// js/main.js
import { router } from './router.js';

// Inicialização de todas as funcionalidades da página.
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa o roteador do SPA
    if (document.getElementById('app-content')) {
        router.init();
    }
    // Não incluímos o menu hambúrguer aqui, pois ele não estava no index.html fornecido.
    // Se o menu for necessário, a lógica deve ser adicionada neste arquivo.
});
