import {format} from 'date-fns/esm';
import {useCallback, useEffect, useState} from 'react';
import {ActivitiesStorage} from '../storage';
import {Activity} from '../models';

const getActivitiesRecord = async (): Promise<Activity[]> => {
  try {
    const record: Activity[] = await ActivitiesStorage.load({
      key: 'activities',
    });

    return record ?? [];
  } catch (e) {
    return [];
  }
};

type UseActivitiesRecordReturn = {
  activities: Activity[];
  addActivity: AddActivity;
  clearActivities: ClearActivities;
};

type AddActivity = (activityId: string) => void;
type ClearActivities = () => void;

const useActivitiesRecord = (): UseActivitiesRecordReturn => {
  const [activities, setActivities] = useState<Activity[]>([]);

  const updateActivities = async () => {
    const record = await getActivitiesRecord();
    setActivities(record);
  };

  useEffect(() => {
    const loadActivities = async () => {
      await updateActivities();
    };

    loadActivities();
  }, []);

  const addActivity = useCallback<AddActivity>(async activityId => {
    try {
      const actualRecord = await getActivitiesRecord();
      ActivitiesStorage.save({
        key: 'activities',
        data: [
          ...actualRecord,
          {
            id: activityId,
            date: format(new Date(), 'dd-MM-yyyy'),
          },
        ],
      });
      await updateActivities();
    } catch (e) {
      console.log(e);
    }
  }, []);

  const clearActivities = useCallback<ClearActivities>(async () => {
    try {
      ActivitiesStorage.save({
        key: 'activities',
        data: [],
      });
      await updateActivities();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {activities, addActivity, clearActivities};
};

export default useActivitiesRecord;
