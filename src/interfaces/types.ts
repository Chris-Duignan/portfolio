export interface Record {
    id: string;
    createdTime: string;
    fields: Fields;
}

export interface Fields {
    github: string;
    name: string;
    description: string;
    hosted: string;
    techStack: string[];
    images: ImageInterface[];
}

export interface ImageInterface {
    id: string;
    width: number;
    height: number;
    url: string;
    filename: string;
    size: number;
    type: string;
    thumbnails: {
        small: Thumbnail;
        large: Thumbnail;
        full: Thumbnail;
    }
}

export interface Thumbnail {
        url: string;
        width: number;
        height: number;
}