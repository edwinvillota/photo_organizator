import React from 'react';
import {BasicLayout} from '../../layouts';
import {Button} from '../../components/atoms';
import {ActivitiesList} from '../../components/organisms';
import {useActivitiesRecord} from '../../hooks';
import {styles} from './ActivitiesRecord.styles';

const ActivitiesRecord: React.FC = () => {
  const {activities, clearActivities} = useActivitiesRecord();

  return (
    <BasicLayout>
      <ActivitiesList activities={activities} />
      <Button
        type="Error"
        disabled={!activities.length}
        onPress={() => clearActivities()}
        style={styles.button}>
        Borrar registro
      </Button>
    </BasicLayout>
  );
};

export default ActivitiesRecord;
