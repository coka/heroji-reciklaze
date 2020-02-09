import { ResponseHandler, ErrorHandler } from '../../util/response-handler';
import { PickupService } from '../../service/pickup/pickup.service';
import { UserRepository } from '../../repository/user/user.repository';
import { APIGatewayEvent } from 'aws-lambda';

const pickupService = new PickupService();
const userRepository = new UserRepository();

export const get = async (event: APIGatewayEvent) => {
  try {
    const user = await userRepository.findById(event.requestContext.authorizer.userId);
    const pickups = await pickupService.getByUserType(user);
    return ResponseHandler({ pickups }, 200);
  } catch (error) {
    return ErrorHandler(error);
  }
};

export const post = async (event: APIGatewayEvent) => {
  try {
    const user = await userRepository.findById(event.requestContext.authorizer.userId);
    const pickup = await pickupService.post(JSON.parse(event.body), user);
    return ResponseHandler(pickup, 200);
  } catch (error) {
    return ErrorHandler(error);
  }
};

export const remove = async (event: APIGatewayEvent) => {
  try {
    const user = await userRepository.findById(event.requestContext.authorizer.userId);
    const pickup = await pickupService.remove(event.pathParameters.id, user);
    return ResponseHandler(pickup, 200);
  } catch (error) {
    return ErrorHandler(error);
  }
};

export const accept = async (event: APIGatewayEvent) => {
  try {
    const user = await userRepository.findById(event.requestContext.authorizer.userId);
    const pickup = await pickupService.accept(event.pathParameters.id, user);
    return ResponseHandler(pickup, 200);
  } catch (error) {
    return ErrorHandler(error);
  }
};

export const decline = async (event: APIGatewayEvent) => {
  try {
    const user = await userRepository.findById(event.requestContext.authorizer.userId);
    const pickup = await pickupService.decline(event.pathParameters.id, user);
    return ResponseHandler(pickup, 200);
  } catch (error) {
    return ErrorHandler(error);
  }
};
