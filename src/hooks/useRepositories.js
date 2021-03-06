/* eslint-disable no-unused-vars */
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({orderBy,orderDirection,searchKeyword}) => {
    
    const {loading, error, data, refetch}=  useQuery(GET_REPOSITORIES, {
      fetchPolicy: "cache-and-network",
      variables:{orderBy,orderDirection,searchKeyword}
      
    });

     if (data){
      const repositories=data.repositories;
      return repositories;
    }
   
  };
  
   
  
  export default useRepositories;