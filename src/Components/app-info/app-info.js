import './app-info.css';

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Accounting of employees in the company</h1>
            <h2>total number of employees: {employees}</h2>
            <h2>will receive the prize: {increased}</h2>
        </div>
    );
}

export default AppInfo;