export interface productDTO {
    id: number,
    title: string,
    description: string,
    price: number,
    // discountPercentage: number,
    // rating: number,
    // stock: number

    thumbnail: string;
}

export interface landingPageDTO {
    products?: productDTO[];
    limit: number;
    skip: number;
    total: number;
}