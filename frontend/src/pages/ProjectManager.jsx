import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const API = "http://localhost:8000/api";

export default function App() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    status: "planned",
    deadline: "",
    budget: ""
  });

  const load = () =>
    fetch(`${API}/projects`)
      .then(r => r.json())
      .then(setProjects);

  useEffect(() => { load(); }, []);

  const submit = async (e) => {
    e.preventDefault();
    await fetch(`${API}/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        budget: form.budget ? Number(form.budget) : null
      })
    });
    setForm({ name:"", description:"", status:"planned", deadline:"", budget:"" });
    load();
  };

  return (
    <div className="container-fluid min-vh-100 bg-white">
      {/* HEADER */}
      <header className="border-bottom py-3 mb-4">
        <h2 className="text-center fw-bold text-primary">Project Manager</h2>
      </header>

      {/* MAIN GRID */}
      <div className="row g-0">
        {/* LEFT PANEL */}
        <div className="col-md-6 border-end px-4">
          <h4 className="fw-semibold mb-3">Add New Project</h4>
          <div className="card shadow-sm">
            <div className="card-body">
              <form onSubmit={submit} className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Name</label>
                  <input className="form-control"
                        value={form.name}
                        onChange={e=>setForm({...form, name:e.target.value})}
                        required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <select className="form-select"
                          value={form.status}
                          onChange={e=>setForm({...form, status:e.target.value})}>
                    <option value="planned">Planned</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label">Description</label>
                  <textarea className="form-control"
                            value={form.description}
                            onChange={e=>setForm({...form, description:e.target.value})} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Deadline</label>
                  <input type="date" className="form-control"
                        value={form.deadline}
                        onChange={e=>setForm({...form, deadline:e.target.value})} />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Budget</label>
                  <input type="number" step="0.01" className="form-control"
                        value={form.budget}
                        onChange={e=>setForm({...form, budget:e.target.value})} />
                </div>
                <div className="col-12 text-end">
                  <button type="submit" className="btn btn-primary px-4">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="col-md-6 px-4">
          <h4 className="fw-semibold mb-3">All Projects</h4>
          <div>
            {projects.length === 0 ? (
              <p className="text-muted">No projects yet.</p>
            ) : (
              <div className="row">
                {projects.map(p => (
                  <div key={p.id} className="col-12 mb-3">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="fw-bold mb-1">{p.name}</h5>
                        <p className="text-muted mb-2">{p.description || "—"}</p>
                        <div className="d-flex flex-wrap small text-secondary">
                          <span className="me-3"><strong>Status:</strong> {p.status}</span>
                          <span className="me-3"><strong>Deadline:</strong> {p.deadline ?? "—"}</span>
                          <span><strong>Budget:</strong> {p.budget ?? "—"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
