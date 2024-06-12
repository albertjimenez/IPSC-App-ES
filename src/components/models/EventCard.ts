export default interface EventCard {
    title: string;
    gunType: 'Mini Rifle' | 'PCC' | 'Pistola';
    tags: [string];
    date: Date;
    location: string;
    level?: string;
    locationURL?: string;
    notes?: string;
    numStages?: number;
    telephoneNumber: number;
    slug: string;
    email?: string;
}

