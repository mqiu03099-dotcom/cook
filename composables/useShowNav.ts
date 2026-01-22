export const useShowNav = () => {
  const getShowNav = useState("getShowNav", () => false);

  const setShowNav = (value: boolean) => {
    getShowNav.value = value;
  };

  return {
    getShowNav,
    setShowNav,
  };
};

