import { CustomError } from './custom-error';
import { ERROR_MESSAGES } from './error.constant';

export const ResponseHandler = (body: any, code = 200) => {
  return {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    statusCode: code
  };
};

export const ErrorHandler = (error: CustomError) => {
  console.log(error);
  if (error instanceof CustomError) {
    console.log('is custom error');
    return {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message, code: error.code }),
      statusCode: error.code
    };
  } else {
    console.log('is unexpected');
    return {
      headers: { 'Content-Type': 'application/json' },
      //@ts-ignore
      body: JSON.stringify({ error: error.message }),
      statusCode: 500
    };
  }
};
