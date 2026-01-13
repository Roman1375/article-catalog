import * as React from 'react';
import {Link} from "react-router-dom";
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {formatDate} from "../utils/date.ts";
import Highlighter from "./highlighter.tsx";
import type {ArticleType} from "../types";

interface ArticleProps extends ArticleType {
    searchQuery?: string;
}

const Article: React.FC<ArticleProps> = (
    {
        id,
        published_at,
        summary,
        image_url,
        title,
        searchQuery,
    }) => {
    return (
        <Link to={`/articles/${id}`}>
            <Card className="article-card" elevation={0}>
                <CardMedia
                    component="img"
                    height="217"
                    image={image_url}
                    alt={`Image for ${title}`}
                />
                <CardContent className="card-content">
                    <Box sx={{
                        fontSize: 14,
                        fontWeight: 400,
                        display: 'flex',
                        alignItems: 'center',
                        color: '#606060',
                        mb: 3,
                    }}>
                        <CalendarTodayOutlinedIcon sx={{fontSize: 16, mr: 1}}/>
                        {formatDate(published_at)}
                    </Box>

                    <Typography variant="h5" sx={{mb: "20px"}}>
                        <Highlighter text={title} query={searchQuery ?? ""}/>
                    </Typography>

                    <Typography variant="body2" sx={{mb: "20px"}}>
                        <Highlighter text={summary.slice(0, 100) + '...'} query={searchQuery ?? ""}/>
                    </Typography>

                    <Box className="read-more-link">
                        Read more <ArrowForwardIcon/>
                    </Box>
                </CardContent>
            </Card>
        </Link>
    );
};

export default Article;