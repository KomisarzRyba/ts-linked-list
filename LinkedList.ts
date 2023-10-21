type Node<T> = {
    value: T;
    next?: Node<T>;
};

export class LinkedList<T> {
    length: number;
    head?: Node<T>;
    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    get = (at: number): T | undefined => {
        if (at >= this.length) {
            throw new Error("Cannot access element, out of bounds.");
        }
        if (at < 0) at += this.length;
        if (at === 0) return this.head?.value;

        let cur = this.head!;
        let idx = 0;
        while (idx < at) {
            cur = cur.next!;
            idx++;
        }
        return cur.value;
    };

    indexOf = (item: T): number => {
        if (this.length === 0) return -1;

        let cur = this.head;
        let idx = 0;
        while (cur) {
            if (cur.value === item) return idx;
            cur = cur.next;
            idx++;
        }

        return -1;
    };

    append = (item: T) => {
        const newNode: Node<T> = { value: item };
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return;
        }

        let cur = this.head;
        while (cur.next) {
            cur = cur.next;
        }
        cur.next = newNode;
    };

    prepend = (item: T) => {
        const newNode: Node<T> = { value: item };
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    };

    insert = (item: T, at: number) => {
        if (at > this.length) {
            throw new Error("Cannot insert, out of bounds.");
        }
        if (at < 0) at += this.length;
        if (at === this.length) {
            this.append(item);
            return;
        }
        if (at === 0) {
            this.prepend(item);
            return;
        }

        const newNode: Node<T> = { value: item };
        this.length++;

        let cur = this.head!;
        let idx = 0;
        while (idx < at - 1) {
            cur = cur.next!;
            idx++;
        }
        newNode.next = cur.next;
        cur.next = newNode;
    };
}

//class DoublyLinkedList<T> extends LinkedList<T> {}
