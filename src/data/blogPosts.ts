import { ReactNode } from "react";

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    coverImage: string;
    date: string;
    category: string;
    author: string;
    content: string; // Markdown
    keywords: string[];
}

export const blogPosts: BlogPost[] = [
    {
        slug: "unha-encravada-causas-e-tratamentos",
        title: "Unha Encravada: Tudo O Que Você Precisa Saber Para Acabar Com a Dor",
        excerpt: "A onicocriptose não é apenas um incômodo, é uma patologia que exige cuidado profissional. Descubra as causas reais, os perigos da 'cirurgia caseira' e como a podologia moderna resolve o problema sem sofrimento.",
        coverImage: "/images/unha-encravada-hero.webp",
        date: "2024-03-20",
        category: "Podologia Clínica",
        author: "Kelly Bandeira",
        keywords: ["unha encravada", "onicocriptose", "granuloma", "podologia campinas", "espiculectomia"],
        content: `
## Você Sente Dor ao Calçar um Sapato Fechado?

Se a resposta for sim, você pode estar sofrendo de **onicocriptose**, popularmente conhecida como unha encravada. Essa condição ocorre quando a borda lateral da unha fere a pele adjacente (o sulco ungueal), agindo como um corpo estranho cortante.

![Tratamento especializado em Podologia](/images/limpeza-hero.webp)

O corpo, na tentativa de se defender, inicia um processo inflamatório intenso: dor, vermelhidão, inchaço e calor local. Se não tratada, essa inflamação evolui para uma infecção bacteriana e o surgimento do **granuloma piogênico** (aquela "carne esponjosa" que sangra fácil).

> **Atenção:** A unha encravada não se resolve sozinha. Esperar "passar" ou tomar anti-inflamatórios sem remover a causa mecânica (a espícula da unha) apenas mascara a dor momentaneamente.

---

### As 4 Principais Causas da Unha Encravada

No meu dia a dia clínico aqui no Cambuí, percebo que 90% dos casos vêm de um desses quatro fatores:

1.  **Corte Incorreto (O Vilão #1):** O hábito de cortar os cantinhos da unha ("arredondar" em excesso) é o maior causador do problema. Ao cortar o canto muito curto, a pele ocupa o espaço vazio e, quando a unha cresce, ela não tem para onde ir a não ser *para dentro* da pele.
2.  **Calçados Inadequados:** Sapatos de bico fino ou muito apertados comprimem os dedos uns contra os outros. Essa pressão constante empurra a pele contra a lâmina da unha.
3.  **Traumas Mecânicos:** Um pisão no futebol, um objeto que caiu no pé ou até trombadas em móveis podem quebrar a unha ou forçá-la contra o tecido.
4.  **Anatomia Genética:** Algumas unhas nascem naturalmente mais curvas (em formato de telha ou funil), o que facilita o encravamento mesmo com cuidados básicos.

### O Perigo da "Cirurgia de Banheiro"

É compreensível: está doendo e você quer alívio imediato. Então, pega um alicate de cutícula (muitas vezes não esterilizado) e tenta "cutucar" o canto da unha para tirar a pontinha que dói.

**Por que isso é um erro grave?**

*   **Risco de Infecção:** O banheiro é um local contaminado. Abrir uma ferida ali é convidar bactérias para entrarem na sua corrente sanguínea.
*   **A "Espícula" Restante:** Na maioria das vezes, você só consegue cortar a parte superficial da unha. A ponta real que está ferindo a pele (a espícula) fica lá no fundo, agora pontiaguda e irregular, piorando a inflamação dias depois.

[CTA: Quero agendar uma avaliação de emergência](https://wa.me/5519983690695?text=Ola,%20estou%20com%20dor%20na%20unha%20e%20preciso%20de%20ajuda)

---

### Como a Podologia Resolve Definitivamente?

Diferente de soluções caseiras ou de pedicures estéticas (que não têm formação para tratar patologias), o podólogo utiliza técnicas cirúrgicas menores e instrumentos de precisão.

#### 1. Procedimento Indolor
Muitos pacientes chegam com medo da dor. A boa notícia é que utilizamos técnicas de **analgesia** e emoliência que tornam o procedimento muito suportável e, muitas vezes, totalmente indolor. O alívio é imediato após a remoção da espícula.

#### 2. Espiculectomia
Não arrancamos a unha toda! (Isso é uma prática antiga e desnecessária na maioria dos casos). Realizamos a **espiculectomia**, que é a remoção cirúrgica apenas do filete lateral da unha que está causando o problema, preservando a estética do dedo.

![Ambiente clínico preparado](/images/calos-hero.webp)

#### 3. Órteses Corretivas
Para quem tem unhas muito curvas, utilizamos **órteses** (botons, fibras de memória ou brackets metálicos) colados sobre a unha. Eles funcionam como um "aparelho dental", tracionando a unha para cima e corrigindo sua curvatura ao longo do tempo.

[CTA: Conheça os tratamentos para Unha Encravada](/podologia/unha-encravada)

### Dicas de Ouro para Prevenção

*   **Corte Reto:** Corte as unhas seguindo o desenho do dedo, mas sem invadir os cantos. Deixe uma pequena margem de segurança.
*   **Não Cutuque:** Limpe apenas a sujeira superficial. Não tente limpar "lá no fundo" com palitos ou espátulas.
*   **De olho no Sapato:** Dê preferência a calçados com bico mais largo para o dia a dia. Deixe o bico fino apenas para ocasiões especiais.

Se você convive com dores recorrentes, não normalice o sofrimento. A podologia devolve sua qualidade de vida em uma única sessão. Cuide dos seus pés, eles sustentam toda a sua jornada!
        `
    },
    {
        slug: "beneficios-drenagem-linfatica",
        title: "Drenagem Linfática: Desinchando o Corpo e Renovando a Saúde",
        excerpt: "Esqueça a ideia de que drenagem é apenas para perder medidas. Entenda a ciência por trás dessa técnica manual e como ela atua no sistema imunológico, na gestação e no pós-operatório.",
        coverImage: "/images/drenagem-hero.webp",
        date: "2024-03-15",
        category: "Massoterapia & Bem-Estar",
        author: "Kelly Bandeira",
        keywords: ["drenagem linfática", "sistema linfático", "retenção de líquidos", "gestante", "pós-operatório"],
        content: `
## Você se Sente "Pesada" no Final do Dia?

Sabe aquela sensação de pernas cansadas, anéis que não saem do dedo ou a marca da meia funda no tornozelo? Isso é **edema**, ou popularmente, **retenção de líquido**.

Nosso estilo de vida moderno – muitas horas sentado em frente ao computador, alimentação rica em sódio, pouca ingestão de água e estresse – contribui para que o sistema linfático fique "preguiçoso".

![Relaxamento e bem-estar](/images/relaxante-hero.webp)

A **Drenagem Linfática Manual** não é apenas uma massagem estética; é uma terapia que estimula fisiologicamente o organismo a eliminar o excesso de líquidos e toxinas.

---

### O Que é o Sistema Linfático?

Imagine que seu corpo tem um sistema de esgoto (veias) e um sistema de coleta de lixo reciclável (linfático). O sistema linfático recolhe líquidos, proteínas grandes e *restos celulares* que as veias não conseguem captar.

Quando esse sistema falha ou fica sobrecarregado, o "lixo" acumula, causando inchaço e predisposição a inflamações (como a celulite).

A drenagem linfática funciona como um *acelerador* manual dessa coleta, empurrando a linfa suavemente em direção aos gânglios (filtros), onde será limpa e devolvida à circulação sanguínea para ser eliminada na urina.

### 5 Benefícios Comprovados da Drenagem

1.  **Redução Imediata de Medidas:** Ao eliminar o líquido estagnado, você "desincha" na hora. É comum pacientes se sentirem mais leves e as roupas ficarem mais folgadas logo após a sessão.
2.  **Detox Corporal:** Aceleramos a eliminação de toxinas metabólicas, o que melhora a oxigenação dos tecidos.
3.  **Melhora da Celulite:** A celulite tem um componente inflamatório e de retenção hídrica. Drenar a região melhora o aspecto "casca de laranja".
4.  **Relaxamento Profundo:** O toque da drenagem é, por definição, lento, rítmico e suave. Isso ativa o sistema nervoso parassimpático, reduzindo ansiedade e estresse.
5.  **Reforço Imunológico:** Ao estimular a circulação da linfa (que carrega glóbulos brancos), ajudamos o sistema de defesa do corpo.

[CTA: Quero agendar minha Drenagem Linfática](/massoterapia/drenagem)

---

### Drenagem Linfática na Gestação

Gravidez não é doença, mas traz mudanças fisiológicas imensas. O aumento do volume sanguíneo e a compressão dos vasos pelo útero causam o famoso inchaço nas pernas e pés.

A drenagem para gestantes é **segura e recomendada** (após liberação do obstetra, geralmente após o 3º mês). Ela alivia a dor, previne varizes e proporciona um momento único de conexão da mãe com o bebê.

> **Mito:** "Drenagem tem que doer para funcionar."
> **Verdade:** A drenagem linfática autêntica **NÃO DÓI** e **NÃO DEIXA ROXO**. Os vasos linfáticos são superficiais e frágeis. Força excessiva colapsa esses vasos em vez de estimulá-los. Se doeu, foi massagem modeladora, não drenagem.

### Pós-Operatório de Cirurgia Plástica

Se você fez ou vai fazer uma lipoaspiração, abdominoplastia ou colocação de prótese, a drenagem é obrigatória.

No pós-operatório, o corpo produz muito líquido (edema) como resposta ao trauma da cirurgia. A drenagem especializada ajuda a:
*   Reduzir o inchaço e a dor.
*   Prevenir **fibroses** (cicatrizes internas que deixam a pele dura e ondulada).
*   Acelerar a recuperação e o resultado estético final.

![Cuidados integrativos](/images/pedras-quentes-hero.webp)

Não entregue seu pós-operatório na mão de amadores. A fibrose pode comprometer o resultado da sua cirurgia.

[CTA: Conheça nossos protocolos de Massoterapia](/massoterapia)

---

### Quantas Sessões Devo Fazer?

O efeito da drenagem é cumulativo. Para um tratamento de "ataque" (inchaço intenso), recomendamos de 1 a 2 vezes por semana. Para manutenção e bem-estar, 1 vez por semana ou quinzenalmente é excelente.

Lembre-se: a drenagem ajuda muito, mas você precisa fazer a sua parte: **beba água!** Um corpo hidratado retém menos líquido.
        `
    },
    {
        slug: "cuidados-pes-diabeticos",
        title: "Pé Diabético: O Guia Completo de Prevenção e Cuidados",
        excerpt: "Para o paciente diabético, um pequeno corte pode se tornar um grande problema. Entenda a neuropatia, a perda de sensibilidade e o protocolo de segurança que seguimos.",
        coverImage: "/images/diabetico-hero.webp",
        date: "2024-03-10",
        category: "Saúde Preventiva",
        author: "Kelly Bandeira",
        keywords: ["pé diabético", "diabetes", "neuropatia", "úlcera plantar", "cuidados diabéticos"],
        content: `
## Por Que o Diabetes é Perigoso Para os Pés?

O Brasil tem milhões de diabéticos, e uma grande parcela desconhece os riscos que corre. O excesso de glicose (açúcar) no sangue, a longo prazo, danifica dois sistemas cruciais para a saúde dos membros inferiores:

1.  **Nervos (Neuropatia Diabética):** Os nervos vão "morrendo" aos poucos. O primeiro sintoma é formigamento ou queimação, seguido pela **perda total de sensibilidade**.
    *   *O Perigo:* Você pode pisar em um prego, queimar o pé na areia quente ou machucar com um sapato apertado e **não sentir nada**. Sem dor, você não trata a ferida.
2.  **Vasos Sanguíneos (Vasculopatia):** As artérias ficam rígidas e estreitas, dificultando a chegada de sangue oxigenado aos pés.
    *   *O Perigo:* Sem sangue, não há cicatrização. Uma pequena ferida pode necrosar e infecionar rapidamente.

![Prevenção é o melhor remédio](/images/reflexologia.webp)

Essa combinação trágica (Pé Insensível + Má Cicatrização) é a principal causa de amputações não traumáticas no mundo. Mas a boa notícia é: **é quase totalmente evitável com prevenção.**

---

### O Papel Fundamental do Podólogo

Para o paciente diabético, visitar o podólogo mensalmente é tão importante quanto ir ao endocrinologista. No nosso consultório, seguimos um protocolo rigoroso de segurança:

#### Inspeção Detalhada
Examinamos cada centímetro do pé em busca de frieiras, fissuras, calos ou pontos de pressão que o paciente não notou.

#### Corte Técnico Seguro
Diabéticos **nunca** devem cortar as unhas em casa ou com profissionais não qualificados. Um "bife" tirado na cutícula pode ser a porta de entrada para uma infecção grave (erisipela). Nós realizamos o corte técnico, sem ferir a pele, e lixamos para não deixar pontas agressivas.

#### Desbastamento de Calos
O calo é uma resposta da pele à pressão. Em diabéticos, o calo rígido age como uma "pedra" no sapato, pressionando os tecidos profundos e causando úlceras por baixo da pele. Nós removemos esses calos com segurança, aliviando a pressão.

[CTA: Agendar avaliação preventiva para Pé Diabético](/podologia/diabetico)

---

### Sua Rotina Diária de Segurança (Checklist)

Se você tem diabetes, adote esses passos como lei na sua vida:

1.  **Exame Diário:** Todo dia, olhe a sola dos pés. Use um espelho no chão se não conseguir alcançar. Procure por cortes, bolhas ou vermelhidão.
2.  **Nunca Ande Descalço:** Nem em casa, nem na praia. O risco de pisar em algo e não sentir é muito alto.
3.  **Hidratação Controlada:** Passe creme hidratante no calcanhar e planta do pé para evitar rachaduras, mas **nunca entre os dedos** (a umidade ali causa frieira).
4.  **Sapatos Certos:** Use calçados confortáveis, sem costuras internas grosseiras. Compre sapatos no final da tarde (quando o pé está mais inchado) para garantir que não vão apertar.
5.  **Meias de Algodão:** Prefira meias brancas (facilita ver se houver sangue/secreção) e de algodão, sem elásticos que prendam a circulação.

### Sinais de Alerta: Corra para o Profissional!

Se notar qualquer um desses sinais, não espere o dia seguinte:
*   Pé muito quente ou muito frio repentinamente.
*   Mudança de cor (muito vermelho, roxo ou pálido).
*   Inchaço em apenas um dos pés.
*   Saída de pus ou mau cheiro.

Prevenção é a palavra-chave. Seus pés são sua base de sustentação; trate-os com o carinho e a seriedade que eles merecem.

[CTA: Saber mais sobre tratamento para diabéticos](/podologia/diabetico)
        `
    }
];
