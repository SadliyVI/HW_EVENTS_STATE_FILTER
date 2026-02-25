export default function ProjectList({ projects }) {
    return (
        <div className="project-list" aria-label="Projects grid">
            {projects.map((p, idx) => (
                <div className="project-card" key={`${p.category}-${idx}-${p.img}`}>
                    <img className="project-card__img" src={p.img} alt={p.category} loading="lazy" />
                </div>
            ))}
        </div>
    );
}