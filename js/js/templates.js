// js/templates.js
/**
 * Módulo para gerar templates HTML para o SPA.
 * Retorna o HTML em formato de string.
 */
export const templates = {
    // Rota 'inicio' (Conteúdo original do index.html)
    inicio: () => `
        <div class="section">    <h2>Nossa História</h2>    <p>Em uma manhã de outono, durante uma caminhada por uma trilha arborizada, nossa fundadora encontrou uma pequena caixa abandonada entre as folhas. Dentro dela, dois hamsters assustados tentavam se esconder do frio. A cena foi comovente — e transformadora.</p>    <p>Foi ali, naquele instante, que nasceu a ideia da ONG <strong>Defenda o Hamster</strong>. Desde então, nossa missão tem sido clara: proteger, cuidar e dar voz aos pequenos roedores que muitas vezes são negligenciados ou descartados como brinquedos descartáveis.</p>    <p>Hoje, somos uma rede de voluntários apaixonados, veterinários parceiros e famílias adotivas que acreditam que cada vida importa — mesmo as menores.</p>    <img src="Hamster explorando a floresta.jpg" alt="Hamster explorando a floresta">  </div>
        <div class="section">	   <h2>Curiosidade</h2>	      <p>Hamster são Nativos de regiões como o Oriente Médio, Ásia e parte da Europa, esses animais foram inicialmente estudados e criados  para pesquisas cientificasantes de se tornarem companheiros domésticos.Existe cerca de 18 espécies de hamsters, sendo as mais comuns como pets o Haminster-Sírio, o Dourado e o Chinês.Esses roedores são caracterizados por serem bem pequenos,com corpos arredondados, pelagem macia e cauda curta. </p>
        <img src="na toca.jpg" alt="hamster roborovskir" /> </div>
        <div class="section">    <h2>Cuidados</h2>          <p>Cuidados O hamster roborovski tem um sistema digestivo frágil, e sua dieta deve ser semelhante à de seu habitat natural, incluindo sementes, verduras, frutas, cereais e frutos secos. Alimentos com especiarias, sal, condimentos, frituras, açúcar e chocolate são proibidos.A gaiola deve ser espaçosa (mínimo de 80 x 40 cm) e ter um substrato absorvente que não levante pó, como serragem de madeira natural ou celulose. Também deve incluir um refúgio e brinquedos para distração.</p>
        </div>
        <div class="section">    <h2>Nosso Compromisso</h2>    <ul>      <li>Resgatar hamsters em situação de abandono</li>      <li>Oferecer cuidados veterinários e reabilitação</li>      <li>Promover adoção responsável e consciente</li>      <li>Educar sobre o bem-estar animal e a guarda responsável</li>    </ul>    <img src="Hamster e coelho na floresta.jpg" alt="Hamster e coelho na floresta">  </div>
        <div class="section">    <h2>Galeria: Hamsters em Harmonia com a Natureza</h2>    <p>Veja como nossos pequenos amigos se conectam com o mundo natural. Cada imagem representa o cuidado, a liberdade e o carinho que buscamos oferecer.</p>
        <div class="gallery">      <img src="curioso.jpg" alt="curioso na floresta">      <img src="hamster-pequeno.jpg" alt="Hamster entre folhas secas">      <img src="hamster na floresta.jpg" alt="Hamster explorando o campo">      <img src="seu ambiente natural.jpg" alt="Hamster em ambiente natural">    </div>  </div>
    `,
    
    // Rota 'sobre' (simulado - use o conteúdo do seu sobre.html)
    sobre: () => `
        <div class="section">
            <h2>Página Sobre Nós</h2>
            <p>Conteúdo da página Sobre Nós, carregado via SPA.</p>
        </div>
    `,
    
    // Rota 'projeto' (simulado - use o conteúdo do seu projeto.html)
    projeto: () => `
        <div class="section">
            <h2>Página Nosso Projeto</h2>
            <p>Conteúdo da página Nosso Projeto, carregado via SPA.</p>
        </div>
    `,
    
    // Adicione mais rotas conforme necessário (ex: resgates, adote)
};
