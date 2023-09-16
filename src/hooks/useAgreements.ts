import { signUpTerms } from '@constant/terms';
import { useState } from 'react';

const useAgreements = () => {
  const [agreements, setAgreements] = useState<{ [key: number]: boolean }>(
    signUpTerms.reduce((acc, term) => ({ ...acc, [term.id]: false }), {}),
  );

  const toggleAgreement = (id: number) => {
    setAgreements((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAll = () => {
    if (allChecked) {
      setAgreements(
        signUpTerms.reduce((acc, term) => ({ ...acc, [term.id]: false }), {}),
      );
    } else {
      setAgreements(
        signUpTerms.reduce((acc, term) => ({ ...acc, [term.id]: true }), {}),
      );
    }
  };

  const areRequiredChecked = () => {
    return signUpTerms.every((term) => {
      if (term.option === 'required') {
        return agreements[term.id];
      }
      return true;
    });
  };

  const allChecked = Object.values(agreements).every((value) => value);

  return {
    agreements,
    toggleAgreement,
    toggleAll,
    areRequiredChecked,
    allChecked,
  };
};

export default useAgreements;
