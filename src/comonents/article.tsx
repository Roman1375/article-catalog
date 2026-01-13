import * as React from 'react';
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {formatDate} from "../utils/date.ts";
import type {ArticleType} from "../types";

const Article: React.FC<ArticleType> = (
    {
        id,
        published_at,
        summary,
        image_url,
        title
    }) => {
    return (
        <Box component="a" href={`/articles/${id}`}>
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
                        {title}
                    </Typography>

                    <Typography variant="body2" sx={{mb: "20px"}}>
                        {summary.slice(0, 100)}...
                    </Typography>

                    <Box className="read-more-link">
                        Read more <ArrowForwardIcon/>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default Article;