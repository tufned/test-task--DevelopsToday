import { redirect } from 'next/navigation';
import { routes } from '~/constants/routes';

const HomePage = () => {
  redirect(routes.filter);
};

export default HomePage;
