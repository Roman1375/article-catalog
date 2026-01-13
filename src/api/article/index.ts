import axios from 'axios';
import type {ArticlesResponse, ArticleType} from "../../types";

const BASE_URL = 'https://api.spaceflightnewsapi.net/v4/articles' as const;

export async function getAllArticles() {
    const response = await axios.get(`${BASE_URL}?limit=21`);
    const data: ArticlesResponse = response.data;
    return data;
}

export async function getArticleById(id: number) {
    const response = await axios.get(`${BASE_URL}/${id}`);

    const data: ArticleType = response.data;

    return data;
}