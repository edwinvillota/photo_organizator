import React from 'react';
import {SectionList, SectionListData} from 'react-native';
import {Activity} from '../../../models';
import {IActivitiesList} from './ActivitiesList.types';
import {ActivitiesListItem, ActivitiesListHeader} from './components';
import {Text} from '../../atoms';

const dataBySection = (activities: Activity[]): SectionListData<Activity>[] => {
  const activitiesByDate: Record<string, Activity[]> = {};

  activities.forEach(activity => {
    activitiesByDate[activity.date] = activitiesByDate[activity.date]
      ? [...activitiesByDate[activity.date], activity]
      : [activity];
  });

  const compareFunction = (a: string, b: string) => {
    const dateA = new Date(a) as any;
    const dateB = new Date(b) as any;

    return dateB - dateA;
  };

  const availableDates = Object.keys(activitiesByDate);
  const sortedDates = [...availableDates].sort(compareFunction);

  const sections: SectionListData<Activity>[] = sortedDates.map(date => ({
    title: date,
    data: activitiesByDate[date],
  }));

  return sections;
};

const ActivitiesList: React.FC<IActivitiesList> = ({activities}) => {
  const data = dataBySection(activities);

  return (
    <SectionList<Activity>
      sections={data}
      keyExtractor={(item, index) => item.id + index}
      renderItem={item => <ActivitiesListItem activity={item.item} />}
      renderSectionHeader={({section: {title}}) => (
        <ActivitiesListHeader title={title} />
      )}
    />
  );
};

export default ActivitiesList;
