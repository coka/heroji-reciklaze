import * as AWS from 'aws-sdk';
AWS.config.update({ region: 'eu-central-1' });

export class DynamoDatabaseService {
  private dynamodb = new AWS.DynamoDB.DocumentClient();
  constructor() {}

  insertIntoTable(tableName: string, data: any) {
    return new Promise((resolve, reject) => {
      this.dynamodb
        .put({
          Item: data,
          TableName: tableName
        })
        .promise()
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  getOneFromTable<Type = any>(tableName: string, id: any): Promise<Type> {
    return new Promise((resolve, reject) => {
      this.dynamodb
        .get({ Key: { id }, TableName: tableName })
        .promise()
        .then(res => {
          resolve((res.Item as Type) || null);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  deleteOneFromTable(tableName: string, id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.dynamodb
        .delete({ Key: { id }, TableName: tableName })
        .promise()
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}
