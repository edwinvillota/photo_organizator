import React from 'react';
import {BasicLayout} from '../../layouts';
import {Text} from '../../components/atoms';
import {Props} from './Error.types';

const Error: React.FC<Props> = ({route}) => {
  return (
    <BasicLayout>
      <Text type="Bold">{route.params.error}</Text>
    </BasicLayout>
  );
};

export default Error;
