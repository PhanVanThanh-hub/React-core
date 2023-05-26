export interface ResponseDataApi<T> {
  data(data: any): unknown;
  response: { data: T };
}

export interface ResponseApi<T> {
  response: any;
  data: T;
}

export interface ListResponseFilter<T> {
  response: any;
  data: { results: T[]; count?: number; order?: T[] };
}

export interface PaginationResponse<T> {
  data(data: any): unknown;
  response: {
    data: { count: number; results: T[]; next: string; previous: string };
  };
}

export interface SuccessResponse {
  data: {
    filter(arg0: (group: any) => any): unknown; message: string; title: string 
};
  status: number;
}

export interface ErrorResponse {
  response: { data: any; status: number };
}

export interface ModalProps {
  open: boolean;
  handleClose: any;
}
