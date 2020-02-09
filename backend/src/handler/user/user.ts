import { APIGatewayEvent } from 'aws-lambda';
import { ResponseHandler, ErrorHandler } from '../../util/response-handler';
import { UserService } from '../../service/user/user.service';
import { UserRepository } from '../../repository/user/user.repository';

const userService = new UserService();
const userRepository = new UserRepository();

export const register = async (event: APIGatewayEvent) => {
  try {
    const newUser = await userService.create(JSON.parse(event.body));
    return ResponseHandler(newUser, 200);
  } catch (error) {
    return ErrorHandler(error);
  }
};

export const login = async (event: APIGatewayEvent) => {
  try {
    const newUser = await userService.login(JSON.parse(event.body));
    return ResponseHandler(newUser, 200);
  } catch (error) {
    return ErrorHandler(error);
  }
};

export const logout = async (event: APIGatewayEvent) => {
  try {
    const newUser = await userService.logout(event.requestContext.authorizer);
    return ResponseHandler(newUser, 200);
  } catch (error) {
    return ErrorHandler(error);
  }
};

export const get = async (event: APIGatewayEvent) => {
  try {
    const user = await userRepository.findById(event.requestContext.authorizer.userId);
    return ResponseHandler(user, 200);
  } catch (error) {
    return ErrorHandler(error);
  }
};

export const update = async (event: APIGatewayEvent) => {
  try {
    const updatedUser = await userService.update(JSON.parse(event.body), event.requestContext.authorizer.userId);
    return ResponseHandler(updatedUser, 200);
  } catch (error) {
    return ErrorHandler(error);
  }
};
