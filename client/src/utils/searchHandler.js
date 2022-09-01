export const searchHandler = (data, navigate, e, searchBtn) => {
  const searchValue = searchBtn;

  const searchFilter = () => {
    const searchTarget = data.filter((cat) => cat.name === searchValue);
    if (searchTarget.length > 0) {
      navigate(`/cat-profile/${searchTarget[0].id}`, {
        state: { name: searchTarget[0].name, id: searchTarget[0].id },
      });
    }
  };

  if (e.key === "Enter") {
    searchFilter();
  }

  searchFilter();
};
