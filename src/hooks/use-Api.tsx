const useApi = async (url: string): Promise<any> => {
   try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Error to connect in the API');
        }

        return await response.json();
   }
   catch(error) {
        return 'Erro';
   }
};

export default useApi;