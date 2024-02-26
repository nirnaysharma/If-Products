export interface productDTO {
    id: number,
    title: string,
    description: string,
    price: number,
    //discountPercentage: number,
    thumbnail: string;
}

export interface landingPageDTO {
    products?: productDTO[];
    limit: number;
    skip: number;
    total: number;
}