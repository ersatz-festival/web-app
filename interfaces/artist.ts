export interface Artist {
    clip: string;
    day: string;
    description: string;
    erste: boolean;
    genre: string;
    name: string;
    pictureCover: string;
    pictureProfile: string;
    public: boolean;
    slug: string;
    socialNetworks: {
        instagram: [string];
        spotify: string;
    };
    soundcloud: string;
}
