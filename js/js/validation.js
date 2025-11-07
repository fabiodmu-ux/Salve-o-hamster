// js/validation.js

const contactFormId = 'contactForm';

/**
 * Função auxiliar para exibir mensagens de erro no DOM.
 * @param {string} fieldName - Atributo 'name' do campo do formulário (e.g., 'email').
 * @param {string} message - Mensagem de erro a ser exibida.
 */
const displayError = (fieldName, message) => {
    const fieldElement = document.querySelector(`[name="${fieldName}"]`);
    if (!fieldElement) return;
    
    // Procura o próximo elemento com a classe .error-message
    let errorElement = fieldElement.nextElementSibling;
    while(errorElement && !errorElement.classList.contains('error-message')) {
        errorElement = errorElement.nextElementSibling;
    }
    
    if (errorElement) {
        errorElement.textContent = message;
    }
    // Destaca a borda do campo
    fieldElement.style.borderColor = '#E74C3C'; 
};

/**
 * Função auxiliar para limpar mensagens de erro e destaques.
 * @param {string} fieldName - Atributo 'name' do campo do formulário.
 */
const clearError = (fieldName) => {
    const fieldElement = document.querySelector(`[name="${fieldName}"]`);
    if (!fieldElement) return;
    
    let errorElement = fieldElement.nextElementSibling;
    while(errorElement && !errorElement.classList.contains('error-message')) {
        errorElement = errorElement.nextElementSibling;
    }
    
    if (errorElement) {
        errorElement.textContent = '';
    }
    // Remove o destaque da borda
    fieldElement.style.borderColor = ''; 
};

/**
 * Validação principal do formulário.
 * @param {Event} e - Evento de submissão.
 */
const handleFormSubmission = (e) => {
    e.preventDefault();

    const form = document.getElementById(contactFormId);
    if (!form) return;

    let isValid = true;
    const feedback = document.getElementById('form-feedback');
    if(feedback) feedback.textContent = ''; 

    // --- 1. Validação do Nome (mínimo 5 caracteres)
    const nome = form.querySelector('[name="nome"]').value.trim();
    clearError('nome');
    if (nome.length < 5) {
        displayError('nome', 'O nome deve ter pelo menos 5 caracteres.');
        isValid = false;
    }

    // --- 2. Validação do Email (Regex básico)
    const email = form.querySelector('[name="email"]').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    clearError('email');
    if (!emailRegex.test(email)) {
        displayError('email', 'Por favor, insira um endereço de e-mail válido.');
        isValid = false;
    }
    
    // --- 3. Validação da Mensagem (mínimo 10 caracteres)
    const mensagem = form.querySelector('[name="mensagem"]').value.trim();
    clearError('mensagem');
    if (mensagem.length < 10) {
        displayError('mensagem', 'A mensagem é muito curta. Mínimo de 10 caracteres.');
        isValid = false;
    }

    // Feedback Final ao Usuário
    if (feedback) {
        if (isValid) {
            feedback.textContent = '✅ Mensagem enviada com sucesso! Agradecemos o contato.';
            feedback.style.color = '#2ECC71'; // Verde para sucesso
            form.reset(); 
        } else {
            feedback.textContent = '❌ Por favor, corrija os campos destacados para continuar.';
            feedback.style.color = '#E74C3C'; // Vermelho para erro
        }
    }
};

// Inicializa a validação quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById(contactFormId);
    if (form) {
        form.addEventListener('submit', handleFormSubmission);
    }
});
