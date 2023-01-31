const Settings = () => {
  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Settings</p>
          <button type="button" className="delete" aria-label="close" />
        </header>
        <section className="modal-card-body">-- Content ... --</section>
        <footer className="modal-card-foot">
          <button type="button" className="button is-success">
            Save changes
          </button>
          <button type="button" className="button">
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Settings;
