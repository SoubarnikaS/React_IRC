import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(6),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Home = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx = {{my:10}}>
                    <Grid item xs={6}>
                        <Item sx={{ backgroundColor: 'pink', color: 'black' }}>Hello</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{ backgroundColor: 'lightblue', color: 'black' }}>Hola</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ backgroundColor: 'lightgreen', color: 'black' }}>Vanakkam</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ backgroundColor: 'lightcoral', color: 'black' }}>Konnichiwa</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item sx={{ backgroundColor: 'lightsalmon', color: 'black' }}>Bonjour</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{ backgroundColor: 'lightyellow', color: 'black' }}>Ni Hao</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item sx={{ backgroundColor: 'lightgray', color: 'black' }}>Ciao</Item>
                    </Grid>
                </Grid>
            </Box>
        </>

    )
}

export default Home;