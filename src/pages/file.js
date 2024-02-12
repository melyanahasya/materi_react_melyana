const deleteUser = async (id) => {
    try {
      await axios.delete("http://localhost:5000/minumans/" + id);
      window.location.reload();
      getAll();
    } catch (error) {
      console.log(error);
    }
  };