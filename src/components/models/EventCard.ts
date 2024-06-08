export interface EventProps {
    name: string;
    tipoArma: 'Mini Rifle' | 'PCC' | 'Pistola';
    datetime: Date;
    url?: string;
    notes?: string;
    location: string;
    level?: string;
}
