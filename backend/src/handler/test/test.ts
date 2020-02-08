import { ResponseHandler } from '../../util/response-handler';

export const handler = async (event: any) => {
  try {
    return ResponseHandler({ statusCode: 200, body: { resp: event } });
  } catch (e) {
    console.log(e);
  }
};
