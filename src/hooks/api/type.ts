export interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Infinite {
  pageable: Pageable;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  last: boolean;
  empty: boolean;
}
