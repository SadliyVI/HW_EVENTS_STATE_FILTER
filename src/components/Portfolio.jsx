import React from 'react';
import Toolbar from './Toolbar.jsx';
import ProjectList from './ProjectList.jsx';
import { projects as allProjects } from '../data/projects.js';

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 'All',
        };
    }

    handleSelectFilter = (filter) => {
        this.setState({ selected: filter });
    };

    getFilters(projects) {
        const categories = Array.from(new Set(projects.map((p) => p.category)));
        return ['All', ...categories];
    }

    getVisibleProjects(projects, selected) {
        if (selected === 'All') return projects;
        return projects.filter((p) => p.category === selected);
    }

    render() {
        const { selected } = this.state;

        const filters = this.getFilters(allProjects);
        const visible = this.getVisibleProjects(allProjects, selected);

        return (
            <div className="portfolio">
                <Toolbar
                    filters={filters}
                    selected={selected}
                    onSelectFilter={this.handleSelectFilter}
                />

                <ProjectList projects={visible} />
            </div>
        );
    }
}