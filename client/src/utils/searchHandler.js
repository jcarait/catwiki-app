export const searchHandler = (e, data, navigate) => {
  const searchValue = e.target.value;
  if (e.key === "Enter") {
    const searchTarget = data.filter((cat) => cat.name === searchValue);
    if (searchTarget.length > 0) {
      navigate(`/cat-profile/${searchTarget[0].id}`, {
        state: { name: searchTarget[0].name, id: searchTarget[0].id },
      });
    }
  }
};
