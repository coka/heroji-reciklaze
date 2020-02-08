import { ResourceRepository } from '../../repository/resource/resource.repository';
import { ResponseHandler, ErrorHandler } from '../../util/response-handler';

export const handler = async () => {
  try {
    const resourceRepository = new ResourceRepository();
    const resources = await resourceRepository.findAll();
    return ResponseHandler({ resources }, 200);
  } catch (error) {
    return ErrorHandler(error);
  }
};
