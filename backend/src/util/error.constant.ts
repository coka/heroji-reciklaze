export const ERROR_MESSAGES = {
  DEFAULT: {
    code: 417,
    message: 'Some default server error'
  },
  USER: {
    INVALID_PASSWORD_LENGTH: {
      code: 422,
      message: 'Invalid password length'
    },
    ALREADY_EXISTS: {
      code: 400,
      message: 'User already exists in database'
    },
    NOT_EXIST: {
      code: 403,
      message: 'User does not exist'
    },
    MISSING_RESOURCES: {
      code: 403,
      message: 'Missing resources for collector'
    },
    INVALID_ACTION: {
      code: 404,
      message: 'User does not have permission for this'
    }
  },
  REQUEST: {
    MISSING_PARAMETER: {
      code: 422,
      message: 'Missing parameter in request'
    }
  },
  SESSION: {
    NOT_CREATED: {
      code: 400,
      message: 'Session not created'
    }
  },
  RESOURCE: {
    NOT_FOUND: {
      code: 404,
      message: 'Resource not found'
    }
  }
};
