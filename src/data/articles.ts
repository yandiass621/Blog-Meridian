export const articles = [
    {
        id: '1',
        title: 'O Futuro do Trabalho Remoto: Construindo Equipes Distribuídas que Prosperam',
        category: 'Tecnologia',
        date: '06 de outubro de 2026',
        image: '../image/image corporativa.avif',
        content: `
            <p>
                O trabalho remoto deixou de ser uma exceção e se tornou uma estratégia competitiva.
            </p>

            <p>
                Empresas de diferentes setores passaram a construir equipes distribuídas,
                permitindo que profissionais trabalhem de diferentes regiões.
            </p>

            <h2>O que mudou?</h2>

            <p>
                A principal mudança está na forma como as equipes se comunicam,
                colaboram e acompanham seus resultados.
            </p>

            <p>
                <strong>Uma cultura organizacional forte continua sendo essencial</strong>
                mesmo quando os profissionais não estão fisicamente no mesmo espaço.
            </p>
        `,
        
    },

    {
        id: '2',
        title: 'Design para Acessibilidade: Um Guia Prático para Times Modernos',
        category: 'Design',
        date: '05 de outubro de 2026',
        image: '../image/article4.avif',
        content: `
            <p>
                A acessibilidade não deve ser tratada apenas como um requisito técnico
                ou um checklist de conformidade. Ela deve fazer parte do processo de
                criação desde o primeiro momento.
            </p>

            <p>
                Quando pensamos em acessibilidade durante o desenvolvimento,
                conseguimos criar experiências melhores para pessoas com diferentes
                necessidades e, muitas vezes, para todos os usuários.
            </p>

            <h2>Por que a acessibilidade importa?</h2>

            <p>
                Um produto digital precisa ser compreensível, navegável e utilizável
                pelo maior número possível de pessoas.
            </p>

            <p>
                <strong>Acessibilidade é uma forma de pensar o design, não apenas
                uma etapa final do projeto.</strong>
            </p>

            <h2>Boas práticas para começar</h2>

                <ul>
                    <li>Utilize contraste adequado entre texto e fundo.</li>
                    <li>Utilize elementos HTML semânticos.</li>
                    <li>Forneça textos alternativos para imagens.</li>
                    <li>Garanta navegação utilizando o teclado.</li>
                    <li>Não dependa somente de cores para transmitir informações.</li>
                </ul>

            <p>
                Pequenas decisões tomadas durante o desenvolvimento podem tornar uma
                interface significativamente mais acessível.
            </p>
        `,
    },

    {
        id: '3',
        title: 'Entendendo Generics em TypeScript: Do Básico aos Padrões Avançados',
        category: 'Desenvolvimento',
        date: '04 de outubro de 2026',
        image: '../image/article3.avif',
        content: `
            <p>
                Generics são um dos recursos mais importantes do TypeScript para criar
                código reutilizável e manter a segurança do sistema de tipos.
            </p>

            <p>
                Em vez de criar uma função específica para cada tipo de dado,
                podemos utilizar generics para permitir que uma mesma estrutura
                trabalhe com diferentes tipos.
            </p>

            <h2>Por que utilizar Generics?</h2>

            <p>
                Imagine uma função que recebe um valor e precisa devolvê-lo mantendo
                exatamente o mesmo tipo.
            </p>

            <p>
                <strong>O Generic permite preservar essa informação de tipo sem
                precisar abrir mão da reutilização do código.</strong>
            </p>

            <h2>Um exemplo simples</h2>

            <p>
                Considere uma função que recebe um valor de qualquer tipo e retorna
                esse mesmo valor. Com Generics, podemos representar essa relação
                diretamente no código.
            </p>

            <p>
                Isso torna o código mais previsível e permite que o TypeScript
                identifique possíveis erros durante o desenvolvimento.
            </p>

            <h2>Onde eles aparecem?</h2>

                <ul>
                    <li>Funções reutilizáveis.</li>
                    <li>Interfaces.</li>
                    <li>Classes.</li>
                    <li>Tipos personalizados.</li>
                    <li>Estruturas de dados.</li>
                </ul>

            <p>
                Compreender Generics é um passo importante para começar a trabalhar
                com projetos TypeScript mais complexos.
            </p>
        `,
    },

    {
        id: '4',
        title: 'Produtividade Consciente: Como Fazer Mais Trabalhando Menos',
        category: 'Produtividade',
        date: '03 de outubro de 2026',
        image: '../image/article2.avif',
        content: `
            <p>
                A busca constante por produtividade pode acabar produzindo o efeito
                contrário. Trabalhar mais horas não significa necessariamente produzir
                resultados melhores.
            </p>

            <p>
                Produtividade consciente significa entender onde sua energia está
                sendo utilizada e concentrá-la nas atividades que realmente geram
                impacto.
            </p>

            <h2>Trabalhar mais não significa produzir mais</h2>

            <p>
                Uma rotina cheia de tarefas pode transmitir a sensação de progresso,
                mesmo quando poucas delas são realmente importantes.
            </p>

            <p>
                <strong>O objetivo não deveria ser fazer o maior número possível de
                coisas, mas fazer aquilo que realmente importa.</strong>
            </p>

            <h2>Como começar?</h2>

                <ul>
                    <li>Defina poucas prioridades para o dia.</li>
                    <li>Evite alternar constantemente entre tarefas.</li>
                    <li>Reserve momentos para descanso.</li>
                    <li>Elimine tarefas que não geram valor.</li>
                    <li>Revise seus objetivos regularmente.</li>
                </ul>

            <h2>Menos pode ser mais</h2>

            <p>
                Uma rotina sustentável permite manter consistência durante períodos
                maiores, sem depender de excesso de trabalho ou de longas jornadas.
            </p>

            <p>
                Encontrar um ritmo equilibrado é tão importante quanto alcançar
                resultados.
            </p>
        `,
    },

    {
        id: '5',
        title: 'GraphQL vs REST: Escolhendo a Estratégia de API Certa para o Seu Projeto',
        category: 'Tecnologia',
        date: '02 de outubro de 2026',
        image: '../image/article1.avif',
        content: `
            <p>
                GraphQL e REST são abordagens diferentes para construir APIs.
                Embora ambas possam resolver problemas semelhantes, cada uma possui
                características que podem fazer mais sentido dependendo do projeto.
            </p>

            <h2>REST</h2>

            <p>
                APIs REST normalmente organizam os recursos através de diferentes
                endpoints. Cada endpoint representa uma determinada operação ou
                recurso disponível para o cliente.
            </p>

            <p>
                <strong>A simplicidade e a familiaridade fazem do REST uma escolha
                bastante comum em aplicações web.</strong>
            </p>

            <h2>GraphQL</h2>

            <p>
                GraphQL permite que o cliente especifique quais informações deseja
                receber. Em vez de depender de diferentes respostas pré-definidas,
                o cliente descreve os dados necessários.
            </p>

            <h2>Qual escolher?</h2>

            <p>
                Não existe uma tecnologia universalmente melhor. A decisão depende
                das necessidades do projeto, da equipe e da forma como os dados serão
                consumidos.
            </p>

                <ul>
                    <li>Considere a complexidade dos dados.</li>
                    <li>Analise como os clientes irão consumir a API.</li>
                    <li>Avalie a experiência da equipe de desenvolvimento.</li>
                    <li>Considere manutenção e escalabilidade.</li>
                </ul>

            <p>
                <strong>A escolha entre GraphQL e REST deve ser baseada no contexto
                do projeto, e não apenas na popularidade da tecnologia.</strong>
            </p>
        `,
    },
];