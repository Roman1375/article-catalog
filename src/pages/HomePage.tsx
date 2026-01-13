import * as React from 'react';
import {
    Container,
    Grid,
    TextField,
    Typography,
    Box,
    InputAdornment
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {getAllArticles} from "../api/article";
import Article from "../comonents/article.tsx";
import {useQuery} from "../hooks/useQuery.ts";
import type {ArticlesResponse} from "../types";
import '../styles/home.css';

const HomePage: React.FC = () => {
    const {data, error, isLoading} = useQuery<ArticlesResponse>(getAllArticles);

    const articles = data?.results;

    return (
        <Container maxWidth="lg" sx={{py: "50px"}}>
            <Box sx={{mb: 5}}>
                <Typography sx={{mb: "10px", fontWeight: '600'}}>
                    Filter by keywords
                </Typography>
                <TextField
                    fullWidth
                    placeholder="The most successful IT companies in 2020"
                    sx={{maxWidth: 600, mb: 5, boxShadow: '0px 8px 24px #0000000D'}}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
                />
                <Typography sx={{fontWeight: '600', pb: 1, borderBottom: '1px solid #E0E0E0'}}>
                    Results: {articles?.length}
                </Typography>
            </Box>

            <Grid container spacing={5}>
                {articles?.map((article) => (
                    <Grid size={{xs: 12, sm: 6, lg: 4}} key={article.id}>
                        <Article {...article}/>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default HomePage;