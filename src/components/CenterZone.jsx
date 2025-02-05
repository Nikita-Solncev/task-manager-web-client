import "./CenterZone.css"
export function CenterZone() {
    return (
        <div className="center-zone">
        <h2 className="zone-title">Recent Tasks</h2>
        <div className="tasks-container">
            <div className="task-card">
                <h3 className="task-title">Task</h3>
                <p className="task-project">Project: Project 1</p>
                <p className="task-status">Status: <span className="status-text">Completed</span></p>
            </div>
            <div className="task-card">
                <h3 className="task-title">Task</h3>
                <p className="task-project">Project: Project 2</p>
                <p className="task-status">Status: <span className="status-text">In Progress</span></p>
            </div>
            <div className="task-card">
                <h3 className="task-title">Task</h3>
                <p className="task-project">Project: Project 3</p>
                <p className="task-status">Status: <span className="status-text">Pending</span></p>
            </div>
        </div>
    </div>
    )
}