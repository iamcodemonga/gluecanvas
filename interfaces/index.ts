export interface User {
    id: string;
    name: string;
    dp: string;
    verified: boolean;
    email?: string;
    cover?: string;
    bio?: string;
    balance?: string
}

export interface Post {
    id: string;
    image: string;
    title: string;
    slug: string;
    category: string;
    price: number;
    likes: number;
    description?: string;
    creator?: User
}