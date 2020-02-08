import { SessionService } from '../../util/session';

export const handler = async (event: any) => {
  if (!event.authorizationToken) {
    return {
      principalId: 'user',
      policyDocument: {
        Statement: [{ Resource: 'arn:aws:execute-api:*:*:*', Effect: 'Deny' }]
      }
    };
  }
  try {
    const sessionService = new SessionService();
    const session = await sessionService.getSession(event.authorizationToken);
    if (!session) {
      return {
        principalId: 'user',
        policyDocument: {
          Statement: [{ Resource: 'arn:aws:execute-api:*:*:*', Effect: 'Deny' }]
        }
      };
    } else {
      return {
        principalId: session.userId,
        policyDocument: {
          Version: '2012-10-17',
          Statement: [{ Resource: 'arn:aws:execute-api:*:*:*', Effect: 'Allow', Action: 'execute-api:Invoke' }]
        },
        context: {
          userId: session.userId,
          sessionId: session.sessionId
        }
      };
    }
  } catch (e) {
    console.log(e);
    return {
      principalId: 'user',
      policyDocument: {
        Statement: [{ Resource: 'arn:aws:execute-api:*:*:*', Effect: 'Deny' }]
      }
    };
  }
};
