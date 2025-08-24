import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:8000/api";

export default function Landing() {
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/hello`)
      .then(res => res.json())
      .then(json => setTask(json));
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Testni zadatak</h1>
      {task ? (
        <div>
          <p className="fw-semibold">{task.message}</p>
          <ol>
            {task.task_instructions.map((t, i) => (
              <li key={i} className="mb-2">{t}</li>
            ))}
          </ol>
          <div className="text-center mt-4">
            <button className="btn btn-primary" onClick={() => navigate("/projects")}>
              Otvori Project Manager
            </button>
          </div>
        </div>
      ) : (
        <p>Učitavam zadatak...</p>
      )}
    </div>
  );
}
