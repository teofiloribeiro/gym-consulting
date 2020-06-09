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
                className="textStyle"
                title={"O que é atividade física"}
                img={atividadeFisicaImg}
                descriptions={"O que é atividade física? E quais são as opções de atividades?"}
                paragraph={"Segundo a Organização Mundial da Saúde (OMS), a atividade física é definida como qualquer movimento corporal produzido pelos músculos esqueléticos, que requer dasto de energia. Exercício é uma subcategoria da atividade física que é planejada, estruturada e proposital."}
                paragraph2={"Exitem inúmeras atividades para movimentar seu corpo de acordo com seu estilo de vida como: Alongamento, Ballet clássico, Bicicleta, Caminhada, Capoeira, Circuitos, Corrida, Crossfit, Dança, Escalada, Ginástica olímpica, Handball, Hidroginástica, Insanity, Jiu Jitsu, Natação, Patins, Pilates, Pole dance, Tênis, Vôlei, Yoga, Zumba entre outros."}
            />

            <AdviceCard
                className="textStyle"
                title={"O que é e quais benefícios da dieta flexível?"}
                img={dietaFlexivelImg}
                descriptions={"A dieta flexível é um  mito ?"}
                paragraph={"A dieta flexível If it fit your macros, que significa (se couber nos seus macros[nutrientes]), calcula a quantidade de macronutrientes como proteínas, gorduras, carboidratos e fibras que uma pessoa pode ingerir por dia."}
                paragraph2={"Ela é similar à dieta dos pontos, porém, são os macronutrientes e as fibras que são levados em conta. Uma vantagem desta dieta é que não precisa seguir um cardápio."}
                paragraph3={"Apesar de não levar em conta os micronutrientes, este método já dá um passo importante ao lembrar que não são apenas as calorias que devem ser levadas em conta."}
            />
            <AdviceCard
                
                title={"Como deixar o treino mais eficaz "}
                img={dicasTreinoImg}
                descriptions={"Algumas dicas de como deixar seu treino mais eficaz para o ganho de massa muscular e emagrecimento"}
                paragraph={"REALIZE O MOVIMENTO ATÉ A FALHA. É importante ter em mente que nenhum tipo de exercício possui uma receita de bolo. O ideal é que faça o movimento até que o músculo não aguente mais."}
                paragraph2={"AUMENTA A CARGAR GRADUALMENTE. O nosso corpo sempre tende a se habituar a uma determinada situação. Por causa disso, tente sempre aumentá-la para ter um bom desempenho e resultado."}
                paragraph3={"DESCANSE. Nenhum treino de musculação ou mesmo atividades aeróbicas possuem um bom rendimento se não houver descanso compatível com o esforço."}
            />
            <Grid
                className="cardContainerAdvice"
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
            >

                <AdviceCard
                    className="textStyle"
                    title={"Diferenças entre academias crossfit e musculação"}
                    img={academiaCrossfit}
                    descriptions={"Tem diferênça entre as duas modalidades?"}
                    paragraph={" Enquanto em academias encontramos esteiras, máquinas para abdominais, treinos de perna, agachamento, etc. As academias de crossfit apresentam acessórios como barras, anilhas, argolas, bolas, kettlebells, entre outros. Além disso, as academias de crossfit permitem ao aluno treinar e aprender técnicas de diversas modalidades numa mesma aula. "}
                    paragraph2={"Podemos ter, por exemplo, num mesmo treino, movimentos de ginástica, levantamento de peso e corrida. A musculação não é um ambiente tão abrangente."}
                    paragraph3={"A diferença principal está na prática em grupo. Em academias de musculação, as aulas serão geralmente individuais, enquanto as aulas de crossfit são sempre realizadas para grupos."}
                />

                <AdviceCard
                    className="textStyle"
                    title={"Proteínas, Carboidratos e Gorduras"}
                    img={alimentacao}
                    descriptions={"O que é ? e para que serve??"}
                    paragraph={"Carboidratos são biomoléculas presente em maior abundância na natureza. Eles são essenciais para o funcionamento do corpo, tanto na questão energética - sendo a principal fonte de energia para o corpo realizar as atividades cotidianas. Os carboidrato são uma das maiores fontes de energia para o nosso corpo, porém, a maior delas é a glicose."}
                    paragraph2={"As proteínas são substâncias formadas por um conjunto de aminoácidos ligado entre si. São substâncias que exercem as mais diversas funções no organismo."}
                    paragraph3={"Gorduras são moléculas complexas compostas por ácidos graxos e glucerol. O organismo precisa de gordura para se desenvolver e produzir energia."}
                />

                <AdviceCard
                    className="textStyle"
                    title={"A água e seus benefícios para o corpo"}
                    img={aguaImg}
                    descriptions={"Água ajuda a perder gordura ?"}
                    paragraph={"Quando bebemos bastante água nossos rins trabalham mais e, com isso, há menos retenção de líquido e sódio, principais responsáveis pelo inchaço. Além disso, com o corpo hidratado o volume de sangue aumenta e melhora a circulação. Muito mais do que matar a sede e hidratar seu corpo e organismo, beber água é essencial para o bom funcionamento dos rins."}
                    paragraph2={"Ela ajuda a eliminar os resíduos e nutrientes desnecessários, como o sódio, ureia e toxinas do corpo. Ela também possui um grande papel no processo de digestão e melhora o funcionamento do intestino. Tudo isso porque o aumento da ingestão de líquido auxilia todos esses alimentos a realizarem suas funções, facilitando a formação do bolo fecal e os movimentos intestinais que eliminarão os excessos do nosso corpo."}
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