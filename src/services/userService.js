import { getRequest ,patchRequest,postRequest} from "./jwtService";

export const getAllUsers = async () => {
    try {
      const response = await getRequest('/user/all');
      console.log('Success:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error in getAllNotes:', error);
      throw error.response.data;
    }
  };


  export const promoteUser = async (payload) => {
      try {
        const response = await patchRequest('/user/promote', payload);
        console.log('Success:', response.data);
        return response.data;
      } catch (error) {
        console.error('Error in promoteUser:', error);
        throw error.response.data;
      }
    };

export const inviteUser = async (payload) => {
    try {
      const response = await postRequest('/invite-user',payload);
      console.log('Success:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error in getNotes:', error);
      throw error.response.data;
    }
  };