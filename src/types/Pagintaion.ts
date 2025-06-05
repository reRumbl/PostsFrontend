interface PaginationParams {
    limit: number;
    offset: number;
}


interface PaginationInfo extends PaginationParams {
    count: number;
}


interface DataListResponse<T> {
    data: T[];
    pagination: PaginationInfo;
}


export type { PaginationParams, PaginationInfo, DataListResponse };
