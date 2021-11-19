export interface TableProps<GenericData> {
    columns: Array<keyof GenericData>;
    data: GenericData[];
}