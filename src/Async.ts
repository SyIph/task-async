import { resolve } from 'dns';

/*
Создайте функцию mock, которая принимает на вход аргумент number (количество миллисекунд) и возвращает Promise,
который завершится через заданное количество миллисекунд со значением, переданным в аргумент.
 */
export function mock(ms: number): Promise<number> {
    return new Promise((res) => {
        setTimeout(() => {
            res(ms);
        }, ms);
    });
}

/*
Перепишите функцию getData так, чтобы она выполнялась быстрее.
 */
export function getData(): Promise<number[]> {
    const result: number[] = [];

    return Promise.all([
        mock(100).then((data1) => {
            return data1;
        }),
        mock(200).then((data2) => {
            return data2;
        }),
        mock(300).then((data3) => {
            return data3;
        }),
    ]);
}

/*
Исправьте функцию catchException так, чтобы блок try/catch обрабатывал
завершенный с ошибкой Promise и возвращал текст ошибки.
 */
export async function catchException(): Promise<string | undefined> {
    try {
        var rej = await Promise.reject(new Error('my error'));
    } catch (err: any) {
        return err.message;
    }
}
