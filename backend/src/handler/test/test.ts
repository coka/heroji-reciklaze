export const handler = async (event: any) => {
  try {
    return {
      statusCode: 200,
      body: 'wow'
    };
  } catch (e) {
    console.log(e);
  }
};
