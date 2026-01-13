import {useMemo} from 'react';
import type {ArticleType} from '../types';

export const useFilteredArticles = (articles: ArticleType[] | undefined, searchQuery: string) => {
    return useMemo(() => {
        if (!articles) return [];
        if (!searchQuery.trim()) return articles;

        const keywords = searchQuery
            .toLowerCase()
            .split(' ')
            .filter((word) => word.length > 0);

        return articles
            .map((article) => {
                let priority = 0;
                const titleLower = article.title.toLowerCase();
                const summaryLower = article.summary.toLowerCase();

                keywords.forEach((word) => {
                    if (titleLower.includes(word)) priority += 5;
                    if (summaryLower.includes(word)) priority += 1;
                });

                return {...article, priority};
            })
            .filter((article) => article.priority > 0)
            .sort((a, b) => b.priority - a.priority);
    }, [articles, searchQuery]);
};