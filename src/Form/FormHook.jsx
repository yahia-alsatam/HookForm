import "./FormHook.css";

const FormHook = () => {
  return (
    <>
      <form>
        <div class="form-group mb-3">
          <label className="form-label" for="name">
            name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter name"
          />
        </div>
        <div class="form-group mb-3">
          <label className="form-label" for="email">
            email
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group mb-3">
          <label className="form-label" for="password">
            password
          </label>
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter password"
          />
        </div>
        <div class="form-group mb-3">
          <label className="form-label" for="confirmPassword">
            confirmPassword
          </label>
          <input
            type="confirmPassword"
            class="form-control"
            id="confirmPassword"
            placeholder="Enter email"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default FormHook;
