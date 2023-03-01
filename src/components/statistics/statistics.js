import PropTypes from 'prop-types';
import styles from './Statistics.module.css';


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const listItems = ((stats) => stats.map(item =>
    <li className={styles.item} key={item.id}
    style={{
        backgroundColor: getRandomHexColor()
    }}>
        <span className={styles.label}>{item.label}</span>
        <span className={styles.percentage}>{item.percentage}</span>
    </li>
    ));

const Statistics = ({
    title,
    stats,
}) => (
    <section className={styles.statistics__container}>
        <div className={styles.statistics}>
            { title !== '' && (
                <h2 className={styles.title}>{title}</h2>
            )}
        
            <ul className={styles.stat_list}>
                {listItems(stats)}
            </ul>
        </div>
    </section>
);

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array.isRequired,
};

export default Statistics;