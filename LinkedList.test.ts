import { describe, expect, test } from "bun:test";
import { LinkedList } from "./LinkedList";

describe("Singly Linked List", () => {
    test("Head is undefined", () => {
        const list = new LinkedList<number>();
        expect(list.head).toBeUndefined();
    });

    test("Get throws when empty", () => {
        const list = new LinkedList<number>();
        expect(() => list.get(0)).toThrow();
    });

    test("Append", () => {
        const list = new LinkedList<number>();
        list.append(1);
        expect(list.head).toBeDefined();
        expect(list.head?.value).toBe(1);
    });

    test("Prepend", () => {
        const list = new LinkedList<number>();
        list.append(1);
        list.prepend(0);
        expect(list.head).toBeDefined();
        expect(list.head?.value).toBe(0);
        expect(list.head?.next?.value).toBe(1);
    });

    test("Get returns", () => {
        const list = new LinkedList<number>();
        list.append(1);
        list.prepend(0);
        expect(list.get(0)).toBe(list.head!.value);
        expect(list.get(1)).toBe(1);
    });

    test("Insert", () => {
        const list = new LinkedList<number>();
        list.append(1);
        list.prepend(0);
        list.insert(0.5, 1);
        expect(list.get(1)).toBe(0.5);
    });

    test("Length", () => {
        const list = new LinkedList<number>();
        expect(list.length).toBe(0);
        list.append(1);
        list.append(1);
        list.append(1);
        expect(list.length).toBe(3);
    });

    test("IndexOf", () => {
        const list = new LinkedList<number>();
        expect(list.indexOf(123)).toBe(-1);
        list.append(1);
        list.append(2);
        list.append(3);
        expect(list.indexOf(1)).toBe(0);
        expect(list.indexOf(2)).toBe(1);
        expect(list.indexOf(3)).toBe(2);
    });
});
