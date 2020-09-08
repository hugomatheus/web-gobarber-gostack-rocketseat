import React from 'react';
import { useAuth } from '../../hooks/auth';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  return <div>Dashboard</div>;
};

export default Dashboard;
