export type GeneralResponse = {
    count: number;
    next: string | any;
    previous: string | any;
    results: [];
};

export const GeneralResponseInitial: GeneralResponse = {count: 0, next: null, previous: null, results: []};