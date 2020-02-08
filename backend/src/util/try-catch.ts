export const TryCatch = (errorCallback?: (error: any, ...originalArguments: any[]) => any) => (
  classConstructor: any,
  methodName: string,
  propertyDescriptor: PropertyDescriptor
) => {
  const oldMethod = propertyDescriptor.value;
  propertyDescriptor.value = async function(...args: any[]) {
    try {
      const functionReturn = await oldMethod.apply(this, [...args]);
      return functionReturn;
    } catch (error) {
      if (errorCallback) {
        return errorCallback.apply(this, [error, ...args]);
      }
      throw error;
    }
  };
  return propertyDescriptor;
};
