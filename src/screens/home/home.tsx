import AppLayout from '../../components/containers/appLayout'
import HomeHeader from './homeHeader';
import {UserTable} from '../userTable/userTable' ;
import { UserContextProvider } from "./homeUserContext";

function Home() {
  return (
 <UserContextProvider>
 <AppLayout/>
   <HomeHeader/>
   <UserTable/>
</UserContextProvider>
   
  );
}

export default Home;
