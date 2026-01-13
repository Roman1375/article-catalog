export interface ISocials {
    x?: string;
    youtube?: string;
    instagram?: string;
    linkedin?: string;
    mastodon?: string;

    [key: string]: string | undefined;
}

export interface IAuthor {
    name: string;
    socials: ISocials | null;
}

export type ArticleType = {
    id: number;
    title: string;
    authors: IAuthor[];
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: string;
    updated_at: string;
    featured: boolean;
}

export type ArticlesResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: ArticleType[];
}