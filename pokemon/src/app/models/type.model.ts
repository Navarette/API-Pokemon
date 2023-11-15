export interface TypeList {
    count: number
    next: any
    previous: any
    results: Type[]
}

export class Type {
    name: string = '';
    url: string = ''
}