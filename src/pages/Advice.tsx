import React, { useState, useEffect } from "react"
import { Grid } from "@material-ui/core"
import { AdviceCard, NutricionistList } from "../components/AdviceCard"

import atividadeFisicaImg from "../components/assets/atividadesfisicas.jpg"
import dietaFlexivelImg from "../components/assets/dietaFlexível.jpg"
import dicasTreinoImg from "../components/assets/dicasTreino.jpg"
import academiaCrossfit from "../components/assets/musculacaoCrossfit.jpg"
import alimentacao from '../components/assets/alimentacao.jpg'
import aguaImg from '../components/assets/agua.jpg'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';


import "./Advice.scss"
import { User } from "../interfaces/User"
import NutricionistData from '../data/NutricionistData';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        inline: {
            display: 'inline',
        },
    }),
);





export default function Advice() {
    const [open, setOpen] = useState(false);
    const [nutricionist, setNutricionist] = useState<User[]>([])
    const classes = useStyles();
    const handleClick = () => {
        setOpen(!open);
    }
    
    const ItensList = (props: any) =>{
        const itens: any = [];
        nutricionist.forEach((nutri: User, index:Number) => itens.push(
            <NutricionistList
                index ={index} 
                name = {nutri.name}
                email = {nutri.email}
            />
        ))
        return itens;
    }
    useEffect(() => {
        let nutriList: User[] =[];
        const dataNutri = new NutricionistData();
        dataNutri.consulta().then(data => {
            data.forEach(nutri =>{
                nutriList.push(nutri)
            })
            setNutricionist(nutriList)
        })
        
    }, [])

    return (

        <Grid
            className="cardContainerAdvice"
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
        >
            <AdviceCard
                title={"O que é atividade física"}
                img={atividadeFisicaImg}
                descriptions={"O que é atividade física? E quais são as opções de atividades?"}
                paragraph={"Segundo a Organização Mundial da Saúde (OMS), a atividade física é definida como qualquer movimento corporal produzido pelos músculos esqueléticos, que requer dasto de energia. A prática de atividades durante meia hora por dia já faz com que a pessoa deixe de ser sedentária. A atividade física inclui o exercício, bem como outras atividades que envolvem o movimento corporal e são feitas como parte de jogar, trabalhar, transporte ativo, tarefas dométicas e atividades recreativas. A aptidão física trás benefícios inegáveis para a saúde de todas as pessoas. Trata-se de uma prática que está relacionada com melhorias neuromusculares, metabólicas e psicológicas. Quem pratica exercícios moderados regularmente, corre menos risco de ter problemas crônicos de saúde como doenças cardíacas, obesidade, hipertensão, diabetes tipo II, certos tipos de câncer e outros distúrbios metabólicos. A atividade física não deve ser confundida com exercício. Exercício é uma subcategoria da atividade física que é planejada, estruturada, repetitiva e proposital com o objetivo da melhoria ou manutenção de um ou mais componentes de aptidão física. Exitem inúmerasatividades para movimentar seu corpo de acordo com seu estilo de vida como: Alongamento, Ballet clássico, Ballet fitness, Bicicleta, Caminhada, Capoeira, Circo, Circuitos, Corrida, Crossfit, Dança de salão, Dança do ventre, Escalada, Ginástica olímpica, Handball, Hidroginástica, Insanity (programa de exercícios em vídeos), Jiu Jitsu, Kamgoo Jumps (parecido com patins, são sapatos que favorecem saltos), Lamba Aeróbica, Natação, Patins, Pilates, Pole dance, Power Jump (por meio de camas elásticas), Remo, Skate, Slackline, Stand up paddle (surf com remo), Street dance, Surf, Taekwondo, Tênis, Vôlei, Yoga & Zumba.  "}
            />

            <AdviceCard
                title={"O que é e quais benefícios da dieta flexível?"}
                img={dietaFlexivelImg}
                descriptions={"A dieta flexível é um  mito ?"}
                paragraph={"A dieta flexível If it fit your macros (IIFYM), que em tradução livre significa (se couber nos seus macros[nutrientes]), calcula a quantidade de macronuttrientes como proteínas, gorduras, carboidratos e fibras que uma pessoa pode ingerir por dia. Ela é similar à dieta dos pontos, com a diferença de que em vez de serem calculadas as calorias que podem ser ingeridas, são os macronutrientes e as fibras que são levados em conta. Uma vantagem desta dieta é que ela ajuda a planejar melhor a alimentação e não apenas seguir um cardápio. Desta forma, a pessoa pode ter maior facilidade na hora de pensar em reeducação alimentar. Além disso, apesar de não levar em conta os micronutrientes, este método já dá um passo importante ao lembrar que não são apenas as calorias que devem ser levadas em conta, mas também os macronutrientes."}
            />
            <AdviceCard
                title={"Como deixar o treino mais eficaz "}
                img={dicasTreinoImg}
                descriptions={"Algumas dicas de como deixar seu treino mais eficaz para o ganho de massa muscular e emagrecimento"}
                paragraph={"DEMORE NA CONTRAÇÃO EXCÊNTRICA. Nosso músculo, durante o exercício, realiza basicamente dois tipos de contrações: a concêntrica que é quando empurramos o pesoa e a excênctrica, que ocorre quando trazemos o peso para o lugar de origem. Pode até não parecer, mas uma quantidade maior de fibras musculares é recrutada quando realizamos a contração excêntrica. Portanto, passe a demorar mais tempo no momento em que está retornando com a carga. Mais fibras serão lesionadas, maior será a construção de massa magra.REALIZE O MOVIMENTO ATÉ A FALHA. É importante ter em mente que nenhum tipo de exercício passui uma receita de bolo, especialemente o treino de musculação. Já se foi o tempo em que fazíamos séries com números pré-estabelecidos. O ideal é que façamos o movimento até que o nosso músculo não aguente mais, ou seja, até que ele chegue à falha. Esse é o momento no qual há mais energia para manter o movimento. Mas tenha cuidado. Dependendo do exercício, você só deve fazê-lo acompanhado de um profissional para não se machucar. AUMENTA A CARGAR GRADUALMENTE. O nosso corpo sempre tende a se habituar a uma determinada situação, a chegar a um platô. Por exemplo, quando ingerimos uma dose constante de remédio para dor, depois de certo tempo, é preciso aumentá-la, pois não faz mais efeito. Isso também acontece com os músculos em relação à carga. Por causa disso, tente sempre aumentá-la para ter um bom desempenho e resultado.RESPIRE NO MOMENTO CERTO. Isso não costuma ser muito trabalhado na maioria das academias, mas saiba que existe um momento correto para inspirar e expirar e isso precisa se tornar um hábito. Para reduzir a pressão dentro do corpo, o ideal é expirar quando estamos realizando a contração concêntrica e expirar na excêntrica. No inicio será preciso um constante policiamento até se acostumar e fazer isso naturalmente. DESCANSE. Nenhum treino de musculação ou mesmo atividades aeróbicas possuem um bom rendimento se não houver descanso compatível com o esforço. Você precisa permitir que o seu corpo descanse, por isso, tente dormir mais. É durante o sono que o homônio do crescimento, também conhecido como GH, atua nos tecidos e ajuda na construção muscular gerando novas fibras e , consequentemente, a hipertrofia."}
            />
            <Grid
                className="cardContainerAdvice"
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >

                <AdviceCard
                    title={"Diferenças entre academias crossfit e musculação"}
                    img={academiaCrossfit}
                    descriptions={"Tem diferênça entre as duas modalidades?"}
                    paragraph={"Uma das maiores diferenças é a questão estrutural. Academias de crossfit são popularmente conhecidas como “box”, caixa em português. Esse apelido se dá pelo fato de conter poucos aparelhos e muito espaço, exatamente o contrário das tradicionais academias de musculação. É comum e frequente ouvirmos que o corpo é o principal instrumento do crossfit. Enquanto em academias encontramos esteiras, máquinas para abdominais, treinos de perna, agachamento, peito e braços, as academias de crossfit (ou boxes) apresentam acessórios como barras, anilhas, argolas, bolas,kettlebells, entre outros. Uma diferença que poucos percebem é sobre a presença de espelhos. Objeto quase que obrigatório em academias de musculação, o espelho é totalmente dispensável no ambiente de treino de crossfit. Na maioria dos casos, eles só estão disponíveis nos banheiros. Além disso, as academias de crossfit permitem ao aluno treinar e aprender técnicas de diversas modalidades numa mesma aula. Podemos ter, por exemplo, num mesmo treino, movimentos de ginástica, levantamento de peso e corrida. A musculação, mesmo que com objetivos diferentes de cada aluno, não é um ambiente tão abrangente. Porém, a diferença principal está na prática em grupo. Em academias de musculação, por mais que se tenha companhia física, suas aulas serão geralmente individuais, enquanto as aulas de crossfit são sempre realizadas para grupos em que todos fazem o mesmo workout."}
                />

                <AdviceCard
                    title={"Proteínas, Carboidratos e Gorduras"}
                    img={alimentacao}
                    descriptions={"O que é ? e para que serve??"}
                    paragraph={"CARBOIDRATOS. Dependendo do tamanho da molécula, os carboidratos podem ser simples ou complexos. CARBOIDRATOS SIMPLES: diversos tipos de açuúcares, como glicose e a sacarose (açúcar de mesa), são carboidratos simples. Visto que estas moléculas são pequenas, o organismo pode decompô-las e absove-las rapidamente; portanto, são a fonte mais rápida de energia. Elas aumentam rapidamente o nível de glicose no sangue (açúcat no sangue). As frutas, os produtos lácteos, o mel e o xarope de bordo contêm grandes quantidade de carboidratos simples, wue proporcionam o sabor doce à maioria dos doces e bolos. CARBOIDRATOS COMPLEXO. Os carboidratos são compostos por grandes cadrias de carboidratos simples. Como os carboidratos complexos possuem moléculas maiores que os carboidratos simples, eles devem ser decompostos em carboidratos simples antes de serem absorvidos. Dessa forma demoram mais para fornecer energia ao corpo do que os carboidratos simples, mas demoram menos que as proteínas e gorduras. Como sua digestão demora mais do que a digestão dos carboidratos simples, a probabilidade de serem convertidos em gordura é menor. Eles também aumentam os níveis de açúcar no sangue mais lentamente e em níveis menores do que os carboidratos simples, mas por um período mais longo. Os carboidratos complexos incluem amidos e fibras, que se encontram nos alimentos à base de trigo (como pães e massas), em outros cereais (como cevada e milho), feijões e em tubérculos (como batata e batata-doce). PROTEÍNAS. As proteínas são constituídas por unidades denominadas aminoácidos, que formam cadeias complexas longas. Devido à complexa natureza molecular das proteínas, o organismo precisa de mais tempo para dissociá-las. Consequentemente, são uma fonte mais lenta e duradoura de energia do que os carboidratos. Existem 20 aminoácidos. O organismo sintetiza alguns deles a partir de outros compostos orgânicos, mas não consegue sintetizar nove aminoácidos, os chamados aminoácidos essenciais. Estes devem ser consumidos na dieta. Todos precisam de oito desses aminoácidos: isoleucina, leucina, lisina, metionina, fenilalanina, treonina, triptofano e valina. Os lactentes também precisam de um nono aminoácido, a histidina. GORDURAS. Gorduras são moléculas complexas compostas por ácidos graxos e glicerol. O organismo precisa de gordura para se desenvolver e produzir energia. O corpo também usa a gordura para sintetizar os hormônios e outras substâncias necessárias para realizar as atividades do organismo (como as prostaglandinas). As gorduras são a fonte de energia mais lenta, porém mais eficiente. Cada grama de gordura fornece cerca de 9 calorias ao corpo, mais do que o dobro fornecido pelas proteínas ou pelos carboidratos. O organismo aproveita essa eficácia para armazenar qualquer excesso de energia em forma de gordura. O corpo armazena os excessos de gordura no abdômen (gordura omental) e sob a pele (gordura subcutânea), para ser usada quando precisar de mais energia. O organismo também pode acumular os excessos de gordura nos vasos sanguíneos e órgãos, onde podem bloquear o fluxo sanguíneo e danificar os órgãos, geralmente causando distúrbios graves."}
                />

                <AdviceCard
                    title={"A água e seus benefícios para o corpo"}
                    img={aguaImg}
                    descriptions={"Água ajuda a perder gordura ?"}
                    paragraph={"Quando bebemos bastante água nossos rins trabalham mais e, com isso, há menos retenção de líquido e sódio, principais responsáveis pelo inchaço. Além disso, com o corpo hidratado o volume de sangue aumenta e melhora a circulação. Muito mais do que matar a sede e hidratar seu corpo e organismo, beber água é essencial para o bom funcionamento dos rins. Ela ajuda a eliminar os resíduos e nutrientes desnecessários, como o sódio, ureia e toxinas do corpo. Tem coisa melhor? Beber água antes e depois das refeições ajuda muito a aumentar a sensação de saciedade. Ela também possui um grande papel no processo de digestão e melhora o funcionamento do intestino. Mas, é preciso lembrar que o líquido não é capaz de fazer todo trabalho sozinho. Pra que o resultado seja eficaz no emagrecimento, a prática de exercícios físicos regularmente e uma alimentação saudável também precisam ser consideradas. Além de manter uma alimentação com frutas, legumes e fibras, beber água também ajuda muito no funcionamento correto do intestino. Tudo isso porque o aumento da ingestão de líquido auxilia todos esses alimentos a realizarem suas funções, facilitando a formação do bolo fecal e os movimentos intestinais que eliminarão os excessos do nosso corpo. Então, comece a adotar este hábito para sua vida. Só assim você terá um corpo bem mais saudável e longe de problemas. A água ajuda a eliminar as impurezas do organismo e melhorar a circulação sanguínea. O resultado disso tudo é uma pele mais bonita. Quando estamos bem hidratados, as rugas se tornam menos perceptíveis, o aparecimento da celulite diminui e o equilíbrio celular melhora."}
                />


            </Grid>
            <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
                className="cardContainerAdvice"
            >
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"

                    className={classes.root}
                >
                    <ListItem button onClick={handleClick}>
                        <ListItemText primary="Nutricionistas" />
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                           <ItensList />
                        </List>
                    </Collapse>
                </List>
            </Grid>
            
        </Grid>
    )

}