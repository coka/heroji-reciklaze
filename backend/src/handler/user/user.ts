import { APIGatewayEvent } from 'aws-lambda';
import { ResponseHandler, ErrorHandler } from '../../util/response-handler';
import { UserService } from '../../service/user.service';

const userService = new UserService();

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
    const newUser = await userService.logout(JSON.parse(event.body));
    return ResponseHandler(newUser, 200);
  } catch (error) {
    return ErrorHandler(error);
  }
};
