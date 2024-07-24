const nameRegex = /^[a-zA-Zà-ÿÀ-ÿ\u00C0-\u00FF\u0100-\u017F' -]+$/;

const validName = (name) => {
  return nameRegex.test(name);
};

const isValidDob = (date) => {
    const today = new Date();
    const eighteenYearsAgo = new Date(today.setFullYear(today.getFullYear() - 18));
    return date > eighteenYearsAgo;
  };
  
  const isValidStartDate = (date) => {
    const today = new Date();
    return date > today;
  };
  

  const isValidStreet =(str) => {
    const streetNameRegex = /^[a-zA-Z0-9\s.,'-]+$/
      return streetNameRegex.test(str); 
  }

  const isUsZipCode = (str)=>{
    const usZipCodeRegex = /^\d{5}(-\d{4})?$/
    return usZipCodeRegex.test(str);
  }