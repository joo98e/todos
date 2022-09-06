type ObjectWithUniqueId = {
  uniquePropertyName: string;
  [key: string]: any;
};

interface Params {
  targetArray: ObjectWithUniqueId[];
  uniquePropertyName: string;
}

const convertArrayToObjectById = ({
  targetArray,
  uniquePropertyName,
}: Params) => {
  const uniqueIdExist = targetArray.every((item) => {
    return Object.keys(item).includes(uniquePropertyName);
  });
  let state = {};

  if (!uniqueIdExist) return "uniquePropertyName은 반드시 존재해야 합니다.";

  return state;
};

export default convertArrayToObjectById;
