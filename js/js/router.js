// js/router.js
import { templates } from './templates.js';

const appContent = document.getElementById('app-content');
const navLinks = document.querySelectorAll('nav a'); // Seleciona todos os links da navegação

export const router = {
    // Mapeamento de rotas e suas funções de template
    routes: {
        'inicio': templates.inicio,
        'sobre': templates.sobre,
        'projeto': templates.projeto,
        'default': templates.inicio
    },

    loadRoute(routeName) {
        const templateFunction = this.routes[routeName] || this.routes['default'];
        
        if (appContent) {
            appContent.innerHTML = templateFunction();
        }
        
        history.pushState(null, '', `#${routeName}`);
        window.scrollTo(0, 0); 
    },

    init() {
        navLinks.forEach(link => {
            const routeName = link.getAttribute('data-route');
            if (routeName) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.loadRoute(routeName);
                });
            }
        });
        
        window.addEventListener('popstate', () => {
            const currentRoute = window.location.hash.substring(1) || 'inicio';
            this.loadRoute(currentRoute);
        });

        const initialRoute = window.location.hash.substring(1) || 'inicio';
        this.loadRoute(initialRoute);
    }
};
