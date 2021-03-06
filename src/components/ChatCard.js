import React from 'react';
import './ChatCard.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ButtonBase } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      maxWidth: 300,
      marginLeft: 40
    },
    media: {
      height: 140,
    },
  });

function ChatCard({title,formattedText,img,button}) {
    const classes = useStyles();
    // console.log('buttons', button[0].title)

    return (
        <div className="ChatCard">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={img}
                    title="Ishan Arora"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {formattedText}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {
                        button?
                        button.map((b)=>
                                <Button size="small" color="primary">
                            <a href={b.openUriAction.uri} target="_blank">

                                    {b.title}
                             </a>

                                </Button>
                        )
                        :"my name is anthonh"
                    }
                
                
            </CardActions>
            </Card>
        
        </div>
    )
}

export default ChatCard
