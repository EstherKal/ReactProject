
import { useNavigate } from 'react-router';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Recipe.css'
import { getComments, getRecipes } from './api';
import { useState } from 'react';
import { setCurrentRecipe } from './redux/Action';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { ArrowRight } from '@mui/icons-material';
import { getIngredientToRecipe } from './api';

const ExpandMore = styled((props) => {


    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const Recipe = (props) => {
    const nav = useNavigate()
    const dis = useDispatch()
    const a = false
    const { id, pic, preparationTime, recipeName, note, userName, levelName, categoryName, instruction, details } = props
    const [expanded, setExpanded] = React.useState(false);
    const [ListR, setListR] = useState()
    const [listI, setListI] = useState()
    useEffect(() => {
        getRecipes()
            .then((x) => {
                setListR(x.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
        {
            details &&
            getI(id)
        }

    });

    const handleExpandClick = () => {
        getC(id)
        setExpanded(!expanded);
    };
    const sendAll = () => {
        const recipe = ListR.filter(r => r.id === id);
        dis(setCurrentRecipe(recipe))
        nav(`/Details`)
    }
    const [listC, setListC] = useState()
    const getC = (id) => {
        getComments(id)
            .then(x => {
                setListC(x.data)
                console.log(x.data)
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    const getI = (id) => {
        getIngredientToRecipe(id)
            .then((i) => {
                setListI(i.data)
            })
            .catch((err) => {
                console.log(err.message);
            })
    }
    return <>
        <Card sx={{ maxWidth: 500 }} className='recipe'>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
                        {userName[0]}
                    </Avatar>
                }
                title={<h3>{recipeName}</h3>}
                subheader={<h3>editor:{userName}</h3>}
            />
            <img src={`${process.env.PUBLIC_URL}/image/pic${pic}.jpg`} id="img"></img>
            <CardContent>
            </CardContent>
            <CardActions disableSpacing>
                {!details ? <>
                    <Button endIcon={<ArrowRight />} aria-label="add to favorites" onClick={() => sendAll()}>deatails
                    </Button>
                </> : <></>}
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <FavoriteIcon />
                </ExpandMore>
            </CardActions>
            {details ? <>
                <Typography paragraph class="title">category:</Typography>
                <Typography paragraph>{categoryName} </Typography>
                <Typography paragraph class="title">level:</Typography>
                <Typography paragraph>{levelName}</Typography>
                <Typography paragraph class="title">peparation time:</Typography>
                <Typography paragraph>
                    {preparationTime}
                </Typography>
                <Typography paragraph class="title">insttrucions::</Typography>
                <Typography paragraph>
                    {instruction}
                </Typography>
                <Typography paragraph class="title">note:</Typography>
                <Typography>
                    {note}
                </Typography>
                <Typography paragraph class="title">ingredients:</Typography>
                <Typography>
                    {listI && listI.map((x) => <h6>{x.ingredientName}</h6>)}
                </Typography>

            </> : <></>}
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph class="title">comments:</Typography>
                    <Typography>
                        {listC && listC.map((x) => <h6>{x.comment}</h6>)}
                    </Typography>


                </CardContent>
            </Collapse>
        </Card>

    </>
}
