import { DynamoDatabaseService } from './dynamodb';
import * as uuid from 'uuid';
import { CustomError } from './custom-error';
import { ERROR_MESSAGES } from './error.constant';

export class SessionService {
  private dynamodb = new DynamoDatabaseService();
  private tableName = 'hackaton_session';
  async getSession(sessionId: string) {
    return this.dynamodb.getOneFromTable<ISession>(this.tableName, sessionId);
  }

  async createSession(userId: string) {
    try {
      const userSession: ISession = {
        createdAt: new Date().getTime(),
        sessionId: uuid(),
        ttl: new Date(new Date().getTime() + 60 * 24 * 60000).getTime(),
        userId
      };
      await this.dynamodb.insertIntoTable(this.tableName, userSession);
      return userSession;
    } catch (error) {
      console.log(error);
      throw new CustomError(ERROR_MESSAGES.SESSION.NOT_CREATED);
    }
  }

  async deleteSession(sessionId: string) {
    return this.dynamodb.deleteOneFromTable(this.tableName, sessionId);
  }
}
