import { NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';

export interface CountryItem {
    name: string;
    flag: string;
    area: number;
    population: number;
    capital: string;
    subregion: string;
    cioc: string;
    topLevelDomain: string;
}

export interface ColumnItem {
    name: string;
    sortOrder?: NzTableSortOrder;
    sortFn?: NzTableSortFn;
    sortDirections?: NzTableSortOrder[];
}