const getProduct = async (id) => {
  try {
    const response = await fetch(`your-api-endpoint/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text(); 
    
    if (!text) {
      throw new Error('Empty response received');
    }
    
    const data = JSON.parse(text); 
    return data;
    
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};