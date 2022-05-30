export interface IResponseWrapped<T> {
    response: T,
    errorSource?: 'DataBase' | 'Server',
    code: string,
    name: string,
    message: string
}