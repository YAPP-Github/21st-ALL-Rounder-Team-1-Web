// 댓글
export interface ResponseDto {
  message: string;
  status: number;
  success: boolean;
}

export interface Response<T> extends ResponseDto {
  data: { data: T };
}
