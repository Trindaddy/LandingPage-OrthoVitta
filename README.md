Landing Page - Clínica Odontológica Ortho Vitta
Landing page responsiva para a clínica odontológica Ortho Vitta, desenvolvida com HTML, CSS, JavaScript e Bootstrap 5. Focada em alta conversão, inclui funcionalidades como modo escuro, navegação suave e múltiplos CTAs, visando a captação de novos pacientes.

1. Visão Geral do Projeto
Este projeto consiste na criação de uma landing page moderna, responsiva e de alta conversão para a clínica odontológica Ortho Vitta. O objetivo é apresentar a clínica, seus serviços e equipe de forma profissional e atraente, com foco em transformar visitantes em pacientes através de múltiplos pontos de contato (Call-to-Action).

A página foi desenhada com uma identidade visual "Sofisticação Clínica", utilizando uma paleta de cores equilibrada para transmitir confiança, tecnologia e bem-estar.

2. Tecnologias Utilizadas
HTML5: Para a estruturação semântica do conteúdo.

CSS3: Para estilização, animações e a criação dos temas claro e escuro.

Bootstrap 5: Framework CSS utilizado para a criação de um layout responsivo (mobile-first), garantindo uma experiência de usuário consistente em todos os dispositivos.

JavaScript (Vanilla): Para funcionalidades interativas, como a alternância de tema (modo escuro) e a rolagem suave da página.

Bootstrap Icons: Biblioteca de ícones utilizada para enriquecer a interface.

Google Fonts: Para a tipografia (famílias Poppins e Roboto).

3. Funcionalidades Implementadas
Design Responsivo: A página se adapta perfeitamente a desktops, tablets e smartphones.

Modo Escuro (Dark Mode): Um botão no cabeçalho permite que o usuário alterne entre o tema claro e escuro. A preferência é salva no navegador (localStorage), mantendo a escolha do usuário em visitas futuras.

Navegação com Rolagem Suave (Smooth Scroll): Clicar nos links do menu de navegação rola a página suavemente até a seção correspondente.

Componentes Interativos:

Carrossel de Imagens: Utilizado para exibir fotos do ambiente da clínica de forma dinâmica.

Carrossel de Depoimentos: Apresenta provas sociais de pacientes de maneira organizada.

Múltiplos Pontos de Contato:

Botões de "Agendar Avaliação" direcionados para o WhatsApp com mensagens pré-definidas.

Botão flutuante de WhatsApp que acompanha o usuário durante a rolagem.

Botão para ligação telefônica direta em dispositivos móveis.

Mapa Interativo: Iframe do Google Maps integrado para facilitar a localização da clínica.

4. Estrutura de Arquivos
/
|-- _img/
|   |-- DonaOrthoVitta.png
|   |-- clareamento.png
|   |-- lente-contato.png
|   |-- aparelho.png
|   |-- implante.png
|   |-- protese.png
|   |-- canal.png
|   |-- sobre1.png
|   |-- sobre2.png
|   |-- sobre3.png
|
|-- index.html
|-- style.css
|-- script.js
|-- README.md


_img/: Pasta contendo todas as imagens utilizadas no projeto.

index.html: Arquivo principal com toda a estrutura da página.

style.css: Arquivo de estilização, incluindo as variáveis de cores para os temas e as regras de responsividade.

script.js: Arquivo com as funcionalidades JavaScript.

README.md: Esta documentação.

5. Como Executar e Customizar
Execução
Para visualizar o projeto, basta abrir o arquivo index.html em qualquer navegador web moderno. Não é necessário um servidor local.

Customização
A maioria das informações personalizáveis encontra-se no arquivo index.html. Para editar:

Nome da Doutora e Especialidade: Procure por [Nome da Doutora] e [Especialidade Principal] e substitua pelos textos corretos.

Links de Contato: Os links para WhatsApp, Instagram e o número de telefone podem ser facilmente alterados nos atributos href das tags <a>.

Imagens: Substitua os placeholders e os nomes de arquivos na pasta _img/ pelas imagens reais da clínica, mantendo os caminhos (src="...") corretos.

Textos e Depoimentos: Todo o conteúdo textual pode ser editado diretamente no HTML.

Cores e Fontes: As cores principais, fontes e outras variáveis de design podem ser facilmente modificadas no início do arquivo style.css, na seção :root.