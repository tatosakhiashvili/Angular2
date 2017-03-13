export class Node {
    id: number;
    name: string;
    children: Node[];

    constructor(id: number, name: string, children: Node[]) {
        this.id = id;
        this.name = name;
        this.children = children;
    }
}