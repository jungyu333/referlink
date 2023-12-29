import { useBlocker } from '@hooks/useBlocker';
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const useCallbackPrompt = (
  when: boolean,
): [boolean, () => void, () => void, boolean] => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPrompt, setShowPrompt] = useState(false);
  const [lastLocation, setLastLocation] = useState<any>(null);
  const [confirmedNavigation, setConfirmedNavigation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cancelNavigation = useCallback(() => {
    setShowPrompt(false);
    setLastLocation(null);
  }, []);

  const handleBlockedNavigation = useCallback(
    (nextLocation: any) => {
      if (
        !confirmedNavigation &&
        nextLocation.location.pathname !== location.pathname
      ) {
        setShowPrompt(true);
        setLastLocation(nextLocation);
        return false;
      }
      return true;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [confirmedNavigation, location],
  );

  const confirmNavigation = useCallback(() => {
    setShowPrompt(false);
    setConfirmedNavigation(true);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    if (confirmedNavigation && lastLocation) {
      navigate(lastLocation.location?.pathname);

      setConfirmedNavigation(false);
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmedNavigation, lastLocation]);

  useBlocker(handleBlockedNavigation, when);

  return [showPrompt, confirmNavigation, cancelNavigation, isLoading];
};
