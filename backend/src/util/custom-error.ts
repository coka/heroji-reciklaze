export class CustomError extends Error {
  public code: number;
  public message: string;
  constructor(error: { code: number; message: string }) {
    super(error.message);
    this.code = error.code;
    this.message = error.message;
  }
}
