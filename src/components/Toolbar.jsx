export default function Toolbar({ filters, selected, onSelectFilter }) {
    return (
        <div className="toolbar" role="toolbar" aria-label="Portfolio filters">
            {filters.map((filter) => {
                const isActive = filter === selected;

                return (
                    <button
                        key={filter}
                        type="button"
                        className={`toolbar__btn ${isActive ? 'is-active' : ''}`}
                        onClick={() => onSelectFilter(filter)}
                    >
                        {filter}
                    </button>
                );
            })}
        </div>
    );
}