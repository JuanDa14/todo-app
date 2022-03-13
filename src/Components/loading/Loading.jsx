const Loading = () => {
  return (
    <div className=" container-fluid">
      <div className="d-flex justify-content-center align-items-center loading__container">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
