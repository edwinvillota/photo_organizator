import {ValidationSettings} from '../models';

type IsValidActivityIdParams = {
  activityId: string;
  validations: ValidationSettings;
};

export const isValidActivityId = ({
  activityId,
  validations,
}: IsValidActivityIdParams) => {
  return RegExp(validations.activityId.regExp).test(activityId);
};
