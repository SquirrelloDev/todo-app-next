export enum SortType {
    ALL,
    ACTIVE,
    COMPLETED
}
export type Todo = {
    id: string,
    name: string | undefined,
    status: "active" | "completed"
}
export type TodoPostData = {
 name: string | undefined;
 status: string
}