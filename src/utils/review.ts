export const validationSelector = (
  listLength: number | undefined,
  surveyObject: Record<number, number>,
) => {
  const surveyObjectKeys = Object.keys(surveyObject);

  return listLength === surveyObjectKeys.length;
};
